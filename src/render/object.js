import {Vec2, Vec2Line, Vec2Math} from "./vec2";

export class BallsObject {
    previousPosition = Vec2.Zero();
    currentPosition = Vec2.Zero();

    acc = Vec2.Zero();

    radius = 10;
    bounceValue = 1.1;

    /**
     * Creates balls object
     * @param {Vec2} position
     */
    constructor(position) {
        this.previousPosition = position;
        this.currentPosition = position;
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
    }

    /**
     *
     * @param {BallsObject} obj
     */
    collide(obj) {
        const between = Vec2Math.diff(this.currentPosition, obj.currentPosition);
        const distance = between.length;
        const requiredDistance = this.radius + obj.radius;

        if (distance < this.radius + obj.radius) {
            const normalized = between.normalized;
            const delta = requiredDistance - distance;
            this.currentPosition.add(Vec2Math.mul(normalized, this.radius / requiredDistance * delta * this.bounceValue));
            obj.currentPosition.sub(Vec2Math.mul(normalized, obj.radius / requiredDistance * delta * obj.bounceValue))
        }
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