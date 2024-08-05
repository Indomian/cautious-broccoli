import {Sketch} from "../sketch";
import {
    negativeRectConstraint,
} from "../solver/constraints";
import {RectBoxConfiguration, RectBoxEntity} from "./rectBox";

export class NegativeRectBoxEntity extends RectBoxEntity {
    constructor(sketch: Sketch, config: RectBoxConfiguration) {
        super(sketch, config);

        this.constraint = negativeRectConstraint(this.center, this.size);
    }
}