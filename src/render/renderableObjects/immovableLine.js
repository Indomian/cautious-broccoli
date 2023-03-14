import {RenderableObject} from "./object";

export class ImmovableLineRenderableObject extends RenderableObject {
    /**
     * @type {ImmovableLineObject}
     */
    ballsObject = null;

    constructor(ballsObject, renderItem) {
        super(ballsObject);
        this.ballsObject = ballsObject;
        this.renderItem = renderItem;
    }

    update() {
        super.update();
        this.renderItem.direction = this.ballsObject._direction;
    }
}