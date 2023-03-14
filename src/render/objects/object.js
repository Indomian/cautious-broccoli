import {Vec2, Vec2Line, Vec2Math} from "../vector/vec2";
import {TYPE_BALL} from "./types";
import {collide} from "./collisionModels";

export class BallsObject {
    previousPosition = Vec2.Zero();
    currentPosition = Vec2.Zero();

    acc = Vec2.Zero();

    radius = 10;
    bounceValue = 1.1;

    type = TYPE_BALL;

    /**
     * Creates balls object
     * @param {Vec2} position
     * @param {number} [radius]
     */
    constructor(position, radius) {
        this.previousPosition = position.copy();
        this.currentPosition = position.copy();
        if (radius !== undefined) {
            this.radius = radius
        }
    }

    /**
     * Updates state of object
     * @param {number} step
     */
    update(step) {
        const velocity = this.velocity;
        this.previousPosition = this.currentPosition.copy();
        this.currentPosition.add(
            velocity.add(
                this.acc.mul(step * step)
            )
        )
        this.acc = Vec2.Zero();
    }

    accelerate(acc) {
        this.acc.add(acc);
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

    flip() {
        const position = this.currentPosition.copy();
        this.currentPosition = this.previousPosition;
        this.previousPosition = position;
    }

    get velocity() {
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
}