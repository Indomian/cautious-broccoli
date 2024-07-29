import * as P5 from "p5";

import { Vector } from "p5";
import {Stats} from "../../src/render/stats";
import {World} from "./world";
import {Solver} from "./solver/solver";
import {circleConstraint} from "./solver/constraints";
import {airDensity, gravity, gravityCenter} from "./solver/forces";
import {Point} from "./solver/objects";


class Sketch {
    p5: P5;
    stats: Stats;
    solver: Solver;
    world: World;

    constructor(p5) {
        this.p5 = p5;
        this.stats = new Stats();
        this.world = new World(this.p5);
        this.solver = new Solver(this.world);
    }
}

class Sketch1 extends Sketch {
    magicCenter: Vector;

    constructor(p5) {
        super(p5);

        p5.setup = this.setup;
        p5.draw = this.draw;
        p5.windowResized = this.windowResized;

        p5.mouseClicked = this.mouseClicked;
        p5.mouseReleased = this.mouseReleased;
        p5.mousePressed = this.mouseReleased;
        p5.mouseWheel = this.mouseWheel;

        this.magicCenter = this.p5.createVector(450, 150);
    }

    setup = () => {
        this.p5.createCanvas(400, 400);
        this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);

        this.solver.addConstraint(circleConstraint(
            this.p5.createVector(300, 300),
            300
        ));

        this.solver.addForce(gravityCenter(
            this.p5.createVector(300, 300),
            2
        ));

        this.solver.addForce(gravity(3));

        //this.solver.addForce(airDensity(0.0001));

        this.solver.addForce(gravityCenter(
            this.magicCenter,
            2
        ));
    }

    draw = () => {
        if (!this.p5.focused) {
            return;
        }

        // Move Magic Center
        const heading = this.p5.createVector(200, 0);
        heading.setHeading(this.p5.frameCount * 0.02 / this.p5.PI);
        this.magicCenter.set(Vector.add(new Vector(300, 300), heading));

        // Handle User Input
        this.handleKeyIsDown();
        this.handleMouseIsDown();

        // Handle The Solver
        this.solver.solve(this.p5.deltaTime);

        // Render Everything
        this.p5.background(220);

        this.p5.translate(this.world.viewPortPosition);
        this.p5.scale(this.world.viewPortDistance);

        this.p5.strokeWeight(1);
        this.p5.stroke('black');

        // Draw World Constraint
        this.p5.rect(0, 0, this.world.width, this.world.height);

        // Draw Constraint Circle
        this.p5.circle(300, 300, 600);

        // Draw Gravity Point
        this.p5.strokeWeight(10);
        this.p5.point(300, 300);

        // Draw Gravity Point
        this.p5.strokeWeight(10);
        this.p5.stroke('red');
        this.p5.point(this.magicCenter);

        // Draw all objects as points
        this.p5.strokeWeight(5);
        this.p5.stroke('black');
        this.solver.objects.forEach((point, index) => {
            const r = index % 255;
            const g = Math.round(index / 2);
            this.p5.stroke(r, g, 0);
            this.p5.point(point.position);
        });


        // Debug Info
        this.p5.resetMatrix();
        this.p5.stroke('black');
        this.p5.strokeWeight(1);

        let fps = this.p5.frameRate();
        this.p5.text(`FPS: ${fps}`, 50, 50);
        this.p5.text('Click me to add points', 50, 60);
        this.p5.text(`Total points: ${this.solver.objects.length}`, 50, 70);
    }

    mouseClicked = (event: MouseEvent) => {
        console.log(event);
        event.preventDefault();

        for (let i=0; i < 100; i++) {
            this.solver.addObject(new Point(
                this.p5.createVector(300, 300).add(Vector.random2D().mult(Math.random() * 200))
            ))
        }

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

    handleKeyIsDown = () => {
        switch (true) {
            case this.p5.keyIsDown(this.p5.LEFT_ARROW):
                this.world.moveViewPort(-1, 0);
                break;
            case this.p5.keyIsDown(this.p5.RIGHT_ARROW):
                this.world.moveViewPort(1, 0);
                break;
            case this.p5.keyIsDown(this.p5.UP_ARROW):
                this.world.moveViewPort(0, -1);
                break;
            case this.p5.keyIsDown(this.p5.DOWN_ARROW):
                this.world.moveViewPort(0, 1);
                break;
        }
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

    windowResized = () => {
        this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
    }
}


const sketch = (p5: P5) => {
    new Sketch1(p5);
};

new P5(sketch);

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});


