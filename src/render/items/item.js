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

    render() {

    }
}