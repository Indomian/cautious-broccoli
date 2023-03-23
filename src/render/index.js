import {Circle} from "./items/circle";
import {Vec2} from "./vector/vec2";
import {ViewportConstrain} from "./constrains/viewport";
import {CircleConstrain} from "./constrains/circle";
import {Solver} from "./solver";
import {RenderableObject} from "./renderableObjects/object";
import {Frame} from "./items/frame";
import {Scene1} from "./scenes/scene1";

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

    flagRenderGrid = false;

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
        this.solver = null

        this.redBall = null;

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

        const scene = new Scene1(this);

        this.generator = scene.generator;
        this.redBall = scene.getActor();
    }

    processUserInput(event) {
        if (event.leftButtonDown) {
            if (this.redBall.ballsObject.isPointInsideObject(
                new Vec2(
                    event.screenX,
                    event.screenY
                )
            )) {
                this.canMoveRedObject = true;
            }

            if (this.canMoveRedObject) {
                this.redBall.ballsObject.moveBy(
                    new Vec2(
                        event.dx,
                        event.dy
                    )
                )
            }
        } else {
            this.canMoveRedObject = false;
        }

        if (event.keyPressed === 'g') {
            this.flagRenderGrid = !this.flagRenderGrid;
        }
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
        const newBalls = this.generator.getNextObjects(time);
        if (newBalls) {
            newBalls.forEach(ball => this.addObject(ball));
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
        if (this.flagRenderGrid) {
            this.renderGrid();
        }

        this.printFPS();

        Vec2.lengthCallsCount = 0;
        Vec2.length2CallsCount = 0;
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
        this.context.fillStyle = 'rgba(0,0,0,0.1)';
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
        this.solver.collisionGrid.forEach((column, row, cell, index) => {
            const cellPosition = new Vec2(
                column * this.solver.cellSize.x,
                row * this.solver.cellSize.y,
            );
            const rect = new Frame(
                this.context,
                cellPosition,
                this.solver.cellSize.diff(new Vec2(5, 5)),
                cell.count > 0 ? '#ff0000' : '#00ff00'
            )

            if (cell.highlight) {
                this.context.lineWidth = 10;
            }

            rect.render();

            this.context.lineWidth = 1;
            this.printText(
                index,
                cellPosition.x + this.solver.cellSize.x / 2,
                cellPosition.y + this.solver.cellSize.y / 2
            )
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