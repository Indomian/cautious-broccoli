import * as P5 from "p5";
import {BaseSolverSpace} from "./baseSolverSpace";
import {Sketch} from "../sketch";
import {Rect} from "../math/rect";
import {Point} from "./objects";
import {objectInRange, pointInRange} from "./colliders";
import {Vector} from "p5";

export class QuadTree {
    boundary: Rect;
    capacity: number;
    objects: Point[];
    divided: boolean = false;
    minimumDiag: number = 2500;
    nodes: QuadTree[];

    constructor(boundary: Rect, capacity: number) {
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
        //this.divided = false;
    }

    get canSubdivide(): boolean {
        return this.boundary.diag > this.minimumDiag;
    }

    insert(obj: Point): boolean {
        if (!this.boundary.contains(obj.position)) {
            return false;
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

    query(range: Rect, result: Point[]): number {
        if (!this.boundary.intersect(range)) {
            return 0;
        }

        if (this.objects.length === 0) {
            this.divided = false;
            return 0;
        }

        this.objects.forEach(obj => {
            if (objectInRange(obj, range)) {
                result.push(obj);
            }
        });

        if (this.divided) {
            this.nodes.forEach(subTree => subTree.query(range, result))
        }

        return result.length;
    }

    debugRender(p5: P5) {
        p5.strokeWeight(1);
        p5.stroke(this.objects.length > 0 ? '#ff0000' : '#00ff00');
        p5.noFill();

        p5.rect(
            this.boundary.left,
            this.boundary.top,
            this.boundary.width-2,
            this.boundary.height-2
        );

        if (this.divided) {
            this.nodes.forEach(subTree => subTree.debugRender(p5));
        }
    }

    static NW = 0;
    static NE = 1;
    static SE = 2;
    static SW = 3;
}

export interface QuadTreeSolverSpaceConfig {
    center: Vector,
    size: Vector
}

export class QuadTreeSolverSpace extends BaseSolverSpace {
    root: QuadTree;

    constructor(config: QuadTreeSolverSpaceConfig) {
        super();

        const center: Vector = config.center;
        const size: Vector = config.size;

        this.root = new QuadTree(
            new Rect(
                center,
                size
            ),
            4
        );
    }

    clear() {
        this.root.clear();
    }

    addObject(obj: Point) {
        this.root.insert(obj);
    }

    debugRender(p5: P5) {
        this.root.debugRender(p5);
    }
}