import {Point} from "./objects";
import {Vector} from "p5";

const WORLD_COEFFICIENT = 10000;

export type ForceFunction = (obj: Point) => void;

export function gravity(value: number = 9.81): ForceFunction {
    const force = new Vector(0, value / WORLD_COEFFICIENT);
    return function (obj: Point) {
        obj.applyForce(force);
    }
}

export function gravityCenter(center: Vector, value: number = 9.81): ForceFunction {
    return function (obj: Point) {
        const direction = Vector.sub(obj.position, center);
        if (direction.magSq() < 0.000000001) {
            return
        }
        obj.applyForce(direction.setMag(- value / WORLD_COEFFICIENT));
    }
}

export function airDensity(density: number): ForceFunction {
    return function (obj: Point) {
        const velocity = Vector.sub(obj.position, obj.previousPosition);
        obj.applyForce(velocity.setMag(-density));
    }
}