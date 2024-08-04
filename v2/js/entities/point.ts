import {Entity} from "./entity";
import {Sketch} from "../sketch";
import {Color, Vector} from "p5";
import {Point} from "../solver/objects";

export interface PointConfiguration {
    position: Vector;
    size?: number;
    stroke?: Color;
}

export class PointEntity extends Entity {
    point: Point;
    config: PointConfiguration;

    constructor(sketch: Sketch, config: PointConfiguration) {
        super(sketch);

        this.point = new Point(
            config.position,
            config.size || 5
        )

        this.config = config;
    }

    add() {
        super.add();

        this.sketch.solver.addObject(this.point);
    }

    draw(debug) {
        super.draw(debug);
        if (this.config.stroke) {
            this.sketch.p5.stroke(this.config.stroke);
        }

        this.sketch.p5.strokeWeight(this.point.size);

        this.sketch.p5.point(this.point.position);

        if (debug) {
            this.sketch.p5.strokeWeight(1);
            this.sketch.p5.stroke('#00ff00');
            this.sketch.p5.noFill();
            this.sketch.p5.rect(
                this.point.boundingBox.left,
                this.point.boundingBox.top,
                this.point.boundingBox.width,
                this.point.boundingBox.height,
            );
        }
    }
}