import {Circle} from "./circle";
import {Vec2} from "./vec2";
import {BallsObject} from "./object";
import {ViewportConstrain} from "./viewportConstrain";
import {CircleConstrain} from "./circleConstrain";
import {Velocity} from "./velocity";
import {MappedObjectGeneratorItem, MappedObjectsGenerator} from "./mappedObjectsGenerator";
import {TotalObjectsGenerator} from "./totalObjectsGenerator";
import {Solver} from "./solver";
import {Rect} from "./rect";

const balls = [
    new MappedObjectGeneratorItem(
        1,
        new BallsObject(new Vec2(10, 10))
    ),
    new MappedObjectGeneratorItem(
        2,
        new BallsObject(new Vec2(10, 10))
    ),
    new MappedObjectGeneratorItem(
        3,
        new BallsObject(new Vec2(10, 10))
    ),
]

export class Render {
    /**
     * List of balls
     * @type {BallsObject[]}
     */
    objects = []

    /**
     * @type {Constrain}
     */
    constrains = null;

    /**
     * Solver for physics
     * @type {Solver}
     */
    solver = null;

    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");

        this.timeRenderStart = performance.now();
        this.timeRenderEnd = performance.now();
        this.step = 0;

        this.items = [];

        this.generator = null;
        this.solver = null;

        this.configure();
    }

    configure() {
        this.solver = new Solver();

        this.context.font = '10px serif';

        this.switchToCircleConstrain();
        //this.switchToViewportConstrain();
        this.solver.constrains = this.constrains;

        this.generator = new TotalObjectsGenerator(
            this.solver,
            100,
            0.2,
            () => {
            const ball = new BallsObject(
                new Vec2(
                    this.canvas.width / 2,
                    this.canvas.height / 2
                )
            );
            ball.velocity = new Vec2(
                3,
                -0.5
            ).mul(1/this.solver.subSteps);
            return ball;
        })
    }

    update(time) {
        const newBall = this.generator.getNextObject(time);
        if (newBall) {
            this.solver.objects.push(newBall);
        }

        this.solver.update(time);
    }

    tick() {
        if (this.step < 0) {
            this.step = 0;
        }

        this.update(this.step / 1000);

        this.clear();
        this.renderItems();

        this.printFPS();
    }

    nextFrame = (time) => {
        this.step = time - this.timeRenderEnd;
        if (this.step < 0) {
            this.step = 0;
        }

        this.tick();

        this.timeRenderEnd = time;
        self.requestAnimationFrame(this.nextFrame);
    }

    nextInterval = () => {
        this.timeRenderStart = performance.now()
        this.step = this.timeRenderStart - this.timeRenderEnd;

        if (this.step < 0) {
            this.step = 0;
        }

        this.tick();

        this.timeRenderEnd = performance.now();
    }

    renderItems() {
        this.items.forEach(item => item.render());

        this.solver.objects.forEach(obj => {
            const img = new Circle(
                this.context,
                obj.currentPosition.x,
                obj.currentPosition.y,
                obj.radius
            );
            img.render();

            // this.context.strokeStyle = '#0000ff';
            // this.context.beginPath();
            // this.context.moveTo(obj.previousPosition.x, obj.previousPosition.y);
            // this.context.lineTo(obj.currentPosition.x, obj.currentPosition.y);
            // this.context.stroke();
        })
    }

    printText(text, x, y) {
        this.context.fillStyle = "#000000";
        this.context.fillText(text, x, y);
    }

    printFPS() {
        this.printText(`${Math.round(this.step)} ms / ${Math.round(1000/this.step)} FPS`, 0, 10);
    }

    clear() {
        this.context.fillStyle = "#ffffff";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    }

    start() {
        if (self.requestAnimationFrame) {
            self.requestAnimationFrame(this.nextFrame);
        } else {
            setInterval(this.nextInterval, 16)
        }
    }

    switchToCircleConstrain() {
        this.constrains = new CircleConstrain(
            new Vec2(this.canvas.width / 2, this.canvas.height / 2),
            this.canvas.height / 2
        )

        this.items.push(
            new Circle(
                this.context,
                this.canvas.width / 2,
                this.canvas.height / 2,
                this.canvas.height / 2,
                '#000000'
            )
        );
    }

    switchToViewportConstrain() {
        this.constrains = new ViewportConstrain(this.canvas.width, this.canvas.height)
        this.items.push(
            new Rect(
                this.context,
                Vec2.Zero(),
                new Vec2(
                    this.canvas.width,
                    this.canvas.height
                ),
                '#000000'
            )
        );
    }
}