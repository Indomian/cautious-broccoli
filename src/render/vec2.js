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

    static Zero() {
        return new Vec2(0, 0);
    }
}

export class Vec2Math {
    static diff(vec1, vec2) {
        return new Vec2(vec1.x - vec2.x, vec1.y - vec2.y);
    }

    static mul(vec1, scalar) {
        return new Vec2(vec1.x * scalar, vec1.y * scalar);
    }
}
