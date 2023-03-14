import {Item} from "./item";

export class Circle extends Item {
    r = 0;
    color = '#00ff00';

    constructor(context, position, r, color) {
        super(context, position);

        if (r) {
            this.r = r;
        }

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.context.beginPath()
        this.context.arc(
            this.position.x,
            this.position.y,
            this.r,
            0,
            2 * Math.PI
        )

        this.context.fillStyle = this.color;
        this.context.fill();
    }
}