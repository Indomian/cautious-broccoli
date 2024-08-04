import {Sketch} from "../sketch";
import {circleConstraint} from "../solver/constraints";
import {airDensity, gravity, gravityCenter} from "../solver/forces";
import {MagicGravityEntity} from "../entities/magicGravity";
import {Vector} from "p5";
import {ImmovableCircleEntity} from "../entities/immovableCircle";

export function sketch1(sketch: Sketch) {
    const worldSize = 600;
    const globalConstraint = circleConstraint(
        sketch.p5.createVector(worldSize, worldSize),
        worldSize
    );

    sketch.solver.addConstraint(globalConstraint);

    const centerGravity = gravityCenter(
        sketch.p5.createVector(worldSize, worldSize),
        2
    )

    sketch.solver.addForce(centerGravity);

    const globalGravity = gravity(3);

    sketch.solver.addForce(globalGravity);

    // Add Magic Gravity
    const magicGravity = new MagicGravityEntity(
        sketch, {
            center: new Vector(worldSize, worldSize),
            force: 2,
            angle: 0,
            r: 400
        }
    )

    sketch.addEntity(magicGravity);

    sketch.solver.addForce(airDensity(0.0001));

    const block = new ImmovableCircleEntity(
        sketch, {
            center: new Vector(400, 400),
            r: 50
        }
    );

    sketch.addEntity(block);

    const block2 = new ImmovableCircleEntity(
        sketch, {
            center: new Vector(300, 600),
            r: 50,
            stroke: sketch.p5.color([0, 250, 0]),
            strokeWeight: 2
        }
    );

    sketch.addEntity(block2);
}