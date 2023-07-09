import {Vec2} from "../vector/vec2";
import {BaseSolverObject} from "../objects/object";
import {CollisionCell, GridSolverSpace} from "./gridSolverSpace";
import {BaseSolver} from "./baseSolver";
import {QuadTreeSolverSpace} from "./quadTreeSolverSpace";
import {BaseRender} from "../render/baseRender";
import {Vec2Rect} from "../vector/vec2Rect";

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
        this.objects.forEach(objA => {
            const range = objA.getCollisionRange();
            const possibleObjects = this.space.root.query(range);
            this.stats.addStats('processCollisions.queryPossibleObjects.calls');
            possibleObjects.forEach(objB => {
                if (objA === objB) {
                    return;
                }

                if (objA.immovable && objB.immovable) {
                    return;
                }

                this.stats.addStats('processCollisions.calls');
                objA.collide(objB);
            })
        });
    }

    debugRender(context: BaseRender) {
        this.space.debugRender(context);
        this.objects.forEach(object => object.debugRender(context))
    }
}

function makeKey(obj1, obj2) {
    return [obj1.index, obj2.index].sort().join('-');
}