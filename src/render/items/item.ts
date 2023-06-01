import {Vec2} from "../vector/vec2";

export class Item {
    context: CanvasRenderingContext2D;
    position: Vec2 = Vec2.Zero();

    constructor(context: CanvasRenderingContext2D, position: Vec2) {
        this.context = context;
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