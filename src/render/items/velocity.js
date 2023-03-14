import {Item} from "./item";

export class Velocity extends Item {
    /**
     * @type {BallsObject}
     */
    obj = null;

    constructor(context, object) {
        super(context);
        this.obj = object;
    }

    render() {
        super.render();

        this.context.strokeStyle = '#0000FF';

        this.context.beginPath(); // Start a new path
        this.context.moveTo(this.obj.previousPosition.x, this.obj.previousPosition.y); // Move the pen to (30, 50)
        this.context.lineTo(this.obj.currentPosition.x, this.obj.currentPosition.y); // Draw a line to (150, 100)
        this.context.stroke(); // Render the path
    }
}