import {Point} from "./objects";
import {Vector} from "p5";

/**
 * Collision between 2 balls objects
 * @param {Point} obj1
 * @param {Point} obj2
 */
export function collidePoints(obj1: Point, obj2: Point) {
    const between = Vector.sub(obj1.position, obj2.position);
    const distance = between.mag();
    const requiredDistance = 5;

    if (distance < requiredDistance) {
        const delta = 5 - distance;
        if (delta < 0.001) {
            return
        }

        between.normalize();

        obj1.position.add(Vector.mult(between, delta / 2));
        obj2.position.add(Vector.mult(between, -delta / 2));
    }
}
