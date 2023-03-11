import {Circle} from "./circle";
import {Vec2} from "./vec2";
import {BallsObject} from "./object";
import {ViewportConstrain} from "./viewportConstrain";
import {CircleConstrain} from "./circleConstrain";
import {Velocity} from "./velocity";
import {MappedObjectGeneratorItem, MappedObjectsGenerator} from "./mappedObjectsGenerator";
import {TotalObjectsGenerator} from "./totalObjectsGenerator";

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

    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");

        this.timeRenderStart = performance.now();
        this.timeRenderEnd = performance.now();
        this.step = 0;
        this.gravity = Vec2.Zero();

        this.items = [];

        this.objects = [];

        this.generator = null;

        this.configure();
    }

    configure() {
        this.context.font = '10px serif';

        this.gravity = new Vec2(0, 100);
        //this.constrains = new ViewportConstrain(this.canvas.width, this.canvas.height)
        this.constrains = new CircleConstrain(
            new Vec2(this.canvas.width / 2, this.canvas.height / 2),
            this.canvas.height / 2
        )

        this.items.push(
            new Circle(
                this.context,
                this.canvas.width / 2 ,
                this.canvas.height / 2,
                this.canvas.height / 2,
                '#000000'
            )
        );

        //this.generator = new MappedObjectsGenerator(balls);
        this.generator = new TotalObjectsGenerator(200, 0.2, () => {
            const ball = new BallsObject(new Vec2(this.canvas.width / 2, this.canvas.height / 2));
            ball.velocity = new Vec2(5, -1);
            ball.radius = Math.random() * 20 + 5;
            return ball;
        })
    }

    update(time) {
        const newBall = this.generator.getNextObject(time);
        if (newBall) {
            this.objects.push(newBall);
        }

        this.applyGravity();
        this.applyConstrains();
        this.processCollisions();
        this.objects.forEach(obj => obj.update(time));
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

    applyGravity() {
        this.objects.forEach(obj => obj.accelerate(this.gravity))
    }

    applyConstrains() {
        this.objects.forEach(obj => this.constrains.applyConstrain(obj))
    }

    processCollisions() {
        this.objects.forEach(objA => {
            this.objects.forEach(objB => {
                if (objA === objB) {
                    return;
                }

                objA.collide(objB);
            })
        })
    }

    renderItems() {
        this.items.forEach(item => item.render());

        this.objects.forEach(obj => {
            const img = new Circle(
                this.context,
                obj.currentPosition.x,
                obj.currentPosition.y,
                obj.radius
            );
            img.render();

            // const v = new Velocity(this.context, obj);
            // v.render();
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
}