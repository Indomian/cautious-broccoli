import {Vec2} from "./vector/vec2";
import {BallsObject} from "./objects/ball";
import {BaseSolverObject} from "./objects/object";
import {Constrain} from "./constrains/constrain";
import {CollisionCell, CollisionGrid} from "./grid";

export class Solver {
    objects: BaseSolverObject[] = []
    constrains: Constrain = null;
    gravity: Vec2 = Vec2.Zero();
    subSteps: number = 4;
    useFixedTime: boolean = true;
    step: number;
    collisionGrid: CollisionGrid;
    worldSize: Vec2;

    cellSize: Vec2;

    constructor(worldSize) {
        this.objects = [];
        this.worldSize = worldSize.copy();

        this.configure();
    }

    configure() {
        this.gravity = new Vec2(0, 100);

        this.useFixedTime = true;
        this.step = 0.017 / this.subSteps;

        const cellSize = 16;

        const gridX = Math.round(this.worldSize.x / cellSize);
        const gridY = Math.round(this.worldSize.y / cellSize);

        this.cellSize = new Vec2(
            this.worldSize.x / gridX,
            this.worldSize.y / gridY
        );

        this.collisionGrid = new CollisionGrid(
            gridX, gridY,
            this.cellSize
        )
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
            this.addObjectsToGrid();
            this.processCollisions();
            this.applyGravity();
            this.updateObjects(subTime);
            this.applyConstrains();
        }
    }

    addObjectsToGrid() {
        this.collisionGrid.clear();
        this.objects.forEach((obj, index) => {
            obj.addToGrid(this.collisionGrid);
        });
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

    processCollisionsInCell(objA: BaseSolverObject, cell: CollisionCell) {
        cell.objects.forEach(objB => {
            if (objA === objB) {
                return;
            }

            if (objA.immovable && objB.immovable) {
                return;
            }

            objA.collide(objB);
        })
    }

    processCell(index: number) {
        this.collisionGrid.cells[index].objects.forEach(objA => {
            this.processCollisionsInCell(objA, this.collisionGrid.cells[index]); // SELF

            if (this.collisionGrid.hasCell(index, -1)) {
                this.processCollisionsInCell(objA, this.collisionGrid.cells[index - 1]); // TOP
            }

            if (this.collisionGrid.hasCell(index, 1)) {
                this.processCollisionsInCell(objA, this.collisionGrid.cells[index + 1]); // BOTTOM
            }

            if (this.collisionGrid.hasCell(index + this.collisionGrid.height, -1)) {
                this.processCollisionsInCell(objA, this.collisionGrid.cells[index + this.collisionGrid.height - 1]); // RIGHT TOP
            }

            if (this.collisionGrid.hasCell(index + this.collisionGrid.height, 0)) {
                this.processCollisionsInCell(objA, this.collisionGrid.cells[index + this.collisionGrid.height]); // RIGHT
            }

            if (this.collisionGrid.hasCell(index + this.collisionGrid.height, 1)) {
                this.processCollisionsInCell(objA, this.collisionGrid.cells[index + this.collisionGrid.height + 1]); // RIGHT BOTTOM
            }

            if (this.collisionGrid.hasCell(index - this.collisionGrid.height, -1)) {
                this.processCollisionsInCell(objA, this.collisionGrid.cells[index - this.collisionGrid.height - 1]); // LEFT TOP
            }

            if (this.collisionGrid.hasCell(index - this.collisionGrid.height, 0)) {
                this.processCollisionsInCell(objA, this.collisionGrid.cells[index - this.collisionGrid.height]); // LEFT
            }

            if (this.collisionGrid.hasCell(index - this.collisionGrid.height, 1)) {
                this.processCollisionsInCell(objA, this.collisionGrid.cells[index - this.collisionGrid.height + 1]); // LEFT BOTTOM
            }
        })
    }

    processCollisions() {
        for (let index = 0; index < this.collisionGrid.size; index++) {
            this.processCell(index);
        }
    }
}

function makeKey(obj1, obj2) {
    return [obj1.index, obj2.index].sort().join('-');
}