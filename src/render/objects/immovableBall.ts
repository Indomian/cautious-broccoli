import {BallsObject} from "./ball";
import {SolverObjectTypes} from "./types";
import {BaseSolverSpace} from "../solver/baseSolverSpace";
import {SQRT2} from "../vector/math";
import {Vec2} from "../vector/vec2";

export class ImmovableBallsObject extends BallsObject {
    type = SolverObjectTypes.TypeImmovableBall;
    immovable = true;
    bounceValue = 0.5;

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
        this.collisionRange.moveTo(this.currentPosition);
    }

    addToSpace(solverSpace: BaseSolverSpace) {
        const vec = new Vec2(
            this.radius * SQRT2,
            this.radius * SQRT2
        )

        const leftTop = this.currentPosition.sum(vec);
        const rightBottom = this.currentPosition.diff(vec);

        solverSpace.addRectangularObject(
            leftTop,
            rightBottom,
            this
        );
    }

    moveTo(position: Vec2) {
        this.currentPosition = position.copy();
        this.previousPosition = position.copy();
        this._fixedPosition = position.copy();
        super.moveTo(position);
    }
}