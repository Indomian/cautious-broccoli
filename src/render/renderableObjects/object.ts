import {Item} from "../items/item";
import {BallsObject} from "../objects/ball";

export class RenderableObject {
    /**
     * @type {BallsObject}
     */
    ballsObject: BallsObject = null;

    /**
     * @type {Item}
     */
    renderItem: Item = null;

    constructor(ballsObject, renderItem) {
        this.ballsObject = ballsObject;
        this.renderItem = renderItem;
    }

    update() {
        this.renderItem.position = this.ballsObject.currentPosition;
    }

    render() {
        this.update();
        this.renderItem.render();
    }
}