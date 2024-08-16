import * as P5 from "p5";
import * as React from "react";
import {createRoot} from "react-dom/client";

import {Sketch} from "../sketch";
import {Touch, Touches} from "../touch";
import {sketch1} from "./sketch1";
import {Vector, Element} from "p5";
import {PointEntity} from "../entities/point";
import {RectBoxEntity} from "../entities/rectBox";
import {ActorEntity} from "../entities/actor";
import {airDensity, gravity} from "../solver/forces";
import {NegativeRectBoxEntity} from "../entities/negativeRectBox";
import {AverageSet} from "../stats/average";
import {ImmovableCircleEntity, ImmovablePointEntity} from "../entities/immovableCircle";

import {Editor} from "../editor/editor";


export class Sketch3 extends Sketch {
    panel: Element;

    constructor(p5: P5) {
        super(p5);

        p5.setup = this.setup;
        p5.draw = this.draw;

        p5.mouseClicked = this.mouseClicked;
        p5.mouseReleased = this.mouseReleased;
        p5.mousePressed = this.mouseReleased;
        p5.mouseWheel = this.mouseWheel;

        p5.keyPressed = this.keyPressed;
    }

    setup = () => {
        this.p5.createCanvas(400, 400);
        this.windowResized();

        this.panel = this.p5.createElement('div');
        this.panel.position(0, 0);

        const root = createRoot(this.panel.elt);
        root.render(<Editor sketch={this} />);

        sketch3(this);
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
        this.p5.scale(this.world.viewPortDistance);

        this.p5.strokeWeight(1);
        this.p5.stroke('black');

        // Draw World Constraint
        this.p5.rect(0, 0, this.world.width, this.world.height);

        this.entities.forEach(entity => entity.draw(this.drawDebug));

        if (this.drawDebug) {
            this.solver.draw(this.p5);
        }

        // Debug Info
        this.p5.resetMatrix();
        this.p5.stroke('black');
        this.p5.fill('black');
        this.p5.strokeWeight(1);

        let fps = this.p5.frameRate();
        this.p5.text(`FPS: ${fps}`, 50, 50);
        this.p5.text('Click me to add points', 50, 60);
        this.p5.text(`Total points: ${this.solver.objects.length}`, 50, 70);
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

        return false;
    }

    handleKeyIsDown = () => {
        //this.entities.forEach(entity => entity.handleKeys());
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

function sketch3(sketch: Sketch) {
    const worldRect = new RectBoxEntity(sketch, {
        center: new Vector(1000, 500),
        size: new Vector(2000, 1000)
    });

    sketch.addEntity(worldRect);
}