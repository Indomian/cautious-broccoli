import {Constrain} from "./constrain";
import {Vec2} from "./vec2";

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
        super.applyConstrain(obj);

        const toCenter = obj.currentPosition.diff(this.center);
        const distance = toCenter.length;
        const r = obj.radius;

        if (distance > (this.radius - r)) {
            const n = toCenter.normalized;
            obj.currentPosition = this.center.sum(
                n.mul(this.radius - r)
            );
        }
    }

}