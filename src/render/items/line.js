import {Item} from "./item";
import {Vec2} from "../vector/vec2";

export class Line extends Item {
    direction = Vec2.Zero();
    color = '#00ff00';

    constructor(context, position, direction, color) {
        super(context, position);

        this.direction = direction;

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.context.strokeStyle = this.color;
        this.context.beginPath(); // Start a new path
        this.context.moveTo(this.position.x, this.position.y);
        this.context.lineTo(
            this.position.x + this.direction.x,
            this.position.y + this.direction.y
        );
        this.context.stroke(); // Render the path
    }
}