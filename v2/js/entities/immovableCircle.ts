import {Entity} from "./entity";
import {Sketch} from "../sketch";
import {ConstraintFunction, negativeCircleConstraint} from "../solver/constraints";
import {Vector, Color} from "p5";

interface ImmovableCircleConfiguration {
    center: Vector;
    r: number;
    fill?: Color;
    stroke?: Color;
    strokeWeight?: number;
}

export class ImmovableCircleEntity extends Entity {
    constraint: ConstraintFunction;
    center: Vector;
    r: number;
    visible: boolean = false;
    config: ImmovableCircleConfiguration;

    constructor(sketch: Sketch, config: ImmovableCircleConfiguration) {
        super(sketch);

        this.config = config;

        this.center = config.center.copy();
        this.r = config.r;
        this.visible = false;

        this.constraint = negativeCircleConstraint(this.center, this.r);
    }

    add() {
        this.sketch.solver.addConstraint(this.constraint);
        this.visible = true;
    }

    remove() {
        this.sketch.solver.removeConstraint(this.constraint);
    }

    draw() {
        super.draw();

        if (this.config.stroke) {
            this.sketch.p5.stroke(this.config.stroke);
        }

        if (this.config.fill) {
            this.sketch.p5.fill(this.config.fill);
        }

        if (this.config.strokeWeight) {
            this.sketch.p5.strokeWeight(this.config.strokeWeight);
        }

        this.sketch.p5.circle(this.center.x, this.center.y, this.r * 2);
    }
}