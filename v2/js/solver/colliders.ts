import {Point} from "./objects";
import {Vector} from "p5";
import {Rect} from "../math/rect";

/**
 * Collision between 2 balls objects
 * @param {Point} obj1
 * @param {Point} obj2
 */
export function collidePoints(obj1: Point, obj2: Point) {

    const between = Vector.sub(obj1.position, obj2.position);
    const distance = between.mag();
    const requiredDistance = (obj1.size + obj2.size) / 2;

    if (distance < requiredDistance) {
        const delta = requiredDistance - distance;
        if (delta < 0.001) {
            return
        }

        between.normalize();

        obj1.position.add(Vector.mult(between, delta * obj1.size * 0.5 / requiredDistance));
        obj2.position.add(Vector.mult(between, -delta * obj2.size * 0.5 / requiredDistance));
    }
}

export function pointInRange(obj: Point, range: Rect) {
    return range.contains(obj.position);
}
