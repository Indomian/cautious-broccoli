import {Rect} from "./rect";

export class Frame extends Rect {
    constructor(context, position, size, color) {
        super(context, position, size, color);
    }

    render() {
        this.context.strokeStyle = this.color;
        this.context.strokeRect(
            this.position.x,
            this.position.y,
            this.size.x,
            this.size.y
        )
    }
}