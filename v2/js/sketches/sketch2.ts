import * as P5 from "p5";

import {Sketch} from "../sketch";
import {Touch, Touches} from "../touch";
import {sketch1} from "./sketch1";
import {Vector} from "p5";
import {PointEntity} from "../entities/point";
import {RectBoxEntity} from "../entities/rectBox";
import {ActorEntity} from "../entities/actor";
import {airDensity, gravity} from "../solver/forces";
import {NegativeRectBoxEntity} from "../entities/negativeRectBox";
import {AverageSet} from "../stats/average";

class DeltaTimeStats extends AverageSet {
    p5: P5;
    position: Vector;

    constructor(p5: P5, ticks: number = 10, pos: Vector = undefined) {
        super(ticks);
        this.p5 = p5;
        if (!pos) {
            this.position = new Vector(50, 80);
        } else {
            this.position = pos;
        }
    }

    tick() {
        super.tick(this.p5.deltaTime);
    }

    draw() {
        this.p5.text(`Delta time: ${this.average}`, this.position.x, this.position.y);
    }
}

export class Sketch2 extends Sketch {
    deltaStats: DeltaTimeStats;

    constructor(p5: P5) {
        super(p5);

        p5.setup = this.setup;
        p5.draw = this.draw;

        p5.mouseClicked = this.mouseClicked;
        p5.mouseReleased = this.mouseReleased;
        p5.mousePressed = this.mouseReleased;
        p5.mouseWheel = this.mouseWheel;

        p5.keyPressed = this.keyPressed;

        this.deltaStats = new DeltaTimeStats(p5);
    }

    setup = () => {
        this.p5.createCanvas(400, 400);
        this.windowResized();

        sketch2(this);
    }

    draw = () => {
        if (!this.p5.focused) {
            return;
        }

        // Handle User Input
        this.handleKeyIsDown();
        this.handleMouseIsDown();

        // Handle The Solver
        // Divide p5 deltaTime by 1000 to have it in seconds
        this.solver.solve(this.p5.deltaTime / 1000);

        // Render Everything
        this.p5.background(220);
        this.p5.fill('white');

        this.p5.translate(this.world.viewPortPosition);
        this.p5.scale(
            1 / this.p5.width * this.world.viewPortSize.x,
            1 / this.p5.height * this.world.viewPortSize.y,
        );

        this.p5.strokeWeight(1);
        this.p5.stroke('black');

        // Draw World Constraint
        this.p5.rect(0, 0, this.world.width, this.world.height);

        // Draw World Constraint
        this.p5.rect(0, 0, this.world.width, this.world.height);

        this.entities.forEach(entity => entity.draw(this.drawDebug));

        if (this.drawDebug) {
            this.solver.draw();
        }

        this.deltaStats.tick();

        // Debug Info
        this.p5.resetMatrix();
        this.p5.stroke('black');
        this.p5.fill('black');
        this.p5.strokeWeight(1);

        let fps = this.p5.frameRate();
        this.p5.text(`FPS: ${fps}`, 50, 50);
        this.p5.text('Click me to add points', 50, 60);
        this.p5.text(`Total points: ${this.solver.objects.length}`, 50, 70);
        this.deltaStats.draw();
        this.p5.text(`Average collisions: ${this.solver.possibleObjectsStats.average}`, 50, 100);
    }

    mouseClicked = (event: MouseEvent) => {
        console.log(event);
        event.preventDefault();

        return false;
    }

    mouseReleased = (event: MouseEvent) => {
        console.log(event);
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    mouseWheel = (event) => {
        this.world.moveViewPortDistance(event.delta < 0 ? 0.1 : -0.1);
    }

    keyPressed = (event) => {
        if (this.p5.key === 'd') {
            this.drawDebug = !this.drawDebug;
        }

        if (this.p5.key === ' ') {
            for (let i=0; i < 30; i++) {
                const point = new PointEntity(this, {
                    position: new Vector(300, 300).add(Vector.random2D().mult(Math.random() * 200)),
                    stroke: this.p5.color([Math.random() * 255, Math.random() * 255, Math.random() * 255]),
                    size: this.p5.random(20, 40)
                })

                this.addEntity(point);
            }
        }

        return false;
    }

    handleKeyIsDown = () => {
        this.entities.forEach(entity => entity.handleKeys());
    }

    handleMouseIsDown = () => {
        if (!this.p5.mouseIsPressed) {
            return;
        }

        if (this.p5.mouseButton === this.p5.RIGHT) {
            this.world.moveViewPort(
                this.p5.mouseX - this.p5.pmouseX,
                this.p5.mouseY - this.p5.pmouseY
            );
        }
    }
}

function sketch2(sketch: Sketch) {
    const worldRect = new RectBoxEntity(sketch, {
        center: new Vector(1000, 500),
        size: new Vector(2000, 1000)
    });

    sketch.addEntity(worldRect);

    const platform = new NegativeRectBoxEntity(sketch, {
        center: new Vector(600, 650),
        size: new Vector(100, 42),
        stroke: sketch.p5.color('#0000ff'),
        strokeWeight: 2,
        fill: sketch.p5.color('#00ff00')
    })

    sketch.addEntity(platform);

    sketch.addEntity(new NegativeRectBoxEntity(sketch, {
        center: new Vector(700, 700),
        size: new Vector(100, 100),
        stroke: sketch.p5.color('#0000ff'),
        strokeWeight: 2,
        fill: sketch.p5.color('#00ff00')
    }))

    const actor = new ActorEntity(sketch, {
        position: new Vector(500, 500),
        size: 40,
        stroke: sketch.p5.color('#FF0000'),
        jumpForce: new Vector(0, -60000),
        runForce: new Vector(5000, 0),
        mass: 2
    });

    sketch.addEntity(actor);

    const globalGravity = gravity(120);
    sketch.solver.addForce(globalGravity);
    sketch.solver.addForce(airDensity(0.0001));
}