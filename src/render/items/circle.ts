import {Item} from "./item";
import {Vec2} from "../vector/vec2";
import {BaseRender} from "../render/baseRender";

export class Circle extends Item {
    r = 0;
    color = '#00ff00';

    constructor(renderer: BaseRender, position: Vec2, r: number, color: string) {
        super(renderer, position);

        if (r) {
            this.r = r;
        }

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.renderer.strokeStyle(this.color);
        this.renderer.fillStyle(this.color);
        this.renderer.fillCircle(this.r, this.position);
    }
}