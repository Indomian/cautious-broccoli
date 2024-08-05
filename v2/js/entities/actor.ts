import {Entity} from "./entity";
import {Sketch} from "../sketch";
import {ConstraintFunction, negativeCircleConstraint} from "../solver/constraints";
import {Vector, Color} from "p5";
import {Point} from "../solver/objects";

interface ActorConfiguration {
    position: Vector;
    size: number;
    fill?: Color;
    stroke?: Color;
    strokeWeight?: number;
}

export class ActorEntity extends Entity {
    point: Point;
    visible: boolean = false;
    config: ActorConfiguration;
    airBorn: boolean = false;

    constructor(sketch: Sketch, config: ActorConfiguration) {
        super(sketch);

        this.config = config;

        this.point = new Point(
            config.position,
            config.size
        )

        this.visible = false;
    }

    add() {
        this.sketch.solver.addObject(this.point);
        this.visible = true;
    }

    remove() {
        this.sketch.solver.removeObject(this.point);
    }

    draw(debug: boolean) {
        super.draw(debug);

        this.airBorn = !this.point.collided;

        this.sketch.world.centerViewPort(this.point.position);

        if (this.config.stroke) {
            this.sketch.p5.stroke(this.config.stroke);
        }

        if (this.airBorn) {
            this.sketch.p5.stroke("#00ff00");
        }

        this.sketch.p5.strokeWeight(this.point.size);

        this.sketch.p5.point(this.point.position);

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
        }
    }

    handleKeys() {
        super.handleKeys();

        const jumpForce = new Vector(0, -0.3);
        const runForce = new Vector(0.01, 0);

        if (this.sketch.p5.keyIsDown(this.sketch.p5.LEFT_ARROW)) {
            this.point.applyForce(runForce.mult(-1));
        }

        if (this.sketch.p5.keyIsDown(this.sketch.p5.RIGHT_ARROW)) {
            this.point.applyForce(runForce);
        }

        if (this.sketch.p5.keyIsDown(this.sketch.p5.UP_ARROW)) {
            if (!this.airBorn) {
                this.point.applyForce(jumpForce);
            }
        }
    }
}