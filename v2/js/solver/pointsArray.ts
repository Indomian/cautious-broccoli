import {Vector} from "p5";

export const worldPoints = new Float64Array();

export function addPoint(position: Vector, size: number): number {
    const offset = worldPoints.length;
    worldPoints.set([
        position.x,
        position.y,
        position.x,
        position.y,
        0,
        0,
        size
    ], offset);
    return offset;
}

export function applyForce(offset: number, force: Vector) {
    worldPoints.set([
        force.x,
        force.y
    ], offset + 4);
}

export function updatePoint(offset: number) {
    const velocityX = worldPoints[offset] - worldPoints[offset + 2];
    const velocityY = worldPoints[offset + 1] - worldPoints[offset + 3];
}

export function reset() {
}