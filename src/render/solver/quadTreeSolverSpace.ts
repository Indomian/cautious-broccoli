import {BaseSolverSpace} from "./baseSolverSpace";
import {BaseSolverObject} from "../objects/object";
import {Vec2Rect} from "../vector/vec2Rect";
import {Vec2} from "../vector/vec2";

export class QuadTree {
    boundary: Vec2Rect;
    capacity: number;
    objects: BaseSolverObject[];
    divided: boolean = false;
    nodes: QuadTree[];

    constructor(boundary: Vec2Rect, capacity: number) {
        this.boundary = boundary.copy();
        this.capacity = capacity;
        this.objects = [];
        this.nodes = [];
        this.divided = false;
    }

    clear() {
        this.objects = [];
        this.nodes = [];
        this.divided = false;
    }

    insert(obj: BaseSolverObject): boolean {
        if (!obj.inside(this.boundary)) {
            return;
        }

        if (this.objects.length < this.capacity) {
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

    debugRender(context: CanvasRenderingContext2D) {
        context.strokeStyle = this.objects.length > 0 ? '#ff0000' : '#00ff00';

        context.strokeRect(
            this.boundary.left,
            this.boundary.top,
            this.boundary.size.x,
            this.boundary.size.y
        )

        if (this.divided) {
            this.nodes.forEach(subTree => subTree.debugRender(context));
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

    debugRender(context: CanvasRenderingContext2D) {
        this.root.debugRender(context);
    }
}