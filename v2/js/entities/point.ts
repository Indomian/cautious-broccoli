import {Entity, EntityConfig} from "./entity";
import {Sketch} from "../sketch";
import {Color, Vector} from "p5";
import {PhysicsPoint, Point} from "../solver/objects";
import {Rect} from "../math/rect";
import {COLLISION_RANGE} from "../solver/solver";

export interface PointConfiguration {
    position: Vector;
    size?: number;
    stroke?: Color;
    mass?: number;
    bounce?: number;
}

export class PointEntity extends Entity {
    declare configuration: EntityConfig<PointConfiguration>;
    point: PhysicsPoint;

    constructor(sketch: Sketch, config: PointConfiguration) {
        super(sketch, config);

        this.point = new PhysicsPoint(
            config.position,
            config.size || 5,
            config.mass || 1,
            config.bounce || 1
        )
    }

    add() {
        super.add();

        this.sketch.solver.addObject(this.point);
    }

    draw(debug) {
        super.draw(debug);
        if (this.configuration.value.stroke) {
            this.sketch.p5.stroke(this.configuration.value.stroke);
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
}