import {Vec2} from "../vector/vec2";
import {BaseSolverObject} from "../objects/object";
import {Constrain} from "../constrains/constrain";
import {Stats} from "../stats";
import {BaseRender} from "../render/baseRender";

export abstract class BaseSolver {
    stats: Stats;
    objects: BaseSolverObject[] = []
    constrains: Constrain = null;
    subSteps: number = 4;
    useFixedTime: boolean = true;
    step: number;

    worldSize: Vec2;

    protected constructor(worldSize, stats) {
        this.stats = stats;
        this.objects = [];
        this.worldSize = worldSize.copy();

        this.configure();
    }

    reset() {
        this.objects = [];
    }

    configure() {
        this.useFixedTime = true;
        this.step = 0.017 / this.subSteps;
    }

    addObject(obj: BaseSolverObject) {
        this.objects.push(obj);
    }

    /**
     * Update the simulation by given step.
     * @param {number} time amount of seconds passed since last update.
     */
    update(time: number) {
        const subTime = this.useFixedTime ? this.step : time / this.subSteps;
        for (let i = 0; i < this.subSteps; i++) {
            this.processOptimizations();
            this.processCollisions();
            this.applyForces();
            this.updateObjects(subTime);
            this.applyConstrains();
        }
    }

    abstract processOptimizations();

    /**
     * Update objects state
     * @param {number} time amount of seconds passed since last update
     */
    updateObjects(time) {
        this.objects.forEach(obj => obj.update(time))
    }

    abstract applyForces();

    applyConstrains() {
        this.objects.forEach(obj => this.constrains.applyConstrain(obj))
    }

    abstract processCollisions();
    abstract debugRender(context: BaseRender);
}

function makeKey(obj1, obj2) {
    return [obj1.index, obj2.index].sort().join('-');
}