import { Vec2Math } from "./vec2Math";
import { MATH_ERROR2, NullableNumber } from "./math";
import { Vec2ExceptionNoPerpendicularVectorToZeroVector } from "./exceptions";

export class Vec2 {
    private _x: number = 0;
    private _y: number = 0;
    private _length: NullableNumber = null;
    private _length2: NullableNumber = null;

    static lengthCallsCount = 0;
    static length2CallsCount = 0;

    constructor(x: number, y?: number, l?: number) {
        this._x = x;
        if (y === undefined) {
            this._y = x;
        } else {
            this._y = y;
        }

        if (l) {
            this._length = l;
            this._length2 = l * l;
        }
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    set x(x: number) {
        this._x = x;
        this.reset();
    }

    set y(y:number) {
        this._y = y;
        this.reset();
    }

    get length(): number {
        if (this._length === null) {
            this._length = Math.sqrt(this.x*this.x + this.y*this.y);
            Vec2.lengthCallsCount++;
        }

        return this._length;
    }

    /**
     * Returns length^2
     */
    get length2(): number {
        if (this._length2 === null) {
            this._length2 = this._x*this._x + this._y*this._y;
            Vec2.length2CallsCount++;
        }

        return this._length2;
    }

    moveTo(x: number | Vec2, y?: number) {
        if (x instanceof Vec2) {
            this._x = x.x;
            this._y = x.y;
        } else {
            this._x = x;
            this._y = y;
        }

        this.reset();
    }

    reset() {
        this._length = null;
        this._length2 = null;
    }

    /**
     * Adds vec2 to current vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */
    addSelf(vec2: Vec2): Vec2 {
        this._x += vec2.x;
        this._y += vec2.y;
        this._length = null;
        return this;
    }

    moveBy(delta: Vec2) {
        this.addSelf(delta)
    }

    /**
     * Subtract from current vector given vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */
    subSelf(vec2: Vec2): Vec2 {
        this._x -= vec2.x;
        this._y -= vec2.y;
        this._length = null;
        return this;
    }

    /**
     * Flips along X axis
     * @returns {Vec2}
     */
    flipYSelf(): Vec2 {
        this._y = -this._y;
        return this;
    }

    /**
     * Flips along Y axis
     * @returns {Vec2}
     */
    flipXSelf(): Vec2 {
        this._x = -this._x;
        return this;
    }

    flipSelf(): Vec2 {
        this._x = -this._x;
        this._y = -this._y;
        return this;
    }

    /**
     * Checks if this vector equals given vector using global MATH_ERROR const
     * @param vec2
     */
    equals(vec2) {
        return Vec2Math.distance2(this, vec2) < MATH_ERROR2;
    }

    /**
     * Sums current vector and given vector and returns new vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */
    sum(vec2: Vec2): Vec2 {
        return new Vec2(this.x + vec2.x, this.y + vec2.y);
    }

    /**
     * Calculate difference between current vector and given vector and returns
     * new vector
     *
     * @param {Vec2} vec2
     * @returns {Vec2}
     */
    diff(vec2: Vec2) {
        return new Vec2(this.x - vec2.x, this.y - vec2.y);
    }

    /**
     * Multiplicates vector by number
     * @param {number} value
     * @returns {Vec2}
     */
    mul(value: number) {
        return new Vec2(this.x * value, this.y * value);
    }

    dot(vec: Vec2): number {
        return this.x * vec.x + this.y * vec.y;
    }

    copy() {
        return new Vec2(this.x, this.y);
    }

     applySelf(callback): Vec2 {
        this.x = callback(this.x);
        this.y = callback(this.y);
        return this;
    }

    /**
     * Checks if this vector inside rect created by 2 other vectors.
     * @param vec1
     * @param vec2
     */
    isInsideRect(vec1: Vec2, vec2: Vec2) {
        const leftTopX = Math.min(vec1.x, vec2.x);
        const leftTopY = Math.min(vec1.y, vec2.y);
        const rightBottomX = Math.max(vec1.x, vec2.x);
        const rightBottomY = Math.max(vec1.y, vec2.y);

        return this._x >= leftTopX && this._x <= rightBottomX && this._y >= leftTopY && this._y <= rightBottomY;
    }

    /**
     * Returns normalized vector
     * @returns {Vec2}
     */
    get ort() {
        const l = this.length;
        return new Vec2(this.x / l, this.y / l, 1);
    }

    /**
     * Returns new vector with absolute values for X and Y
     */
    get abs(): Vec2 {
        return new Vec2(
            Math.abs(this.x),
            Math.abs(this.y)
        )
    }

    get perpendicular() {
        if (this.x === 0) {
            // Vertical
            if (this.y > 0) {
                return Vec2.Horizontal().ort
            } else if (this.y < 0) {
                return Vec2.Horizontal().ort.flipSelf();
            } else {
                throw new Vec2ExceptionNoPerpendicularVectorToZeroVector();
            }
        } else if (this.y === 0) {
            // Horizontal
            if (this.x > 0) {
                return Vec2.Vertical().ort
            } else if (this.x < 0) {
                return Vec2.Vertical().ort.flipSelf();
            }
        }

        return new Vec2(
            -this.y,
            this.x
        ).ort;
    }

    static Zero() {
        return new Vec2(0, 0);
    }

    static Horizontal() {
        return new Vec2(1, 0);
    }

    static Vertical() {
        return new Vec2(0, 1);
    }

    static Down(y) {
        return new Vec2(0, y);
    }

    static Right(x) {
        return new Vec2(x, 0);
    }
}








