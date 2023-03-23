import { Vec2 } from "./vec2";
import { Vec2Math } from "./vec2Math";
import { MATH_ERROR, isEqual } from "./math";

export class Vec2Line {
    private _vec1: Vec2 = Vec2.Zero();
    private _vec2: Vec2 = Vec2.Zero();

    private _direction: Vec2;
    private _ort: Vec2;

    private _length: number;
    private _length2: number;

    /**
     * Y = K*X + B
     * @type {number}
     */
    private _k: number = 0;
    private _b: number = 0;

    constructor(vec1, vec2) {
        this._vec1 = vec1;
        this._vec2 = vec2;

        this._direction = Vec2Math.diff(this._vec1, this._vec2);
        this._length = this._direction.length;
        this._length2 = this._direction.length2;
        this._ort = this._direction.ort;

        this.calculateKB();
    }

    /**
     * Determines if given point lays on the line
     * @param vec
     * @returns {boolean}
     */
    inBetween(vec) {
        const l1 = Vec2Math.diff(vec, this._vec1).length;
        const l2 = Vec2Math.diff(this._vec2, vec).length;
        const sum = l1 + l2;


        return isEqual(this._length, sum, MATH_ERROR);
    }

    /**
     * Checks if vector which lies on this line is in between vec1 and vec2
     * @param vec
     */
    inBetweenFast(vec: Vec2) {
        return vec.isInsideRect(this._vec1, this._vec2);
    }

    calculateKB() {
        if (this._vec1.y === this._vec2.y) {
            // Horizontal line
            this._b = this._vec1.y;
            this._k = 0;
        } else if (this._vec1.x === this._vec2.x) {
            // Vertical line
            this._b = NaN;
            this._k = NaN;
        } else {
            this._b = (this._vec1.x * this._vec2.y - this._vec1.y * this._vec2.x) / (this._vec1.x - this._vec2.x)
            this._k = (this._vec1.y - this._vec2.y) / (this._vec1.x - this._vec2.x);
        }
    }

    makeVec2FromX(x) {
        return new Vec2(x, this._k * x + this._b);
    }

    copy() {
        return new Vec2Line(
            this._vec1,
            this._vec2
        )
    }

    moveBy(vec) {
        this._vec1.addSelf(vec);
        this._vec2.addSelf(vec);
        this.calculateKB();
    }

    getPointProjection(vec) {
        const a = this.direction;
        const b = Vec2Math.diff(vec, this._vec1);
        const cosabD = Vec2Math.dot(a, b) / (this.length);

        return this._vec1.sum(
            this.ort.mul(cosabD)
        );
    }

    get B() {
        return this._b;
    }

    get K() {
        return this._k;
    }

    get length() {
        return this._length;
    }

    get direction() {
        return this._direction;
    }

    get ort() {
        return this._ort;
    }

    get vec1() {
        return this._vec1;
    }

    get vec2() {
        return this._vec2;
    }

    static Vertical(x) {
        return new Vec2Line(
            new Vec2(x, 0),
            new Vec2(x, Number.MAX_SAFE_INTEGER)
        )
    }

    static Horizontal(y) {
        return new Vec2Line(
            new Vec2(0, y),
            new Vec2(Number.MAX_SAFE_INTEGER, y)
        )
    }
}