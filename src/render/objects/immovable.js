import {BallsObject} from "./object";
import {TYPE_IMMOVABLE_BALL} from "./types";

export class ImmovableBallsObject extends BallsObject {
    type = TYPE_IMMOVABLE_BALL;

    /**
     * @type {Vec2}
     * @private
     */
    _fixedPosition = null;

    /**
     * @param {Vec2} position
     * @param {number} [radius]
     */
    constructor(position, radius) {
        super(position, radius);
        this._fixedPosition = position.copy();
    }

    update(step) {
        this.currentPosition = this._fixedPosition;
        this.previousPosition = this._fixedPosition;
    }
}