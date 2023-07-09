import {Vec2} from "../vector/vec2";
import {BaseRender} from "../render/baseRender";

export class Item {
    renderer: BaseRender;
    position: Vec2 = Vec2.Zero();

    constructor(renderer: BaseRender, position: Vec2) {
        this.renderer = renderer;
        this.position = position;
    }

    /**
     * Method immediately renders object on context
     */
    render() {

    }

    /**
     * Method tries to put object in render block
     */
    queue() {

    }
}