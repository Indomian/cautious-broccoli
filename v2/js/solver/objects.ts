import {Vector} from "p5";

export class Point {
    position: Vector;
    previousPosition: Vector;

    acceleration: Vector;

    constructor(position: Vector) {
        this.position = position.copy();
        this.previousPosition = position.copy();

        this.acceleration = new Vector(0, 0);
    }

    applyForce(force: Vector) {
        this.acceleration.add(force);
    }

    update(time) {
        let velocity = Vector.sub(this.position, this.previousPosition);
        velocity.add(this.acceleration.mult(time * time));
        this.previousPosition = this.position.copy();
        this.position.add(velocity);
        this.acceleration.mult(0);
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