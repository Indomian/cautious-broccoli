import { BallsObject } from "./ball";
import { Vec2Line } from "../vector/vec2Line";
import {SolverObjectTypes} from "./types";
import {BaseSolverSpace} from "../solver/baseSolverSpace";
import {Vec2} from "../vector/vec2";
import {Vec2Math} from "../vector/vec2Math";

export class ImmovableLineObject extends BallsObject {
    _direction;
    _line: Vec2Line;

    type = SolverObjectTypes.TypeImmovableLine;
    immovable = true;

    bounceValue = 1;

    constructor(position, direction) {
        super(position, 0);
        this._direction = direction;

        this._line = new Vec2Line(
            this.currentPosition.copy(),
            this.currentPosition.copy().sum(this._direction)
        )
    }

    update(step) {
        this.currentPosition = this._line.vec1;
        this.previousPosition = this._line.vec2;
    }

    addToSpace(solverSpace: BaseSolverSpace) {
        solverSpace.addRectangularObject(
            this._line.vec1,
            this._line.vec2,
            this
        );
    }

    moveBy(delta: Vec2) {
        this.currentPosition.addSelf(delta);
        this.previousPosition.addSelf(delta);
        this._line.moveBy(delta)
    }

    moveTo(position: Vec2) {
        const delta = Vec2Math.diff(position, this._line.vec1);
        this.moveBy(delta);
    }

    debugRender(context: CanvasRenderingContext2D) {
        context.strokeStyle = '#00FF00';
        context.beginPath(); // Start a new path
        context.moveTo(this._line.vec1.x, this._line.vec1.y);
        context.lineTo(this._line.vec2.x, this._line.vec2.y);
        context.stroke(); // Render the path

        context.fillStyle = '#000000';
        context.fillRect(
            this._line.vec1.x, this._line.vec1.y+5,
            10,
            -16
        )
        context.fillStyle = "#ffffff";
        context.textAlign = "start";
        context.fillText(`${this.index}`, this._line.vec1.x, this._line.vec1.y);
    }

    toString() {
        return 'ImmovableLine';
    }
}

export function createImmovableLine(position: Vec2, direction: Vec2): ImmovableLineObject {
    return new ImmovableLineObject(position, direction);
}

export function createImmovableLineFrom2Points(point1: Vec2, point2: Vec2): ImmovableLineObject {
    return new ImmovableLineObject(point1, Vec2Math.diff(point2, point1));
}