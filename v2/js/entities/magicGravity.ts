import {Entity, EntityConfig} from "./entity";
import {Sketch} from "../sketch";
import {Vector} from "p5";
import {ForceFunction, gravityCenter} from "../solver/forces";

export interface MagicGravityConfiguration {
    center: Vector;
    r: number;
    angle: number;
    force: number;
}

export class MagicGravityEntity extends Entity {
    declare configuration: EntityConfig<MagicGravityConfiguration>;
    visible: boolean = false;
    center: Vector;
    position: Vector;
    r: number;
    force: ForceFunction;

    constructor(sketch: Sketch, config: MagicGravityConfiguration) {
        super(sketch, config);

        this.center = config.center.copy();
        this.position = new Vector();
        this.r = config.r;

        this.calculatePosition(config.angle);

        this.force = gravityCenter(this.position, config.force);
    }

    calculatePosition(angle: number) {
        const heading = this.sketch.p5.createVector(this.r, 0);
        heading.setHeading(angle / this.sketch.p5.PI);
        this.position.set(Vector.add(this.center, heading));
    }

    add() {
        this.sketch.solver.addForce(this.force);
        this.visible = true;
    }

    draw() {
        if (!this.visible) {
            return
        }

        // Move Magic Center
        this.calculatePosition(this.sketch.p5.frameCount * 0.02);

        // Draw Gravity Point
        this.sketch.p5.strokeWeight(10);
        this.sketch.p5.stroke('red');
        this.sketch.p5.point(this.position);
    }

    remove() {
        this.sketch.solver.removeForce(this.force);
        this.visible = false;
    }
}