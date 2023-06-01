import {Item} from "./item";
import {Vec2} from "../vector/vec2";

export class Circle extends Item {
    r = 0;
    color = '#00ff00';

    constructor(context: CanvasRenderingContext2D, position: Vec2, r: number, color: string) {
        super(context, position);

        if (r) {
            this.r = r;
        }

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.context.beginPath()
        this.context.arc(
            this.position.x,
            this.position.y,
            this.r,
            0,
            2 * Math.PI
        )

        this.context.fillStyle = this.color;
        this.context.fill();
    }
}