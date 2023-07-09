import {Item} from "./item";
import {Vec2} from "../vector/vec2";

export class Line extends Item {
    direction = Vec2.Zero();
    color = '#00ff00';

    constructor(renderer, position, direction, color) {
        super(renderer, position);

        this.direction = direction;

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.renderer.strokeStyle(this.color);
        this.renderer.vector(this.position, this.direction);
    }
}