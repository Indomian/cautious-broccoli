import {Vec2} from "../vector/vec2";
import {BaseSolverObject} from "../objects/object";
import {CollisionCell, GridSolverSpace} from "./gridSolverSpace";
import {BaseSolver} from "./baseSolver";
import {Vec2Math} from "../vector/vec2Math";

export class GridOptimizedSolver extends BaseSolver {
    gravity: Vec2 = Vec2.Zero();
    gravityCenter: Vec2 = Vec2.Zero();
    collisionGrid: GridSolverSpace;

    cellSize: Vec2;

    constructor(worldSize, stats) {
        super(worldSize, stats);
        this.configure();
    }

    reset() {
        super.reset();
        this.collisionGrid.clear();
    }

    configure() {
        super.configure();
        this.gravity = new Vec2(0, 100);
        this.gravityCenter = new Vec2(this.worldSize.x / 2, this.worldSize.y / 2);

        const cellSize = 16;

        const gridX = Math.round(this.worldSize.x / cellSize);
        const gridY = Math.round(this.worldSize.y / cellSize);

        this.cellSize = new Vec2(
            this.worldSize.x / gridX,
            this.worldSize.y / gridY
        );

        this.collisionGrid = new GridSolverSpace(
            gridX, gridY,
            this.cellSize
        )
    }

    processOptimizations() {
        this.collisionGrid.clear();
        this.objects.forEach((obj, index) => {
            obj.addToSpace(this.collisionGrid);
            this.stats.addStats(`Solver object: ${obj.toString()}`)
        });
    }

    applyForces() {
        this.objects.forEach(obj => {
            const direction = Vec2Math.diff(obj.currentPosition, this.gravityCenter);
            obj.accelerate(direction.ort.mul(-100));
            //obj.accelerate(this.gravity)
        })
    }

    processCollisionsInCell(objA: BaseSolverObject, cell: CollisionCell) {
        this.stats.addStats('processCollisionsInCell.calls');

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

    debugRender(context: CanvasRenderingContext2D) {
        this.collisionGrid.debugRender(context);
    }
}

function makeKey(obj1, obj2) {
    return [obj1.index, obj2.index].sort().join('-');
}