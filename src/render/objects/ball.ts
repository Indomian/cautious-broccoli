import { Vec2 } from "../vector/vec2";
import { Vec2Line } from "../vector/vec2Line";
import { Vec2Math } from "../vector/vec2Math";
import {SolverObjectTypes} from "./types";
import { collide } from "./collisionModels";
import {BaseSolverObject} from "./object";
import {CollisionGrid} from "../grid";

export class BallsObject extends BaseSolverObject {
    acc = Vec2.Zero();

    radius = 10;
    bounceValue = 1.1;

    type = SolverObjectTypes.TypeBall;
    immovable = false;

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
    }

    /**
     * Updates state of object
     * @param {number} step
     */
    update(step) {
        const velocity = this.velocity;
        this.previousPosition = this.currentPosition.copy();
        this.currentPosition.addSelf(
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

    addToGrid(collisionGrid: CollisionGrid) {
        collisionGrid.addObject(
            Math.floor(this.currentPosition.x),
            Math.floor(this.currentPosition.y),
            this
        )
    }

    moveBy(delta: Vec2) {
        this.currentPosition.addSelf(delta);
    }

    isPointInsideObject(point: Vec2): boolean {
        return Vec2Math.distance(this.currentPosition, point) < this.radius;
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