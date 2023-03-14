import {Vec2Math} from "../vector/vec2";
import {BallsObject} from "./object";
import {TYPE_BALL, TYPE_IMMOVABLE_BALL, TYPE_IMMOVABLE_LINE} from "./types";

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
        const normalized = between.normalized;
        const delta = requiredDistance - distance;
        obj1.currentPosition.add(Vec2Math.mul(normalized, obj1.radius / requiredDistance * delta * obj1.bounceValue));
        obj2.currentPosition.sub(Vec2Math.mul(normalized, obj2.radius / requiredDistance * delta * obj2.bounceValue));
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
        const normalized = between.normalized;
        const delta = requiredDistance - distance;
        ball.currentPosition.add(Vec2Math.mul(normalized, ball.radius / requiredDistance * delta * ball.bounceValue));
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
                const normalized = between.normalized;

                const delta = ball.radius - between.length;

                ball.currentPosition.sub(
                    Vec2Math.mul(normalized, delta * ball.bounceValue)
                )
            }
        }
    } catch (e) {
    }
}

export function collide(obj1, obj2) {
    if (obj1.type > obj2.type) {
        [obj2, obj1] = [obj1, obj2];
    }

    switch (true) {
        case obj1.type === TYPE_BALL && obj2.type === TYPE_BALL:
            return collideBallAndBall(obj1, obj2);
        case obj1.type === TYPE_BALL && obj2.type === TYPE_IMMOVABLE_BALL:
            return collideBallAndImmovableBall(obj1, obj2);
        case obj1.type === TYPE_BALL && obj2.type === TYPE_IMMOVABLE_LINE:
            return collideBallAndImmovableLine(obj1, obj2);
        default:
            return;
    }
}