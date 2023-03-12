export const MATH_ERROR = 0.000001;

export function isEqual(a, b, error) {
    return Math.abs(a - b) < error;
}

export class NoPerpendicularVectorToZeroVector extends Error {}

export class Vec2 {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Adds vec2 to current vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */
    add(vec2) {
        this.x += vec2.x;
        this.y += vec2.y;
        return this;
    }

    /**
     * Subtract from current vector given vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */
    sub(vec2) {
        this.x -= vec2.x;
        this.y -= vec2.y;
        return this;
    }

    /**
     * Flips along X axis
     * @returns {Vec2}
     */
    flipY() {
        this.y = -this.y;
        return this;
    }

    /**
     * Flips along Y axis
     * @returns {Vec2}
     */
    flipX() {
        this.x = -this.x;
        return this;
    }

    flip() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }

    /**
     * Checks if this vector equals given vector using global MATH_ERROR const
     * @param vec2
     */
    equals(vec2) {
        return Vec2Math.distance(this, vec2) < MATH_ERROR;
    }

    /**
     * Sums current vector and given vector and returns new vector
     * @param {Vec2} vec2
     * @returns {Vec2}
     */
    sum(vec2) {
        return new Vec2(this.x + vec2.x, this.y + vec2.y);
    }

    /**
     * Calculate difference between current vector and given vector and returns
     * new vector
     *
     * @param {Vec2} vec2
     * @returns {Vec2}
     */
    diff(vec2) {
        return new Vec2(this.x - vec2.x, this.y - vec2.y);
    }

    /**
     * Multiplicates vector by numner
     * @param {number} value
     * @returns {Vec2}
     */
    mul(value) {
        return new Vec2(this.x * value, this.y * value);
    }

    copy() {
        return new Vec2(this.x, this.y);
    }

    get length() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    /**
     * Returns normalized vector
     * @returns {Vec2}
     */
    get normalized() {
        const l = this.length;
        return new Vec2(this.x / l, this.y / l);
    }

    get perpendicular() {
        if (this.x === 0) {
            // Vertical
            if (this.y > 0) {
                return Vec2.Horizontal().normalized
            } else if (this.y < 0) {
                return Vec2.Horizontal().normalized.flip();
            } else {
                throw new NoPerpendicularVectorToZeroVector();
            }
        } else if (this.y === 0) {
            // Horizontal
            if (this.x > 0) {
                return Vec2.Vertical().normalized
            } else if (this.x < 0) {
                return Vec2.Vertical().normalized.flip();
            }
        }

        return new Vec2(
            -this.y / this.x,
            1
        ).normalized;
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
}

export class Vec2Line {
    vec1 = Vec2.Zero();
    vec2 = Vec2.Zero();

    /**
     * Y = K*X + B
     * @type {number}
     */
    k = 0;
    b = 0;

    constructor(vec1, vec2) {
        this.vec1 = vec1;
        this.vec2 = vec2;

        this.calculateKB();
    }

    /**
     * Determines if given point lays on the line
     * @param vec
     * @returns {boolean}
     */
    inBetween(vec) {
        const l1 = Vec2Math.diff(vec, this.vec1).length;
        const l2 = Vec2Math.diff(this.vec2, vec).length;
        const l = Vec2Math.diff(this.vec1, this.vec2).length;
        return isEqual(l, l1 + l2, MATH_ERROR);
    }

    calculateKB() {
        if (this.vec1.y === this.vec2.y) {
            // Horizontal line
            this.b = this.vec1.y;
            this.k = 0;
        } else if (this.vec1.x === this.vec2.x) {
            // Vertical line
            this.b = NaN;
            this.k = NaN;
        } else {
            this.b = (this.vec1.x * this.vec2.y - this.vec1.y * this.vec2.x) / (this.vec1.x - this.vec2.x)
            this.k = (this.vec1.y - this.vec2.y) / (this.vec1.x - this.vec2.x);
        }
    }

    makeVec2FromX(x) {
        return new Vec2(x, this.k * x + this.b);
    }

    get B() {
        return this.b;
    }

    get K() {
        return this.k;
    }

    get length() {
        return Vec2Math.distance(this.vec1, this.vec2);
    }

    get direction() {
        return Vec2Math.diff(this.vec1, this.vec2);
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

export class ExceptionParallel extends Error {}

export class Vec2Math {
    static diff(vec1, vec2) {
        return new Vec2(vec1.x - vec2.x, vec1.y - vec2.y);
    }

    static mul(vec1, scalar) {
        return new Vec2(vec1.x * scalar, vec1.y * scalar);
    }

    /**
     * Calculates distance between 2 vectors
     * @param {Vec2} vec1
     * @param {Vec2} vec2
     * @returns {number}
     */
    static distance(vec1, vec2) {
        return Vec2Math.diff(vec1, vec2).length;
    }

    /**
     * Finds intersection between 2 lines
     * @param {Vec2Line} line1
     * @param {Vec2Line} line2
     * @returns {Vec2}
     */
    static intersect(line1, line2) {
        if (line1.K === line2.K) {
            throw new ExceptionParallel()
        }

        if (isNaN(line1.K) || isNaN(line2.K)) {
            // One of two lines is vertical
            if (isNaN(line1.K)) {
                return line2.makeVec2FromX(line1.vec1.x);
            } else {
                return line1.makeVec2FromX(line2.vec1.x);
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
    static dot(vec1, vec2) {
        return vec1.x * vec2.x + vec1.y * vec2.y;
    }

    /**
     *
     * @param {Vec2} vec
     * @param {Vec2Line} line
     * @returns {Vec2}
     */
    static mirror(vec, line) {
        const normal = line.direction.perpendicular.normalized;
        return vec.copy().sub(
            normal.mul(2 * Vec2Math.dot(vec, normal))
        );
    }
}
