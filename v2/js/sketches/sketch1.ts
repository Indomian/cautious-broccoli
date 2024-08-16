import {Sketch} from "../sketch";
import {circleConstraint} from "../solver/constraints";
import {airDensity, gravity, gravityCenter} from "../solver/forces";
import {MagicGravityEntity} from "../entities/magicGravity";
import {Vector} from "p5";
import {ImmovableCircleEntity} from "../entities/immovableCircle";
import {Touch, Touches} from "../touch";
import {PointEntity} from "../entities/point";

export class Sketch1 extends Sketch {
    touches: Touches;
    drawDebug: boolean = false;

    constructor(p5) {
        super(p5);

        p5.setup = this.setup;
        p5.draw = this.draw;

        p5.mouseClicked = this.mouseClicked;
        p5.mouseReleased = this.mouseReleased;
        p5.mousePressed = this.mouseReleased;
        p5.mouseWheel = this.mouseWheel;

        p5.keyPressed = this.keyPressed;

        this.touches = new Touches(this.p5);
        this.touches.handleTouchClick = this.mouseClicked;
        this.touches.handleTouchMove = this.handleTouchMove;
    }

    setup = () => {
        this.p5.createCanvas(400, 400);
        this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);

        sketch1(this);
    }

    draw = () => {
        if (!this.p5.focused) {
            return;
        }

        // Handle User Input
        this.handleKeyIsDown();
        this.handleMouseIsDown();
        this.touches.processTouches();

        // Handle The Solver
        this.solver.solve(this.p5.deltaTime);

        // Render Everything
        this.p5.background(220);
        this.p5.fill('white');

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

        this.entities.forEach(entity => entity.draw(this.drawDebug));

        if (this.drawDebug) {
            this.solver.draw(this.p5);
        }

        // Draw all objects as points
        this.p5.strokeWeight(5);
        this.p5.stroke('black');

        // let index: number = 0;
        // while (index < this.solver.objects.length) {
        //     const r = index % 255;
        //     const g = Math.round(index / 2);
        //     this.p5.stroke(r, g, 0);
        //
        //     let point1 = this.solver.objects[index].position;
        //     let point2 = this.solver.objects[index + 1].position;
        //     let point3 = this.solver.objects[index + 2].position;
        //
        //     this.p5.line(point1.x, point1.y, point2.x, point2.y);
        //     this.p5.line(point2.x, point2.y, point3.x, point3.y);
        //     this.p5.line(point3.x, point3.y, point1.x, point1.y);
        //
        //     this.p5.point(point1);
        //     this.p5.point(point2);
        //     this.p5.point(point3);
        //     index += 3;
        // }


        // Debug Info
        this.p5.resetMatrix();
        this.p5.stroke('black');
        this.p5.fill('black');
        this.p5.strokeWeight(1);

        let fps = this.p5.frameRate();
        this.p5.text(`FPS: ${fps}`, 50, 50);
        this.p5.text('Click me to add points', 50, 60);
        this.p5.text(`Total points: ${this.solver.objects.length}`, 50, 70);
    }

    handleTouchMove = (touch: Touch) => {
        this.world.moveViewPort(
            this.p5.mouseX - this.p5.pmouseX,
            this.p5.mouseY - this.p5.pmouseY
        );
    }

    mouseClicked = (event: MouseEvent) => {
        console.log(event);
        event.preventDefault();

        // for (let i=0; i < 30; i++) {
        //     const points = [
        //         new Point(
        //             this.p5.createVector(300, 300).add(Vector.random2D().mult(Math.random() * 200))
        //         ),
        //         new Point(
        //             this.p5.createVector(300, 300).add(Vector.random2D().mult(Math.random() * 200))
        //         ),
        //         new Point(
        //             this.p5.createVector(300, 300).add(Vector.random2D().mult(Math.random() * 200))
        //         ),
        //     ]
        //
        //     this.solver.addConstraint(distance(points[0], points[1], 100));
        //     this.solver.addConstraint(distance(points[1], points[2], 100))
        //     this.solver.addConstraint(distance(points[2], points[0], 100))
        //
        //     points.forEach(point => this.solver.addObject(point));
        // }

        const center = new Vector(300, 300);

        for (let i=0; i < 30; i++) {
            const point = new PointEntity(this, {
                position: new Vector(300, 300).add(Vector.random2D().mult(Math.random() * 200)),
                stroke: this.p5.color([Math.random() * 255, Math.random() * 255, Math.random() * 255]),
                size: this.p5.random(5, 20)
            })

            this.addEntity(point);
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

    keyPressed = (event) => {
        if (this.p5.key === 'd') {
            this.drawDebug = !this.drawDebug;
        }

        return false;
    }

    handleKeyIsDown = () => {
        this.entities.forEach(entity => entity.handleKeys());

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