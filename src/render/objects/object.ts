import {SolverObjectTypes} from "./types";
import {Vec2} from "../vector/vec2";

export abstract class BaseSolverObject {
    readonly type: SolverObjectTypes = SolverObjectTypes.TypeNull;
    readonly index: number;
    readonly immovable: boolean;

    previousPosition = Vec2.Zero();
    currentPosition = Vec2.Zero();

    constructor() {
        BaseSolverObject.index += 1;
        this.index = BaseSolverObject.index;
    }

    update(step) {

    }

    accelerate(acc) {

    }

    collide(obj) {

    }

    addToGrid(collisionGrid) {

    }

    debugRender(context: CanvasRenderingContext2D) {

    }

    toString() {
        return 'BaseSolverObject';
    }

    abstract moveBy(delta: Vec2);
    abstract moveTo(position: Vec2);

    abstract isPointInsideObject(point: Vec2): boolean;

    static index = 0;
}
