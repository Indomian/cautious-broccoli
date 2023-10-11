import { Vec2 } from "../vector/vec2";
import { Vec2Line } from "../vector/vec2Line";
import { Vec2Math } from "../vector/vec2Math";
import {SolverObjectTypes} from "./types";
import { collide } from "./collisionModels";
import {BaseSolverObject} from "./object";
import {BaseSolverSpace} from "../solver/baseSolverSpace";
import {Vec2Rect} from "../vector/vec2Rect";
import {BaseRender} from "../render/baseRender";

const MAX_VELOCITY = 10;
const MAX_VELOCITY2 = MAX_VELOCITY ** 2;

export class BallsObject extends BaseSolverObject {
    acc = Vec2.Zero();

    radius = 10;
    bounceValue = 1.1;
    motionReduce = 0.999;

    type = SolverObjectTypes.TypeBall;
    immovable = false;

    private _radius2;

    protected collisionRange: Vec2Rect;
    protected boundary: Vec2Rect;

    /**
     * Creates balls object
     * @param {Vec2} position
     * @param {number} [radius]
     */
    constructor(position, radius) {
        super();
        this.previousPosition = position.copy();
        this.currentPosition = position.copy();

        if (radius !== undefined) {
            this.radius = radius
        }

        this._radius2 = this.radius * this.radius;
        this.collisionRange = new Vec2Rect(this.currentPosition, new Vec2(this.radius * 4));
        this.boundary = new Vec2Rect(this.currentPosition, new Vec2(this.radius * 2));
    }

    /**
     * Updates state of object
     * @param {number} step
     */
    update(step) {
        let velocity = this.velocity.mul(this.motionReduce);
        if (velocity.length2 > MAX_VELOCITY2) {
            velocity = velocity.ort.mul(MAX_VELOCITY);
        }
        this.previousPosition = this.currentPosition.copy();
        this.moveBy(
            velocity.addSelf(
                this.acc.mul(step * step)
            )
        )
        this.acc = Vec2.Zero();
    }

    accelerate(acc) {
        this.acc.addSelf(acc);
        return this;
    }

    setVelocity(vel) {
        this.velocity = vel;
        return this;
    }

    /**
     *
     * @param {BallsObject} obj
     */
    collide(obj) {
        collide(this, obj)
    }

    addToSpace(collisionGrid: BaseSolverSpace) {
        collisionGrid.addPointObject(
            Math.floor(this.currentPosition.x),
            Math.floor(this.currentPosition.y),
            this
        )
    }

    moveBy(delta: Vec2) {
        this.currentPosition.moveBy(delta);
        this.collisionRange.moveBy(delta);
        this.boundary.moveBy(delta);
    }

    moveTo(position: Vec2) {
        this.currentPosition.moveTo(position);
        this.collisionRange.moveTo(this.currentPosition);
        this.boundary.moveTo(this.currentPosition);
    }

    isPointInsideObject(point: Vec2): boolean {
        return Vec2Math.distance(this.currentPosition, point) < this.radius;
    }

    get velocity(): Vec2 {
        return Vec2Math.diff(
            this.currentPosition,
            this.previousPosition
        );
    }

    set velocity(v) {
        this.previousPosition = Vec2Math.diff(this.currentPosition,v);
    }

    /**
     *
     * @returns {Vec2Line}
     */
    get movementVector() {
        return new Vec2Line(this.previousPosition, this.currentPosition);
    }

    get radius2() {
        return this._radius2;
    }

    intersects(range: Vec2Rect): boolean {
        const myRect = new Vec2Rect(this.currentPosition, new Vec2(this.radius, this.radius))
        return myRect.intersect(range);
    }

    getCollisionRange(): Vec2Rect {
        return this.collisionRange;
    }

    getBoundary(): Vec2Rect {
        return this.boundary;
    }

    debugRender(context: BaseRender) {
        context.strokeStyle('#FF0000');
        const range = this.getCollisionRange();
        context.rect(range.left, range.top, range.width, range.height);
    }
}