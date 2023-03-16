import { Vec2 } from "./vec2";
import { Vec2ExceptionParallel } from "./exceptions";
import { Vec2Line } from "./vec2Line";

export class Vec2Math {
    static diff(vec1: Vec2, vec2: Vec2): Vec2 {
        return new Vec2(vec1.x - vec2.x, vec1.y - vec2.y);
    }

    static mul(vec1: Vec2, scalar: number): Vec2 {
        return new Vec2(vec1.x * scalar, vec1.y * scalar);
    }

    /**
     * Calculates distance between 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */
    static distance(vec1: Vec2, vec2: Vec2): number {
        return Vec2Math.diff(vec1, vec2).length;
    }

    /**
     * Calculates square of distance between 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */
    static distance2(vec1: Vec2, vec2: Vec2): number {
        return Vec2Math.diff(vec1, vec2).length2;
    }

    /**
     * Finds intersection between 2 lines
     * @param {Vec2Line} line1
     * @param {Vec2Line} line2
     * @returns {Vec2}
     */
    static intersect(line1, line2) {
        if (line1.K === line2.K) {
            throw new Vec2ExceptionParallel()
        }

        if (isNaN(line1.K) || isNaN(line2.K)) {
            // One of two lines is vertical
            if (isNaN(line1.K)) {
                return line2.makeVec2FromX(line1._vec1.x);
            } else {
                return line1.makeVec2FromX(line2._vec1.x);
            }
        } else {
            const x = (line1.B - line2.B) / (line2.K - line1.K);
            return line1.makeVec2FromX(x);
        }
    }

    /**
     * Dot product of 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */
    static dot(vec1: Vec2, vec2: Vec2): number {
        return vec1.x * vec2.x + vec1.y * vec2.y;
    }

    /**
     *
     * @param {Vec2} vec
     * @param {Vec2Line} line
     * @returns {Vec2}
     */
    static mirror(vec: Vec2, line: Vec2Line) {
        const normal = line.direction.perpendicular;
        return vec.diff(
            normal.mul(2 * Vec2Math.dot(vec, normal))
        );
    }

    static scale(vec1: Vec2, vec2: Vec2) {
        return new Vec2(
            vec1.x / vec2.x,
            vec1.y / vec2.y
        )
    }
}
