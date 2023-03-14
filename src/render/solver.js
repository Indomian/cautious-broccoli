import {Vec2} from "./vector/vec2";
import {BallsObject} from "./objects/object";

export class Solver {
    /**
     * List of balls
     * @type {BallsObject[]}
     */
    objects = []

    /**
     * @type {Constrain}
     */
    constrains = null;

    constructor() {
        this.gravity = Vec2.Zero();

        this.objects = [];

        this.subSteps = 4;

        this.configure();
    }

    configure() {
        this.gravity = new Vec2(0, 100);

        this.useFixedTime = true;
        this.step = 0.017 / this.subSteps;
    }

    /**
     *
     * @param {BallsObject} obj
     */
    addObject(obj) {
        this.objects.push(obj);
    }

    /**
     * Update the simulation by given step.
     * @param {number} time amount of seconds passed since last update.
     */
    update(time) {
        const subTime = this.useFixedTime ? this.step : time / this.subSteps;
        for (let i = 0; i < this.subSteps; i++) {
            this.applyGravity();
            this.applyConstrains();
            this.processCollisions();
            this.updateObjects(subTime);
        }
    }

    /**
     * Update objects state
     * @param {number} time amount of seconds passed since last update
     */
    updateObjects(time) {
        this.objects.forEach(obj => obj.update(time))
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
}