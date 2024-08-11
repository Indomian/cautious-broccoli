import {PhysicsPoint, Point} from "./objects";
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

        const k = delta * 0.5 / requiredDistance;

        obj1.position.add(Vector.mult(between, k * obj2.size));
        obj2.position.add(Vector.mult(between, -k * obj1.size));

        obj1.collided = true;
        obj2.collided = true;
    }
}

export function collidePhysicsPoints(obj1: PhysicsPoint, obj2: PhysicsPoint) {
    const between = Vector.sub(obj1.position, obj2.position);
    const distance = between.mag();
    const requiredDistance = (obj1.size + obj2.size) / 2;

    if (distance < requiredDistance) {
        const delta = requiredDistance - distance;
        if (delta < 0.001) {
            return
        }

        between.normalize();

        const k = delta * 0.5 / requiredDistance; // Divide by 2, because later we will use obj.size and it is diameter, not radius

        obj1.position.add(Vector.mult(between, k * obj2.size * obj2.mass / obj1.mass * obj1.bounce));
        obj2.position.add(Vector.mult(between, -k * obj1.size * obj1.mass / obj2.mass * obj2.bounce));

        obj1.collided = true;
        obj2.collided = true;
    }
}

export function pointInRange(obj: Point, range: Rect) {
    return range.contains(obj.position);
}
