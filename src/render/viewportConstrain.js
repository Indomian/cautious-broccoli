import {Constrain} from "./constrain";

export class ViewportConstrain extends Constrain {
    constructor(width, height) {
        super()
        this.width = width;
        this.height = height;
    }

    applyConstrain(obj) {
        super.applyConstrain(obj);

        const velocity = obj.velocity;

        if (obj.currentPosition.x > this.width) {

        } else if (obj.currentPosition < 0) {

        }

        if (obj.currentPosition.y > (this.height - obj.radius)) {
            const distY = obj.currentPosition.y - this.height + obj.radius;
            obj.currentPosition.add(velocity.flipY().mul(obj.bounceValue));
        } else if (obj.currentPosition.y < obj.radius) {
        }
    }

}