import {RenderableObject} from "./object";

export class ImmovableLineRenderableObject extends RenderableObject {
    /**
     * @type {ImmovableLineObject}
     */
    solverObject = null;

    constructor(ballsObject, renderItem) {
        super(ballsObject);
        this.solverObject = ballsObject;
        this.renderItem = renderItem;
    }

    update() {
        super.update();
        this.renderItem.direction = this.solverObject._direction;
    }
}