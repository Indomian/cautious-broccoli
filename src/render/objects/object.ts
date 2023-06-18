import {SolverObjectTypes} from "./types";
import {Vec2} from "../vector/vec2";
import {BaseSolverSpace} from "../solver/baseSolverSpace";
import {Vec2Rect} from "../vector/vec2Rect";

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

    inside(boundary: Vec2Rect):boolean {
        return this.currentPosition.x >= boundary.left &&
            this.currentPosition.x <= boundary.right &&
            this.currentPosition.y >= boundary.top &&
            this.currentPosition.y <= boundary.bottom;
    }

    abstract addToSpace(solverSpace: BaseSolverSpace);

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
