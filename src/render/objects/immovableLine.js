import {BallsObject} from "./object";
import {Vec2Line} from "../vector/vec2";
import {TYPE_IMMOVABLE_LINE} from "./types";

export class ImmovableLineObject extends BallsObject {
    _direction;
    _line;

    type = TYPE_IMMOVABLE_LINE;

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

}