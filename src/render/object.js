import {Vec2, Vec2Math} from "./vec2";

export class BallsObject {
    previousPosition = Vec2.Zero();
    currentPosition = Vec2.Zero();

    acc = Vec2.Zero();

    radius = 10;
    bounceValue = 1;

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
        const velocity = this.currentPosition.diff(this.previousPosition);
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

    get velocity() {
        return this.currentPosition.diff(this.previousPosition);
    }

    set velocity(v) {
        this.previousPosition = Vec2Math.diff(this.currentPosition,v);
    }
}