import {Circle} from "./items/circle";
import {Vec2} from "./vector/vec2";
import {Vec2Math} from "./vector/vec2Math";
import {BallsObject} from "./objects/ball";
import {ViewportConstrain} from "./constrains/viewport";
import {CircleConstrain} from "./constrains/circle";
import {MappedObjectGeneratorItem, MappedObjectsGenerator} from "./mappedObjectsGenerator";
import {TotalObjectsGenerator} from "./totalObjectsGenerator";
import {Solver} from "./solver";
import {Rect} from "./items/rect";
import {RenderableObject} from "./renderableObjects/object";
import {ImmovableBallsObject} from "./objects/immovableBall";
import {ImmovableLineRenderableObject} from "./renderableObjects/immovableLine";
import {ImmovableLineObject} from "./objects/immovableLine";
import {Line} from "./items/line";
import {CircleWithText} from "./items/circleWithText";
import {Frame} from "./items/frame";

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
    [milkShakePoints[0], Vec2Math.diff(milkShakePoints[0], milkShakePoints[1]).flipSelf()],
    [milkShakePoints[1], Vec2Math.diff(milkShakePoints[1], milkShakePoints[2]).flipSelf()],
    [milkShakePoints[2], Vec2Math.diff(milkShakePoints[2], milkShakePoints[3]).flipSelf()]
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
        this.solver = new Solver(
            new Vec2(
                this.canvas.width,
                this.canvas.height
            )
        );

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
            600,
            7,
            (index) => {
                const obj = new RenderableObject(
                    (new BallsObject(
                        ballGeneratorPoint,
                        5
                    )).setVelocity(ballVelocity),
                    new CircleWithText(
                        this.context,
                        Vec2.Zero(),
                        5,
                        ballsColors[index],
                        '',
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
        this.renderGrid();

        this.printFPS();

        Vec2.lengthCallsCount = 0;
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
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, 100, 60);
        this.printText(`${Math.round(this.step)} ms / ${Math.round(1000/this.step)} FPS`, 0, 10);
        this.printText(`Length calls: ${Vec2.lengthCallsCount}`, 0 , 20);
        this.printText(`Lenght2 calls: ${Vec2.length2CallsCount}`, 0 , 30);
        this.printText(`Objects: ${this.objects.length}`, 0, 40);
        this.printText(`Compares per object: ${Math.round(Vec2.lengthCallsCount / this.objects.length)}`, 0, 50);
    }

    clear() {
        this.context.fillStyle = "rgba(0, 0, 0, 0.9)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    }

    start() {
        if (self.requestAnimationFrame) {
            self.requestAnimationFrame(this.nextFrame);
        } else {
            setInterval(this.nextInterval, 16)
        }
    }

    renderGrid() {
        this.solver.collisionGrid.forEach((x, y, cell, index) => {
            const cellPosition = new Vec2(
                x * this.solver.cellSize.x,
                y * this.solver.cellSize.y,
            );
            const rect = new Frame(
                this.context,
                cellPosition,
                this.solver.cellSize.diff(new Vec2(5, 5)),
                cell.count > 0 ? '#ff0000' : '#00ff00'
            )

            if (cell.hightlight) {
                this.context.lineWidth = 10;
            }

            rect.render();

            this.context.lineWidth = 1;
            this.printText(index, cellPosition.x + this.solver.cellSize.x / 2, cellPosition.y + this.solver.cellSize.y / 2)
        })
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
        // this.items.push(
        //     new Rect(
        //         this.context,
        //         Vec2.Zero(),
        //         new Vec2(
        //             this.canvas.width,
        //             this.canvas.height
        //         ),
        //         '#000000'
        //     )
        // );
    }
}