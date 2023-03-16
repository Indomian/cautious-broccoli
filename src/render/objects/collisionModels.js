import {Vec2Math} from "../vector/vec2Math";
import {BallsObject} from "./ball";
import {SolverObjectTypes, TYPE_BALL, TYPE_IMMOVABLE_BALL, TYPE_IMMOVABLE_LINE} from "./types";

/**
 * Collision between 2 balls objects
 * @param {BallsObject} obj1
 * @param {BallsObject} obj2
 */
export function collideBallAndBall(obj1, obj2) {
    const between = Vec2Math.diff(obj1.currentPosition, obj2.currentPosition);
    const distance = between.length;
    const requiredDistance = obj1.radius + obj2.radius;

    if (distance < requiredDistance) {
        const normalized = between.ort;
        const delta = requiredDistance - distance;
        obj1.currentPosition.addSelf(Vec2Math.mul(normalized, obj1.radius / requiredDistance * delta * obj1.bounceValue));
        obj2.currentPosition.subSelf(Vec2Math.mul(normalized, obj2.radius / requiredDistance * delta * obj2.bounceValue));
    }
}

/**
 * Collision between ball and immovable ball
 * @param {BallsObject} ball
 * @param {ImmovableBallsObject} immovable
 */
export function collideBallAndImmovableBall(ball, immovable) {
    const between = Vec2Math.diff(
        ball.currentPosition,
        immovable.currentPosition
    );

    const distance = between.length;
    const requiredDistance = ball.radius + immovable.radius;

    if (distance < requiredDistance) {
        const normalized = between.ort;
        const delta = requiredDistance - distance;
        ball.currentPosition.addSelf(Vec2Math.mul(normalized, ball.radius / requiredDistance * delta * ball.bounceValue));
    }
}

/**
 * Collision between ball and immovable line
 * @param {BallsObject} ball
 * @param {ImmovableLineObject} line
 */
export function collideBallAndImmovableLine(ball, line) {
    try {
        const projectionPoint = line._line.getPointProjection(ball.currentPosition);

        if (line._line.inBetween(projectionPoint)) {
            const between = Vec2Math.diff(
                projectionPoint,
                ball.currentPosition
            )

            if (between.length < ball.radius) {
                const normalized = between.ort;

                const delta = ball.radius - between.length;

                ball.currentPosition.subSelf(
                    Vec2Math.mul(normalized, delta * ball.bounceValue)
                )
            }
        }
    } catch (e) {
    }
}

function flipObjects(obj1, obj2) {
    return {
        a: obj2,
        b: obj1
    }
}

export function collide(a, b) {
    let obj1 = a;
    let obj2 = b;
    if (obj1.type > obj2.type) {
        const flipped = flipObjects(obj1, obj2);
        obj1 = flipped.a;
        obj2 = flipped.b
    }

    switch (true) {
        case obj1.type === SolverObjectTypes.TypeBall && obj2.type === SolverObjectTypes.TypeBall:
            return collideBallAndBall(obj1, obj2);
        case obj1.type === SolverObjectTypes.TypeBall && obj2.type === SolverObjectTypes.TypeImmovableBall:
            return collideBallAndImmovableBall(obj1, obj2);
        case obj1.type === SolverObjectTypes.TypeBall && obj2.type === SolverObjectTypes.TypeImmovableLine:
            return collideBallAndImmovableLine(obj1, obj2);
        default:
            return;
    }
}