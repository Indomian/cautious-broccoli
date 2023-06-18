import {Vec2} from "./vector/vec2";
import {GridOptimizedSolver} from "./solver/gridSolver";
import {RenderableObject} from "./renderableObjects/object";
import {Frame} from "./items/frame";
import {Scene1} from "./scenes/scene1";
import {Constrain} from "./constrains/constrain";
import {BaseScene, SceneName} from "./scenes/baseScene";
import {AnyUIEvent, UIKeyboardEvent} from "../host/input";
import { Item } from "./items/item";
import {AnyEngineEvent, LoadSceneEngineEvent} from "./events/engine";
import {ENGINE_SCENES} from "./scenes/all";
import {Stats, StatsItem} from "./stats";
import {BaseSolverObject} from "./objects/object";
import {BaseSolver} from "./solver/baseSolver";
import {QuadTreeSolver} from "./solver/quadTreeSolver";

export class Render {
    /**
     * List of balls
     * @type {RenderableObject[]}
     */
    objects: RenderableObject<BaseSolverObject, Item>[] = [];

    /**
     * @type {Constrain}
     */
    _constrains = null;

    /**
     * Solver for physics
     * @type {BaseSolver}
     */
    solver:BaseSolver = null;

    flagRenderGrid = false;
    flagRenderPreviousPosition = false;

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    timeRenderStart: number;
    timeRenderEnd: number;
    step: number;

    items: Item[];

    scene: BaseScene;
    stats: Stats;

    constructor(canvas) {
        this.stats = new Stats();
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

        this.solver = null

        this.configure();
    }

    reset() {
        this.objects = [];
        this.items = [];
        this.solver.reset();
    }

    configure() {
        this.solver = new GridOptimizedSolver(
            new Vec2(
                this.canvas.width,
                this.canvas.height
            ),
            this.stats
        );

        this.context.font = '10px serif';

        this.loadScene("scene1");
    }

    processUserInput(event: AnyUIEvent) {
        const keyboardEvent = event as UIKeyboardEvent;
        if (keyboardEvent.keyPressed === 'g') {
            this.flagRenderGrid = !this.flagRenderGrid;
        }

        if (keyboardEvent.keyPressed === 'p') {
            this.flagRenderPreviousPosition = !this.flagRenderPreviousPosition;
        }

        this.scene.processUserInput(event);
    }

    processEngineEvent(event: AnyEngineEvent) {
        const loadSceneEvent = event as LoadSceneEngineEvent;

        if (loadSceneEvent.scene) {
            this.loadScene(loadSceneEvent.scene);
        }
    }

    loadScene(sceneName: SceneName) {
        this.reset();

        const Scene = ENGINE_SCENES[sceneName];
        this.scene = new Scene(this);
    }

    /**
     * @param {RenderableObject} obj
     */
    addObject(obj: RenderableObject<BaseSolverObject, Item>) {
        this.objects.push(obj);
        this.solver.addObject(obj.solverObject);
    }

    update(time) {
        this.solver.update(time);
    }

    tick() {
        if (this.step < 0) {
            this.step = 0;
        }

        const timePassed = this.step / 1000;

        this.scene.tick(timePassed);
        this.update(timePassed);

        this.clear();
        this.renderItems();

        if (this.flagRenderGrid) {
            this.renderGrid();
        }

        if (this.flagRenderPreviousPosition) {
            this.renderPreviousPosition();
        }

        this.printFPS();
        this.stats.resetTick();

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
        this.objects.forEach((obj) => obj.render());
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

        const stats = this.stats.getTickData();
        stats.forEach((item: StatsItem, index: number) => {
           this.printText(`${item.key}: ${item.value}`, 0, index * 10 + 60);
        });
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
        this.solver.debugRender(this.context);
        this.solver.objects.forEach(object => object.debugRender(this.context));
    }

    renderPreviousPosition() {
        this.objects.forEach((renderableObject) => {
            const position = renderableObject.solverObject.previousPosition;
            this.context.fillStyle = 'rgba(0, 0, 255, 0.5)';
            this.context.beginPath()
            this.context.arc(
                position.x,
                position.y,
                10,
                0,
                2 * Math.PI
            )
            this.context.fill();
        })
    }

    set constrain(constrain: Constrain) {
        this._constrains = constrain;
        this.solver.constrains = this._constrains;
    }

    get constrain(): Constrain {
        return this._constrains;
    }
}