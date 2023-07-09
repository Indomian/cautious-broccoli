import {BaseSolverSpace} from "./baseSolverSpace";
import {BaseSolverObject} from "../objects/object";
import {Vec2Rect} from "../vector/vec2Rect";
import {Vec2} from "../vector/vec2";
import {BaseRender} from "../render/baseRender";
import {ImmovableLineObject} from "../objects/immovableLine";

export class QuadTree {
    boundary: Vec2Rect;
    capacity: number;
    objects: BaseSolverObject[];
    divided: boolean = false;
    minimumDiag: number = 10;
    nodes: QuadTree[];

    constructor(boundary: Vec2Rect, capacity: number) {
        this.boundary = boundary.copy();
        this.capacity = capacity;
        this.objects = [];
        this.nodes = [];
        this.divided = false;
    }

    clear() {
        if (this.objects.length > 0) {
            this.objects.splice(0);
        }
        if (this.divided) {
            this.nodes.forEach(node => node.clear());
        }
        this.divided = false;
    }

    get canSubdivide(): boolean {
        return this.boundary.diag > this.minimumDiag;
    }

    insert(obj: BaseSolverObject): boolean {
        if (!obj.inside(this.boundary)) {
            return;
        }

        if (this.objects.length < this.capacity) {
            this.objects.push(obj);
            return true;
        }

        if (!this.canSubdivide) {
            this.objects.push(obj);
            return true;
        }

        if (!this.divided) {
            this.subdivide();
            this.divided = true;
        }

        let index = 0;
        while (index < 4) {
            if (this.nodes[index].insert(obj)) {
                index = 5;
            }

            index++;
        }

        return index === 5;
    }

    subdivide() {
        this.nodes[QuadTree.NW] = new QuadTree(this.boundary.nw, this.capacity);
        this.nodes[QuadTree.NE] = new QuadTree(this.boundary.ne, this.capacity);
        this.nodes[QuadTree.SE] = new QuadTree(this.boundary.se, this.capacity);
        this.nodes[QuadTree.SW] = new QuadTree(this.boundary.sw, this.capacity);
    }

    query(range: Vec2Rect): BaseSolverObject[] {
        let result = []
        if (!this.boundary.intersect(range)) {
            return result
        }

        this.objects.forEach(obj => {
            if (obj.intersects(range)) {
                result.push(obj);
            }
        });

        if (this.divided) {
            this.nodes.forEach(subTree => subTree.query(range).forEach(obj => result.push(obj)))
        }

        return result;
    }

    debugRender(render: BaseRender) {
        render.strokeStyle(this.objects.length > 0 ? '#ff0000' : '#00ff00');

        render.rect(
            this.boundary.left,
            this.boundary.top,
            this.boundary.width-2,
            this.boundary.height-2
        )

        if (this.divided) {
            this.nodes.forEach(subTree => subTree.debugRender(render));
        }
    }

    static NW = 0;
    static NE = 1;
    static SE = 2;
    static SW = 3;
}

export class QuadTreeSolverSpace extends BaseSolverSpace {
    root: QuadTree;

    constructor(width, height) {
        super();

        this.root = new QuadTree(
            new Vec2Rect(
                new Vec2(width / 2, height / 2),
                new Vec2(width, height)
            ),
            4
        );
    }

    clear() {
        this.root.clear();
    }

    addObject(obj: BaseSolverObject) {
        this.root.insert(obj);
    }

    addPointObject(worldX, worldY, obj: BaseSolverObject) {
        this.root.insert(obj);
    }

    addRectangularObject(worldLeftTop: Vec2, worldRightBottom: Vec2, obj: BaseSolverObject) {
        this.root.insert(obj);
    }

    debugRender(render:BaseRender) {
        this.root.debugRender(render);
    }
}