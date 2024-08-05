import {Point} from "./objects";
import {Vector} from "p5";
import {Rect} from "../math/rect";

export type ConstraintFunction = (obj: Point) => void;

export function circleConstraint(center: Vector, r: number): ConstraintFunction {
    const r2 = r * r;
    return function (obj: Point) {
        const diff = Vector.sub(obj.position, center);
        const max = r - obj.size / 2;
        if (diff.mag() > max) {
            diff.setMag(max);
            obj.position.set(Vector.add(center, diff));
            obj.collided = true;
        }
    }
}

export function negativeCircleConstraint(center: Vector, r: number): ConstraintFunction {
    const r2 = r * r;
    return function (obj: Point) {
        const diff = Vector.sub(obj.position, center);
        const min = r + obj.size / 2;
        if (diff.mag() < min) {
            diff.setMag(min);
            obj.position.set(Vector.add(center, diff));
            obj.collided = true;
        }
    }
}

export function rectConstraint(center: Vector, size: Vector): ConstraintFunction {
    const left = center.x - size.x / 2;
    const right = center.x + size.x / 2;
    const top = center.y - size.y / 2;
    const bottom = center.y + size.y / 2;
    return function (obj: Point) {
        const v = [0, 0];
        if (obj.boundingBox.bottom > bottom) {
            v[1] = -obj.boundingBox.bottom + bottom;
        }
        if (obj.boundingBox.top < top) {
            v[1] = -obj.boundingBox.top + top;
        }
        if (obj.boundingBox.right > right) {
            v[0] = - obj.boundingBox.right + right;
        }
        if (obj.boundingBox.left < left) {
            v[0] = -obj.boundingBox.left + left;
        }
        if (v[0] !== 0 || v[1] !== 0) {
            obj.collided = true;
            obj.position.add(v);
        }
    }
}

export function negativeRectConstraint(center: Vector, size: Vector): ConstraintFunction {
    const left = center.x - size.x / 2;
    const right = center.x + size.x / 2;
    const top = center.y - size.y / 2;
    const bottom = center.y + size.y / 2;
    const rect = new Rect(center, size);
    return function (obj: Point) {
        if (!rect.intersect(obj.boundingBox)) {
            return;
        }

        const v = [0, 0];
        if (obj.boundingBox.top < bottom && obj.boundingBox.bottom > bottom) {
            v[1] = -obj.boundingBox.top + bottom;
        }

        if (obj.boundingBox.bottom > top && obj.boundingBox.top < top) {
            v[1] = -obj.boundingBox.bottom + top;
        }

        if (obj.boundingBox.right > left && obj.boundingBox.left < left) {
            v[0] = left - obj.boundingBox.right;
        }

        if (obj.boundingBox.left < right && obj.boundingBox.right > right) {
            v[0] = right - obj.boundingBox.left;
        }

        if (v[0] !== 0 || v[1] !== 0) {
            if (Math.abs(v[0]) > Math.abs(v[1])) {
                if (v[1] !== 0) {
                    v[0] = 0;
                }
            } else {
                if (v[0] !== 0) {
                    v[1] = 0;
                }
            }

            obj.collided = true;
            obj.position.add(v);
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
