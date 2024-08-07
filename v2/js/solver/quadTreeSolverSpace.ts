import * as P5 from "p5";
import {BaseSolverSpace} from "./baseSolverSpace";
import {Sketch} from "../sketch";
import {Rect} from "../math/rect";
import {Point} from "./objects";
import {pointInRange} from "./colliders";
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

    query(range: Rect): Point[] {
        let result = [];
        if (!this.boundary.intersect(range)) {
            return result
        }

        if (this.objects.length === 0) {
            this.divided = false;
            return result;
        }

        this.objects.forEach(obj => {
            if (pointInRange(obj, range)) {
                result.push(obj);
            }
        });

        if (this.divided) {
            this.nodes.forEach(subTree => subTree.query(range).forEach(obj => result.push(obj)))
        }

        return result;
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

export class QuadTreeSolverSpace extends BaseSolverSpace {
    root: QuadTree;

    constructor(sketch: Sketch) {
        super(sketch);

        const center: Vector = new Vector(sketch.world.width / 2, sketch.world.height / 2);
        const size: Vector = new Vector(sketch.world.width, sketch.world.height);

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

    debugRender() {
        this.root.debugRender(this.sketch.p5);
    }
}