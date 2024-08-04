import {MathExceptionRectSizeShouldBePositive} from "./exceptions";
import {Vector} from "p5";

export class Rect {
    private _position: Vector;
    private size: Vector;

    private _left: number;
    private _top: number;
    private _right: number;
    private _bottom: number;
    private _width2: number;
    private _height2: number;

    constructor(center: Vector, size: Vector) {
        this._position = center;
        this.size = size;
        if (this.size.x < 0 || this.size.y < 0) {
            throw new MathExceptionRectSizeShouldBePositive()
        }

        this.recalculate();
    }

    private recalculate() {
        this._width2 = this.size.x / 2;
        this._height2 = this.size.y / 2;

        this._left = this._position.x - this._width2;
        this._right = this._position.x + this._width2;
        this._top = this._position.y - this._height2;
        this._bottom = this._position.y + this._height2;
    }

    copy() {
        return new Rect(this._position, this.size);
    }

    intersect(rect: Rect):boolean {
        return this.left < rect.right && this.right > rect.left && this.top < rect.bottom && this.bottom > rect.top;
    }

    contains(point: Vector):boolean {
        return point.x > this.left && point.x < this.right && point.y > this.top && point.y < this.bottom;
    }

    moveBy(delta: Vector) {
        this.position.add(delta);
        this.recalculate();
    }

    moveTo(pos: Vector) {
        this.position.set(pos);
        this.recalculate();
    }

    get nw():Rect {
        return new Rect(
            new Vector(this.position.x - this._width2 / 2, this.position.y - this._height2 / 2),
            new Vector(this._width2, this._height2)
        );
    }

    get ne():Rect {
        return new Rect(
            new Vector(this.position.x + this._width2 / 2, this.position.y - this._height2 / 2),
            new Vector(this._width2, this._height2)
        );
    }

    get se():Rect {
        return new Rect(
            new Vector(this.position.x + this._width2 / 2, this.position.y + this._height2 / 2),
            new Vector(this._width2, this._height2)
        );
    }

    get sw():Rect {
        return new Rect(
            new Vector(this.position.x - this._width2 / 2, this.position.y + this._height2 / 2),
            new Vector(this._width2, this._height2)
        );
    }

    get left():number {
        return this._position.x - this._width2;
    }

    get right():number {
        return this._position.x + this._width2;
    }

    get top():number {
        return this._position.y - this._height2;
    }

    get bottom():number {
        return this._position.y + this._height2;
    }

    get diag(): number {
        return this.size.magSq();
    }

    get width(): number {
        return this.size.x;
    }

    get height(): number {
        return this.size.y;
    }

    get position(): Vector {
        return this._position;
    }
}