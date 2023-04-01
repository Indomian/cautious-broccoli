import { Constrain } from "./constrain";

export class ViewportConstrain extends Constrain {
    _width = 0;
    _height = 0;

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
    }

    get height() {
        return this._height;
    }

    set height(height) {
        this._height = height;
    }

    applyConstrain(obj) {
        if (obj.currentPosition.x - obj.radius < 0) {
            obj.currentPosition.x = obj.radius;
        }

        if (obj.currentPosition.x + obj.radius > this._width) {
            obj.currentPosition.x = this._width - obj.radius;
        }

        if (obj.currentPosition.y - obj.radius < 0) {
            obj.currentPosition.y = obj.radius;
        }

        if (obj.currentPosition.y + obj.radius > this._height) {
            obj.currentPosition.y = this._height - obj.radius;
        }
    }
}