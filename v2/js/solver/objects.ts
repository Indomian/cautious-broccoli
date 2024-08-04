import {Vector} from "p5";
import {Rect} from "../math/rect";

export class Point {
    _position: Vector;
    _previousPosition: Vector;

    acceleration: Vector;
    size: number = 5;
    sizeVector: Vector;

    _boundingBox: Rect;

    constructor(position: Vector, size: number = 5) {
        this._position = position.copy();
        this._previousPosition = position.copy();

        this.acceleration = new Vector(0, 0);
        this.size = size;
        this.sizeVector = new Vector(this.size, this.size);

        this._boundingBox = new Rect(this.position, this.sizeVector);
    }

    applyForce(force: Vector) {
        this.acceleration.add(force);
    }

    update(time: number) {
        let velocity = Vector.sub(this.position, this.previousPosition);
        velocity.add(this.acceleration.mult(time * time));
        this.previousPosition.set(this._position);
        this._position.add(velocity);
        this.acceleration.mult(0);

        if (this._position !== this._boundingBox.position) {
            debugger
        }
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
}

class Box {
    position: Vector;
    size: Vector;

    constructor(
        position: Vector,
        size: Vector
    ) {
        this.position = position;
        this.size = size;
    }
}