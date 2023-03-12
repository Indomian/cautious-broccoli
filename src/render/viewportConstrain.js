import {Constrain} from "./constrain";
import {Vec2, Vec2Line, Vec2Math} from "./vec2";

export class ViewportConstrain extends Constrain {
    _width = 0;
    _height = 0;
    left = Vec2Line.Vertical(0);
    top = Vec2Line.Horizontal(0);

    right = Vec2Line.Vertical(0);
    bottom = Vec2Line.Horizontal(0);

    constructor(width, height) {
        super()
        this.width = width;
        this.height = height;
    }

    get width() {
        return this._width;
    }

    set width(width) {
        this._width = width;
        this.recalculateSides();
    }

    get height() {
        return this._height;
    }

    set height(height) {
        this._height = height;
        this.recalculateSides();
    }

    recalculateSides() {
        this.top = new Vec2Line(
            new Vec2(this._width, 0),
            new Vec2(0, 0)
        );
        this.right = new Vec2Line(
            new Vec2(this._width, 0),
            new Vec2(this._width, this._height)
        );
        this.bottom = new Vec2Line(
            new Vec2(0, this._height),
            new Vec2(this._width, this._height)

        );
        this.left = new Vec2Line(
            new Vec2(0, this._height),
            new Vec2(0, 0)
        );
    }

    applyConstrain(obj) {
        super.applyConstrain(obj);

        this.checkConstrainWithSide(obj, this.right)
        this.checkConstrainWithSide(obj, this.left)
        this.checkConstrainWithSide(obj, this.bottom)
        this.checkConstrainWithSide(obj, this.top)
    }

    /**
     *
     * @param {BallsObject} obj
     * @param {Vec2Line} side
     */
    checkConstrainWithSide(obj, side) {
        const velocity = obj.velocity;
        const movementVector = obj.movementVector;
        const direction = velocity.copy().flip();

        try {
            const intersectionPoint = Vec2Math.intersect(
                side,
                movementVector
            );

            const distance = Vec2Math.distance(intersectionPoint, obj.currentPosition);
            if (distance < obj.radius) {
                console.log(distance)
                const normal = side.direction.perpendicular.normalized;
                console.log(intersectionPoint, normal)
                obj.currentPosition = intersectionPoint.sum(normal.mul(obj.radius * obj.bounceValue))
                console.log(obj.currentPosition)
            }
        } catch (e) {
            // Movement is parallel with given side
        }
    }

}