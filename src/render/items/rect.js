import {Item} from "./item";
import {Vec2} from "../vector/vec2";

export class Rect extends Item {
    size = Vec2.Zero();
    color = '#00ff00';

    constructor(context, position, size, color) {
        super(context, position);

        this.size = size;

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.context.fillStyle = this.color;
        this.context.fillRect(
            this.position.x,
            this.position.y,
            this.position.x + this.size.x,
            this.position.y + this.size.y
        )
    }
}