import {Point} from "./objects";
import {Vector} from "p5";

export type ConstraintFunction = (obj: Point) => void;

export function circleConstraint(center: Vector, r: number): ConstraintFunction {
    const r2 = r * r;
    return function (obj: Point) {
        const diff = Vector.sub(obj.position, center);
        if (diff.magSq() > r2) {
            diff.setMag(r);
            obj.position = Vector.add(center, diff);
            //obj.previousPosition = obj.position.copy();
        }
    }
}

export function distance(obj1: Point, obj2: Point, r: number): ConstraintFunction {
    return function (obj: Point) {
        if (obj !== obj1 && obj !== obj2) {
            return;
        }

        const between = Vector.sub(obj1.position, obj2.position);
        const distance = between.mag();

        if (distance < r) {
            const delta = r - distance;
            if (delta < 0.001) {
                return
            }

            between.normalize();

            obj1.position.add(Vector.mult(between, delta / 2));
            obj2.position.add(Vector.mult(between, -delta / 2));
        }

        if (distance > r) {
            const delta = distance - r;
            if (delta < 0.001) {
                return
            }

            between.normalize();

            obj1.position.sub(Vector.mult(between, delta / 2));
            obj2.position.sub(Vector.mult(between, -delta / 2));
        }
    }
}
