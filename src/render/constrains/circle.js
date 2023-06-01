import {Constrain} from "./constrain";
import {Vec2} from "../vector/vec2";

export class CircleConstrain extends Constrain {
    /**
     *
     * @type {Vec2}
     */
    center = Vec2.Zero();

    radius = 0;

    constructor(center, radius) {
        super();

        this.center = center;
        this.radius = radius;
    }

    applyConstrain(obj) {
        const toCenter = obj.currentPosition.diff(this.center);
        const distance = toCenter.length;
        const r = obj.radius || 0;

        if (distance > (this.radius - r)) {
            const n = toCenter.ort;
            obj.moveTo(this.center.sum(n.mul(this.radius - r - 1)));
        }
    }

}