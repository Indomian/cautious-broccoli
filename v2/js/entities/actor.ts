import {Entity, EntityConfig} from "./entity";
import {Sketch} from "../sketch";
import {ConstraintFunction, negativeCircleConstraint} from "../solver/constraints";
import {Vector, Color} from "p5";
import {PhysicsPoint, Point} from "../solver/objects";
import {Rect} from "../math/rect";
import {COLLISION_RANGE} from "../solver/solver";

interface ActorConfiguration {
    position: Vector;
    size: number;
    fill?: Color;
    stroke?: Color;
    strokeWeight?: number;
    jumpForce?: Vector;
    runForce?: Vector;
    mass?: number;
    bounce?: number;
}

export class ActorEntity extends Entity {
    declare configuration: EntityConfig<ActorConfiguration>;
    point: PhysicsPoint;
    visible: boolean = false;
    airBorn: boolean = false;
    jumpForce: Vector;
    runForce: Vector;

    constructor(sketch: Sketch, config: ActorConfiguration) {
        super(sketch, config);

        this.point = new PhysicsPoint(
            config.position,
            config.size,
            config.mass || 10,
            config.bounce || 1
        )

        this.jumpForce = config?.jumpForce || new Vector(0, -300);
        this.runForce = config?.runForce || new Vector(40, 0);

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


        if (this.configuration.value.stroke) {
            this.sketch.p5.stroke(this.configuration.value.stroke);
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

    handleKeys() {
        super.handleKeys();

        const jumpForce = this.jumpForce.copy();
        const runForce = this.runForce.copy();

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