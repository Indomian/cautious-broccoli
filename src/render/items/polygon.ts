import {Item} from "./item";
import {Vec2} from "../vector/vec2";
import {Vec2Line} from "../vector/vec2Line";
import {BaseRender} from "../render/baseRender";

export class Polygon extends Item {
    direction = Vec2.Zero();
    points: Vec2[];
    color = '#00ff00';

    constructor(renderer: BaseRender, position: Vec2, points: Vec2[], color) {
        super(renderer, position);

        this.points = points;

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.renderer.strokeStyle(this.color);
        this.renderer.polygon(this.points.map(point => point.sum(this.position)));
    }
}