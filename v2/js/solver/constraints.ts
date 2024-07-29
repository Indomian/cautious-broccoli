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
