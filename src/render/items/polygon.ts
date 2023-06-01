import {Item} from "./item";
import {Vec2} from "../vector/vec2";
import {Vec2Line} from "../vector/vec2Line";

export class Polygon extends Item {
    direction = Vec2.Zero();
    lines: Vec2Line[];
    color = '#00ff00';

    constructor(context: CanvasRenderingContext2D, position: Vec2, lines: Vec2Line[], color) {
        super(context, position);

        this.lines = lines;

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.context.strokeStyle = this.color;
        this.context.beginPath(); // Start a new path
        this.lines.forEach(line => {
            this.context.moveTo(line.vec1.x, line.vec1.y);
            this.context.lineTo(line.vec2.x, line.vec2.y);
        })

        this.context.stroke(); // Render the path
    }
}