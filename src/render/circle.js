import {Item} from "./item";

export class Circle extends Item {
    x = 0;
    y = 0;
    r = 0;
    color = '#00ff00';

    constructor(context, x, y, r, color) {
        super(context);

        this.x = x;
        this.y = y;
        this.r = r;

        if (color) {
            this.color = color;
        }
    }

    render() {
        this.context.beginPath()
        this.context.arc(
            this.x,
            this.y,
            this.r,
            0,
            2 * Math.PI
        )

        this.context.fillStyle = this.color;
        this.context.fill();
    }
}