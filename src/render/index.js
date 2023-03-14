import {Circle} from "./items/circle";
import {Vec2, Vec2Math} from "./vector/vec2";
import {BallsObject} from "./objects/object";
import {ViewportConstrain} from "./constrains/viewport";
import {CircleConstrain} from "./constrains/circle";
import {Velocity} from "./items/velocity";
import {MappedObjectGeneratorItem, MappedObjectsGenerator} from "./mappedObjectsGenerator";
import {TotalObjectsGenerator} from "./totalObjectsGenerator";
import {Solver} from "./solver";
import {Rect} from "./items/rect";
import {RenderableObject} from "./renderableObjects/object";
import {ImmovableBallsObject} from "./objects/immovable";
import {ImmovableLineRenderableObject} from "./renderableObjects/immovableLine";
import {ImmovableLineObject} from "./objects/immovableLine";
import {Line} from "./items/line";
import {CircleWithText} from "./items/circleWithText";

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

const milkShakePoints = [
    new Vec2(60, 110),
    new Vec2(130, 490),
    new Vec2(330, 490),
    new Vec2(400, 110)
]

const milkShakeLines = [
    [milkShakePoints[0], Vec2Math.diff(milkShakePoints[0], milkShakePoints[1]).flip()],
    [milkShakePoints[1], Vec2Math.diff(milkShakePoints[1], milkShakePoints[2]).flip()],
    [milkShakePoints[2], Vec2Math.diff(milkShakePoints[2], milkShakePoints[3]).flip()]
]

const ballsColors = {
    57: '#ffffff',
    78: '#ffffff',
    71: '#ffffff',
    86: '#ffffff',
    200: '#ffffff',
    202: '#ffffff',
    218: '#ffffff',
}

export class Render {
    /**
     * List of balls
     * @type {RenderableObject[]}
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

        /**
         * @type {RenderableObject[]}
         */
        this.objects = [];

        this.items = [];

        this.generator = null;
        this.solver = null;

        this.configure();
    }

    configure() {
        this.solver = new Solver();

        this.context.font = '10px serif';

        //this.switchToCircleConstrain();
        this.switchToViewportConstrain();
        this.solver.constrains = this.constrains;

        const canvasCenter = new Vec2(
            this.canvas.width / 2,
            this.canvas.height / 2
        );

        const ballGeneratorPoint = new Vec2(
            10, 10
        );
        const ballVelocity = new Vec2(
            3, -3
        ).mul(1/this.solver.subSteps);

        this.generator = new TotalObjectsGenerator(
            this.solver,
            300,
            10,
            (index) => {
                const obj = new RenderableObject(
                    (new BallsObject(
                        ballGeneratorPoint,
                        10
                    )).setVelocity(ballVelocity),
                    new CircleWithText(
                        this.context,
                        Vec2.Zero(),
                        10,
                        ballsColors[index],
                        index,
                        '#000000'
                    )
                )

                return obj;
            }
        );

        this.addObject(new RenderableObject(
            new ImmovableBallsObject(new Vec2(230, 50), 30),
            new Circle(this.context, Vec2.Zero(), 30, '#ff0000')
        ));

        milkShakeLines.forEach(line => {
            this.addObject(new ImmovableLineRenderableObject(
                new ImmovableLineObject(
                    line[0],
                    line[1]
                ),
                new Line(
                    this.context,
                    Vec2.Zero(),
                    Vec2.Zero(),
                    '#ffffff'
                )
            ));
        });
    }

    /**
     * @param {RenderableObject} obj
     */
    addObject(obj) {
        this.objects.push(obj);
        this.solver.addObject(obj.ballsObject);
    }

    update(time) {
        this.solver.update(time);
    }

    generatorsTick(time) {
        const newBall = this.generator.getNextObject(time);
        if (newBall) {
            this.addObject(newBall)
        }
    }

    tick() {
        if (this.step < 0) {
            this.step = 0;
        }

        this.generatorsTick(this.step / 1000);
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
        this.objects.forEach(obj => obj.render());
    }

    printText(text, x, y) {
        this.context.fillStyle = "#ffffff";
        this.context.textAlign = "start";
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