import { Constrain } from "./constrain";
import {Vec2} from "../vector/vec2";

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
        const newPosition = obj.currentPosition.copy();
        let changePosition = false;
        if (obj.currentPosition.x - obj.radius < 0) {
            newPosition.x = obj.radius;
            changePosition = true;
        } else if (obj.currentPosition.x + obj.radius > this._width) {
            newPosition.x = this._width - obj.radius;
            changePosition = true;
        }

        if (obj.currentPosition.y - obj.radius < 0) {
            newPosition.y = obj.radius;
            changePosition = true;
        } else if (obj.currentPosition.y + obj.radius > this._height) {
            newPosition.y = this._height - obj.radius;
            changePosition = true;
        }

        if (changePosition) {
            obj.moveTo(newPosition);
        }
    }
}