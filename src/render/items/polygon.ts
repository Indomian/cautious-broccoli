import {Item} from "./item";
import {Vec2} from "../vector/vec2";
import {Vec2Line} from "../vector/vec2Line";

export class Polygon extends Item {
    direction = Vec2.Zero();
    points: Vec2[];
    color = '#00ff00';

    constructor(context: CanvasRenderingContext2D, position: Vec2, points: Vec2[], color) {
        super(context, position);

        this.points = points;

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.context.strokeStyle = this.color;
        this.context.beginPath(); // Start a new path

        let index = 0;
        let currentPointWorld: Vec2;
        const firstPointWorld = this.points[index].sum(this.position);

        this.context.moveTo(
            firstPointWorld.x,
            firstPointWorld.y
        )

        index+=1;

        while (index < this.points.length) {
            currentPointWorld = this.points[index].sum(this.position);
            this.context.lineTo(
                currentPointWorld.x,
                currentPointWorld.y
            );

            index+=1;
        }

        this.context.lineTo(
            firstPointWorld.x,
            firstPointWorld.y
        )

        this.context.stroke(); // Render the path
    }
}