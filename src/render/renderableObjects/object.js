export class RenderableObject {
    /**
     * @type {BallsObject}
     */
    ballsObject = null;

    /**
     * @type {Item}
     */
    renderItem = null;

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