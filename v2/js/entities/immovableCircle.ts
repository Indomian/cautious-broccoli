import {Entity, EntityConfig} from "./entity";
import {Sketch} from "../sketch";
import {ConstraintFunction, negativeCircleConstraint} from "../solver/constraints";
import {Vector, Color} from "p5";
import {ImmovablePhysicsPoint, ImmovablePoint} from "../solver/objects";
import {Rect} from "../math/rect";
import {COLLISION_RANGE} from "../solver/solver";
import {HSVtoRGB} from "../math/color";

interface ImmovableCircleConfiguration {
    center: Vector;
    r: number;
    fill?: Color;
    stroke?: Color;
    strokeWeight?: number;
}

export class ImmovableCircleEntity extends Entity {
    declare configuration: EntityConfig<ImmovableCircleConfiguration>;
    constraint: ConstraintFunction;
    center: Vector;
    r: number;

    constructor(sketch: Sketch, config: ImmovableCircleConfiguration) {
        super(sketch, config);

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

    draw(debug: boolean = false) {
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

        this.sketch.p5.circle(this.center.x, this.center.y, this.r * 2);

        if (debug) {
            this.sketch.p5.strokeWeight(2);
            this.sketch.p5.stroke('#00ff00');
            this.sketch.p5.noFill();
            this.sketch.p5.rectMode(this.sketch.p5.CORNER);
            this.sketch.p5.rect(
                this.center.x - this.r,
                this.center.y - this.r,
                this.r * 2,
                this.r * 2,
            );

            this.sketch.p5.stroke('#ff0000');
            const collisionRange = new Rect(this.center, COLLISION_RANGE);
            this.sketch.p5.rect(
                collisionRange.left,
                collisionRange.top,
                collisionRange.width,
                collisionRange.height,
            );
        }
    }
}

export class ImmovablePointEntity extends Entity {
    declare configuration: EntityConfig<ImmovableCircleConfiguration>;
    point: ImmovablePoint;

    frames: number = 0;

    constructor(sketch: Sketch, config: ImmovableCircleConfiguration) {
        super(sketch, config);

        this.point = new ImmovablePhysicsPoint(
            config.center,
            config.r * 2,
            1,
            2
        );

        this.visible = false;
    }

    add() {
        this.sketch.solver.addObject(this.point);
        this.visible = true;
    }

    remove() {
        this.sketch.solver.removeObject(this.point);
    }

    draw(debug: boolean = false) {
        super.draw();

        this.frames++;
        if (this.frames > 359) {
            this.frames = 0;
        }

        if (this.configuration.value.stroke) {
            this.sketch.p5.stroke(this.configuration.value.stroke);
        }

        if (this.configuration.value.fill) {
            this.sketch.p5.fill(this.configuration.value.fill);
        }

        this.sketch.p5.fill(this.sketch.p5.color(
            HSVtoRGB(this.frames / 360, 1, 1)
        ))

        if (this.configuration.value.strokeWeight) {
            this.sketch.p5.strokeWeight(this.configuration.value.strokeWeight);
        }


        this.sketch.p5.circle(this.point.position.x, this.point.position.y, this.point.size);

        if (debug) {
            this.sketch.p5.strokeWeight(1);
            this.sketch.p5.stroke('#00ff00');
            this.sketch.p5.noFill();
            this.sketch.p5.rectMode(this.sketch.p5.CORNER);
            this.sketch.p5.rect(
                this.point.boundingBox.left,
                this.point.boundingBox.top,
                this.point.boundingBox.width,
                this.point.boundingBox.height,
            );

            this.sketch.p5.stroke('#ff0000');
            const collisionRange = new Rect(this.point.position, COLLISION_RANGE);
            this.sketch.p5.rect(
                collisionRange.left,
                collisionRange.top,
                collisionRange.width,
                collisionRange.height,
            );
        }
    }
}