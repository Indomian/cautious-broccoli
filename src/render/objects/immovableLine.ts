import { BallsObject } from "./ball";
import { Vec2Line } from "../vector/vec2Line";
import {SolverObjectTypes} from "./types";
import {BaseSolverSpace} from "../solver/baseSolverSpace";
import {Vec2} from "../vector/vec2";
import {Vec2Math} from "../vector/vec2Math";
import {BaseRender} from "../render/baseRender";
import {ImmovableSolverObject} from "./immovable";
import {Vec2Rect} from "../vector/vec2Rect";

export class ImmovableLineObject extends ImmovableSolverObject {
    _direction: Vec2;
    _line: Vec2Line;

    type = SolverObjectTypes.TypeImmovableLine;
    immovable = true;

    bounceValue = 1;

    private collisionRange: Vec2Rect;

    constructor(position: Vec2|Vec2Line, direction?: Vec2) {
        super();
        if (position instanceof Vec2Line) {
            this.currentPosition = position.vec1.copy();
            this.previousPosition = position.vec1.copy();
            this._direction = position.direction.copy().flipSelf();
        } else {
            this.currentPosition = position.copy();
            this.previousPosition = position.copy();

            this._direction = direction;
        }

        this._line = new Vec2Line(
            this.currentPosition.copy(),
            this.currentPosition.copy().sum(this._direction)
        )

        this.collisionRange = new Vec2Rect(
            this.currentPosition.sum(this._direction.mul(0.5)),
            this._direction.abs
        );
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
        this.collisionRange = new Vec2Rect(
            this.currentPosition.sum(this._direction.mul(0.5)),
            this._direction.abs
        );
    }

    moveTo(position: Vec2) {
        const delta = Vec2Math.diff(position, this._line.vec1);
        this.moveBy(delta);
    }

    debugRender(context: BaseRender) {
        context.strokeStyle('#00FF00');
        context.line(this._line.vec1, this._line.vec2);
        context.text(`${this.index}`, this._line.vec1);

        context.strokeStyle('#FFFFFF');
        context.lineWidth(10);
        const point2 = this.currentPosition.sum(this._line.normal.flipSelf().mul(100));
        context.line(this.currentPosition.x, this.currentPosition.y, point2.x, point2.y);

        context.lineWidth(1);

        context.strokeStyle('#FF0000');
        context.rect(
            this.collisionRange.left,
            this.collisionRange.top,
            this.collisionRange.width,
            this.collisionRange.height
        );
    }

    toString() {
        return 'ImmovableLine';
    }

    inside(boundary: Vec2Rect):boolean {
        return boundary.intersect(this.collisionRange);
    }

    intersects(range: Vec2Rect): boolean {
        if (!range.intersect(this.collisionRange)) {







            return false;
        }

        if (range.contains(this._line.vec1) || range.contains(this._line.vec2)) {
            return true;
        }

        if (this.collisionRange.top < range.top && this.collisionRange.bottom > range.top) {
            // TOP CROSS
            return true;
        }

        if (this.collisionRange.top < range.bottom && this.collisionRange.bottom > range.bottom) {
            // BOTTOM CROSS
            return true;
        }

        if (this.collisionRange.left < range.left && this.collisionRange.right > range.left) {
            // LEFT CROSS
            return true;
        }

        if (this.collisionRange.left < range.right && this.collisionRange.right > range.right) {
            // RIGHT
            return true;
        }
    }

    isPointInsideObject(point: Vec2): boolean {
        return false;
    }

    getCollisionRange(): Vec2Rect {
        return this.collisionRange;
    }
}

export function createImmovableLine(position: Vec2, direction: Vec2): ImmovableLineObject {
    return new ImmovableLineObject(position, direction);
}

export function createImmovableLineFrom2Points(point1: Vec2, point2: Vec2): ImmovableLineObject {
    return new ImmovableLineObject(point1, Vec2Math.diff(point2, point1));
}