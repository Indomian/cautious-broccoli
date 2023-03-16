import {SolverObjectTypes} from "./types";
import {Vec2} from "../vector/vec2";

export class BaseSolverObject {
    readonly type: SolverObjectTypes = SolverObjectTypes.TypeNull;
    readonly index: number;
    readonly immovable: boolean;

    previousPosition = Vec2.Zero();
    currentPosition = Vec2.Zero();

    constructor() {
        this.index = BaseSolverObject.index++;
    }

    update(step) {

    }

    accelerate(acc) {

    }

    collide(obj) {

    }

    addToGrid(collisionGrid) {

    }

    static index = 0;
}
