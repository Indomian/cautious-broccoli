import {Vec2} from "./vec2";
import {Vec2ExceptionRectSizeShouldBePositive} from "./exceptions";



export class Vec2Rect {
    private position: Vec2;
    private size: Vec2;

    private _left: number;
    private _top: number;
    private _right: number;
    private _bottom: number;
    private _width2: number;
    private _height2: number;

    constructor(center: Vec2, size: Vec2) {
        this.position = center.copy();
        this.size = size.copy();
        if (this.size.x < 0 || this.size.y < 0) {
            throw new Vec2ExceptionRectSizeShouldBePositive()
        }

        this.recalculate();
    }

    private recalculate() {
        this._width2 = this.size.x / 2;
        this._height2 = this.size.y / 2;

        this._left = this.position.x - this._width2;
        this._right = this.position.x + this._width2;
        this._top = this.position.y - this._height2;
        this._bottom = this.position.y + this._height2;
    }

    copy() {
        return new Vec2Rect(this.position, this.size);
    }

    intersect(rect: Vec2Rect):boolean {
        return !(this.left > rect.right || this.right < rect.left || this.top > rect.bottom || this.bottom < rect.top);
    }

    contains(point: Vec2):boolean {
        return point.x > this.left && point.x < this.right && point.y > this.top && point.y < this.bottom;
    }

    moveBy(delta: Vec2) {
        this.position.addSelf(delta);
        this.recalculate();
    }

    moveTo(pos: Vec2) {
        this.position = pos.copy();
        this.recalculate();
    }

    get nw():Vec2Rect {
        return new Vec2Rect(
            new Vec2(this.position.x - this._width2 / 2, this.position.y - this._height2 / 2),
            new Vec2(this._width2, this._height2)
        );
    }

    get ne():Vec2Rect {
        return new Vec2Rect(
            new Vec2(this.position.x + this._width2 / 2, this.position.y - this._height2 / 2),
            new Vec2(this._width2, this._height2)
        );
    }

    get se():Vec2Rect {
        return new Vec2Rect(
            new Vec2(this.position.x + this._width2 / 2, this.position.y + this._height2 / 2),
            new Vec2(this._width2, this._height2)
        );
    }

    get sw():Vec2Rect {
        return new Vec2Rect(
            new Vec2(this.position.x - this._width2 / 2, this.position.y + this._height2 / 2),
            new Vec2(this._width2, this._height2)
        );
    }

    get left():number {
        return this._left;
    }

    get right():number {
        return this._right;
    }

    get top():number {
        return this._top;
    }

    get bottom():number {
        return this._bottom;
    }

    get diag(): number {
        return this.size.length;
    }

    get width(): number {
        return this.size.x;
    }

    get height(): number {
        return this.size.y;
    }
}