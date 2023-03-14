import {Circle} from "./circle";

export class CircleWithText extends Circle {
    text = '';
    textColor = '#ffffff';

    constructor(context, position,r, color, text, textColor) {
        super(context, position, r, color);
        this.text = text;
        if (textColor) {
            this.textColor = textColor;
        }
    }

    render() {
        super.render();
        this.context.fillStyle = this.textColor;
        this.context.textBaseline = "middle";
        this.context.textAlign = "center";
        this.context.fillText(this.text, this.position.x, this.position.y);
    }
}