import {Vec2} from "../vector/vec2";
import {BaseSolverObject} from "../objects/object";
import {CollisionCell, GridSolverSpace} from "./gridSolverSpace";
import {BaseSolver} from "./baseSolver";
import {QuadTreeSolverSpace} from "./quadTreeSolverSpace";

export class QuadTreeSolver extends BaseSolver {
    gravity: Vec2 = Vec2.Zero();
    space: QuadTreeSolverSpace;

    constructor(worldSize, stats) {
        super(worldSize, stats);
        this.configure();
    }

    reset() {
        super.reset();
        this.space.clear();
    }

    configure() {
        super.configure();
        this.gravity = new Vec2(0, 100);

        this.space = new QuadTreeSolverSpace(
            this.worldSize.x,
            this.worldSize.y
        );
    }

    processOptimizations() {
        this.space.clear();
        this.objects.forEach((obj, index) => {
            obj.addToSpace(this.space);
            this.stats.addStats(`Solver object: ${obj.toString()}`)
        });
    }

    applyForces() {
        this.objects.forEach(obj => obj.accelerate(this.gravity))
    }

    processCollisions() {
    }

    debugRender(context: CanvasRenderingContext2D) {
        this.space.debugRender(context);
    }
}

function makeKey(obj1, obj2) {
    return [obj1.index, obj2.index].sort().join('-');
}