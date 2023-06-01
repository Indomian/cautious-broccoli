import {Vec2} from "./vector/vec2";
import {BallsObject} from "./objects/ball";
import {BaseSolverObject} from "./objects/object";
import {Constrain} from "./constrains/constrain";
import {CollisionCell, CollisionGrid} from "./grid";
import {Stats} from "./stats";

export class Solver {
    stats: Stats;

    objects: BaseSolverObject[] = []
    constrains: Constrain = null;
    gravity: Vec2 = Vec2.Zero();
    subSteps: number = 4;
    useFixedTime: boolean = true;
    step: number;
    collisionGrid: CollisionGrid;
    worldSize: Vec2;

    cellSize: Vec2;

    constructor(worldSize, stats) {
        this.stats = stats;
        this.objects = [];
        this.worldSize = worldSize.copy();

        this.configure();
    }

    reset() {
        this.objects = [];
        this.collisionGrid.clear();
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
        this.stats.addStats('processCollisionsInCell.calls', 1);

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
        this.stats.addStats('processCell.calls', 1);

        const currentCell = this.collisionGrid.cells[index];
        currentCell.objects.forEach(objA => {
            this.collisionGrid.adjacentCells[index].forEach(cell => {
                if (cell === currentCell && cell.objects.length === 1) {
                    return; // We don't need to check collisions if I'm only object in cell
                }

                this.processCollisionsInCell(objA, cell);
            })
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