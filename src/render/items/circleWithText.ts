import {Circle} from "./circle";

export class CircleWithText extends Circle {
    text:string = '';
    textColor: string = '#ffffff';

    constructor(context, position,r, color, text, textColor) {
        super(context, position, r, color);
        this.text = text;
        if (textColor) {
            this.textColor = textColor;
        }
    }

    render() {
        super.render();
        if (this.text !== '') {
            this.renderer.fillStyle(this.textColor);
            this.renderer.text(this.text, this.position);
        }
    }
}