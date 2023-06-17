import {Item} from "./item";
import {Vec2} from "../vector/vec2";
import {Vec2Line} from "../vector/vec2Line";
import {Polygon} from "./polygon";
import {index2color} from "./utils/index2color";

export class PolygonRainbow extends Polygon {
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

            this.context.strokeStyle = index2color(index * 100);
            this.context.lineTo(
                currentPointWorld.x,
                currentPointWorld.y
            );
            this.context.stroke();

            index+=1;
        }

        this.context.strokeStyle = index2color(index * 100);
        this.context.lineTo(
            firstPointWorld.x,
            firstPointWorld.y
        )
        this.context.stroke();
    }
}