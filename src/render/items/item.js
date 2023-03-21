import {Vec2} from "../vector/vec2";

export class Item {
    position = Vec2.Zero();

    /**
     *
     * @param {CanvasRenderingContext2D} context
     */
    constructor(context, position) {
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