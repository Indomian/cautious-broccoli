import {Entity, EntityConfig} from "./entity";
import {Sketch} from "../sketch";
import {ConstraintFunction, rectConstraint} from "../solver/constraints";
import {Vector, Color} from "p5";

export interface RectBoxConfiguration {
    center: Vector;
    size: Vector;
    fill?: Color;
    stroke?: Color;
    strokeWeight?: number;
}

export class RectBoxEntity extends Entity {
    declare configuration: EntityConfig<RectBoxConfiguration>;
    constraint: ConstraintFunction;
    center: Vector;
    size: Vector;
    visible: boolean = false;

    constructor(sketch: Sketch, config: RectBoxConfiguration) {
        super(sketch, config);

        this.center = config.center.copy();
        this.size = config.size.copy();
        this.visible = false;

        this.constraint = rectConstraint(this.center, this.size);
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

        if (this.configuration.value.stroke) {
            this.sketch.p5.stroke(this.configuration.value.stroke);
        }

        if (this.configuration.value.fill) {
            this.sketch.p5.fill(this.configuration.value.fill);
        }

        if (this.configuration.value.strokeWeight) {
            this.sketch.p5.strokeWeight(this.configuration.value.strokeWeight);
        }

        this.sketch.p5.rectMode(this.sketch.p5.CENTER);

        this.sketch.p5.rect(
            this.center.x,
            this.center.y,
            this.size.x,
            this.size.y
        );
    }
}