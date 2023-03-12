import {Item} from "./item";
import {Vec2} from "./vec2";

export class Rect extends Item {
    leftTop = Vec2.Zero();
    size = Vec2.Zero();
    color = '#00ff00';

    constructor(context, leftTop, size, color) {
        super(context);

        this.leftTop = leftTop;
        this.size = size;

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.context.fillStyle = this.color;
        this.context.fillRect(
            this.leftTop.x,
            this.leftTop.y,
            this.size.x,
            this.size.y
        )
    }
}