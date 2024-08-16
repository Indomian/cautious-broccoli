import {Vector} from "p5";
import {Rect} from "../math/rect";
import {Speed, TimeInSeconds} from "./types";
import {collidePhysicsPoints, collidePoints} from "./colliders";

export const MINIMUM_ACC = 0.0000001;

abstract class SolverObject {
    _position: Vector;
    _previousPosition: Vector;

    abstract update(time: TimeInSeconds): void;
    abstract applyForce(force: Vector): void;
    abstract collide(obj: SolverObject): void;
}

export class Point extends SolverObject{
    acceleration: Vector;
    _previousAcceleration: Vector;
    size: number = 5;
    sizeVector: Vector;

    _boundingBox: Rect;

    collided: boolean = false;

    _prevTime: number = 1;

    constructor(position: Vector, size: number = 5) {
        super();
        this._position = position.copy();
        this._previousPosition = position.copy();

        this.acceleration = new Vector(0, 0);
        this._previousAcceleration = this.acceleration.copy();
        this.size = size;
        this.sizeVector = new Vector(this.size, this.size);

        this._boundingBox = new Rect(this.position, this.sizeVector);
    }

    applyForce(force: Vector) {
        this.acceleration.add(force);
    }

    update(time: TimeInSeconds) {
        let velocity = this.velocity;

        this.previousPosition.set(this._position);

        const k = time * time / 2;

        this._position.add(
            velocity.x * time + this.acceleration.x * k,
            velocity.y * time + this.acceleration.y * k
        );

        this._previousAcceleration.set(this.acceleration);
        this.acceleration.mult(0);

        this.collided = false;
        this._prevTime = time;
    }

    collide(obj: Point): void {
        if (obj === this) {
            return;
        }

        collidePoints(this, obj);
    }

    get boundingBox(): Rect {
        return this._boundingBox;
    }

    get position(): Vector {
        return this._position;
    }

    get previousPosition(): Vector {
        return this._previousPosition;
    }

    get distance(): Vector {
        return Vector.sub(this.position, this.previousPosition);
    }

    get velocity(): Speed {
        if (this._prevTime === 0) {
            return new Vector(0, 0)
        }
        const prevVelocity = this.distance.div(this._prevTime);
        const prevAcc = this._previousAcceleration.copy().mult(this._prevTime / 2);
        return prevVelocity.add(prevAcc);
    }
}

export class ImmovablePoint extends Point {
    applyForce(force: Vector) {}

    update(time: TimeInSeconds) {
        this._position.set(this._previousPosition);
        this.collided = false;
    }

    collide(obj: Point) {
        if (obj instanceof ImmovablePoint) {
            return;
        }

        super.collide(obj);
    }

    get velocity(): Speed {
        return new Vector();
    }
}

export class PhysicsPoint extends Point {
    mass: number;
    bounce: number;

    constructor(position: Vector, size: number = 5, mass: number = 1, bounce: number = 1) {
        super(position, size);

        this.mass = mass;
        this.bounce = bounce;
    }

    collide(obj: PhysicsPoint): void {
        if (this === obj) {
            return;
        }

        if (obj instanceof PhysicsPoint) {
            collidePhysicsPoints(this, obj);
        } else {
            collidePoints(this, obj);
        }
    }
}

export class ImmovablePhysicsPoint extends PhysicsPoint {
    applyForce(force: Vector) {}

    update(time: TimeInSeconds) {
        this._position.set(this._previousPosition);
        this.collided = false;
    }

    collide(obj: PhysicsPoint) {
        if (obj instanceof ImmovablePhysicsPoint || obj instanceof ImmovablePoint) {
            return;
        }

        super.collide(obj);
    }
}
