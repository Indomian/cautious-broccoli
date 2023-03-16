import { BallsObject } from "./ball";
import { Vec2Line } from "../vector/vec2Line";
import {SolverObjectTypes} from "./types";
import {CollisionGrid} from "../grid";

export class ImmovableLineObject extends BallsObject {
    _direction;
    _line;

    type = SolverObjectTypes.TypeImmovableLine;
    immovable = true;

    constructor(position, direction) {
        super(position, 0);
        this._direction = direction;

        this._line = new Vec2Line(
            this.currentPosition.copy(),
            this.currentPosition.copy().sum(this._direction)
        )
    }

    update(step) {
        this.currentPosition = this._line._vec1;
        this.previousPosition = this._line._vec2;
    }

    addToGrid(collisionGrid: CollisionGrid) {
        collisionGrid.addObjectToCells(
            this._line._vec1,
            this._line._vec2,
            this
        );
    }

}