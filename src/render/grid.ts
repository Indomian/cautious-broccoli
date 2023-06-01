import { Vec2 } from "./vector/vec2";
import {BaseSolverObject} from "./objects/object";
import {Vec2Math} from "./vector/vec2Math";

export class CollisionCell {
    objects: BaseSolverObject[] = [];
    highlight: boolean = false;

    static MAX_OBJECT_IN_CELL = 100;

    addObject(obj) {
        if (this.objects.length >= CollisionCell.MAX_OBJECT_IN_CELL) {
            return
        }

        this.objects.push(obj);
    }

    clear() {
        this.objects = [];
        this.highlight = false;
    }

    remove(index) {
        const objectIndex = this.objects.findIndex(obj => obj.index === index);
        if (objectIndex !== -1) {
            this.objects.splice(objectIndex, 1);
        }
    }

    get count() {
        return this.objects.length;
    }
}

type CollisionGridForEachCallback = (column: number, row: number, cell: CollisionCell, index?: number) => void;
type CollisionCellArray = CollisionCell[];

type GridIndex = number;

export class CollisionGrid {
    cells: CollisionCell[] = [];
    _width: number;
    _height: number;
    _size: number;
    cellSize: Vec2;
    index2xy: Vec2[] = [];
    adjacentCells: CollisionCellArray[] = []

    constructor(width, height, cellSize: Vec2) {
        this._width = width;
        this._height = height;

        this.cellSize = cellSize;

        this.resize();
    }

    get size(): number {
        return this._size;
    }

    get width(): number {
        return this._width;
    }

    set width(w: number) {
        this._width = w;
        this.resize();
    }

    get height(): number {
        return this._height;
    }

    set height(h: number) {
        this._height = h;
        this.resize();
    }

    recalculateIndex2xy() {
        this.index2xy = [];
        for (let i = 0; i < this._size; i++) {
            this.index2xy.push(this.makeVecFromIndex(i))
        }
    }

    /**
     * Calculate cache of collision cells
     */
    recalculateCollisionCells() {
        this.adjacentCells = [];
        this.cells.forEach((cell, index) => {
            const pos = this.getVecFromIndex(index);
            const cells = [];
            cells.push(cell); // Add self

            if (pos.y > 0) {
                cells.push(this.cells[this.makeIndexFromCoord(pos.x, pos.y - 1)]); //TOP
            }

            if (pos.y + 1 < this._height) {
                cells.push(this.cells[this.makeIndexFromCoord(pos.x, pos.y + 1)]); //BOTTOM
            }

            if (pos.x > 0) {
                if (pos.y > 0) {
                    cells.push(this.cells[this.makeIndexFromCoord(pos.x - 1, pos.y - 1)]); //LEFT TOP
                }

                cells.push(this.cells[this.makeIndexFromCoord(pos.x - 1, pos.y)]); //LEFT

                if (pos.y + 1 < this._height) {
                    cells.push(this.cells[this.makeIndexFromCoord(pos.x - 1, pos.y + 1)]); //LEFT BOTTOM
                }
            }

            if (pos.x + 1 < this._width) {
                if (pos.y > 0) {
                    cells.push(this.cells[this.makeIndexFromCoord(pos.x + 1, pos.y - 1)]); //RIGHT TOP
                }

                cells.push(this.cells[this.makeIndexFromCoord(pos.x + 1, pos.y)]); //RIGHT

                if (pos.y + 1 < this._height) {
                    cells.push(this.cells[this.makeIndexFromCoord(pos.x + 1, pos.y + 1)]); //RIGHT BOTTOM
                }
            }

            this.adjacentCells[index] = cells;
        })
    }

    getVecFromIndex(index) {
        return this.index2xy[index];
    }

    resize() {
        this.cells = [];
        this._size = this._width * this._height;
        for (let i = 0; i < this._size; i++) {
            this.cells.push(new CollisionCell());
        }

        this.recalculateIndex2xy();
        this.recalculateCollisionCells();
    }

    addObject(worldX, worldY, obj) {
        const x = Math.trunc(worldX / this.cellSize.x);
        const y = Math.trunc(worldY / this.cellSize.y);

        const index: GridIndex = x * this._height + y;
        this.addObjectByIndex(index, obj);
    }

    addObjectByIndex(index: GridIndex, obj: BaseSolverObject) {
        if (!isNaN(index) && index>=0 && index<this.size) {
            this.cells[index].addObject(obj);
        }
    }

    makeIndexFromVec(vec: Vec2): number {
        return vec.x * this._height + vec.y;
    }

    makeIndexFromCoord(x: number, y: number): number {
        return x * this._height + y;
    }

    makeVecFromIndex(index: GridIndex): Vec2 {
        const x = Math.trunc(index / this._height);
        const y = index - x * this._height;
        return new Vec2(x, y);
    }

    /**
     * Adds object to all cells between given coords
     * @param worldLeftTop
     * @param worldRightBottom
     * @param obj
     */
    addObjectToCells(worldLeftTop: Vec2, worldRightBottom: Vec2, obj: BaseSolverObject) {
        const point1 = Vec2Math.scale(worldLeftTop, this.cellSize).applySelf(Math.trunc);
        const point2 = Vec2Math.scale(worldRightBottom, this.cellSize).applySelf(Math.trunc);

        const index1 = this.makeIndexFromVec(point1);
        const index2 = this.makeIndexFromVec(point2);

        let left = Math.min(point1.x, point2.x);
        let top = Math.min(point1.y, point2.y);
        let right = Math.max(point1.x, point2.x);
        let bottom = Math.max(point1.y, point2.y);

        if (right >= this._width || left < 0 || top < 0 || bottom >= this._height) {
            return
        }

        if (point1.x === point2.x) {
            // Vertical
            for (let cellIndex = index1; cellIndex < index2; cellIndex++) {
                this.cells[cellIndex].addObject(obj);
            }
        } else if (point1.y === point2.y) {
            // Horizontal
            for (let cellIndex = index1; cellIndex < index2; cellIndex+=this.height) {
                this.cells[cellIndex].addObject(obj);
            }
        } else {
            let height = bottom - top;
            let startFrom = this.makeIndexFromCoord(left, top);

            for (let x = 0; x <= right-left; x++) {
                for (let y = 0; y <= height; y++) {
                    const cellIndex = startFrom + this.makeIndexFromCoord(x, y);
                    this.addObjectByIndex(cellIndex, obj);
                }
            }
        }
    }

    clear() {
        this.cells.forEach(cell => cell.clear())
    }

    forEach(callback: CollisionGridForEachCallback) {
        this.cells.forEach((cell, index) => {
            const pos = this.getVecFromIndex(index);
            callback(pos.x, pos.y, cell, index);
        })
    }

    hasCell(index: number, dt: number) {
        if (index < 0 || index >= this.size) {
            return false;
        }

        const pos = this.getVecFromIndex(index);

        const x = pos.x;
        const y = pos.y;

        if (y <= 0 && dt < 0) {
            // TOP CELL
            return false;
        }

        if (y === this.height - 1 && dt > 0) {
            // Bottom cell
            return  false;
        }

        if (x === 0 && dt < 0) {
            // left cell
            return false;
        }

        if (x >= this.width - 1 && dt > 0) {
            // right cell;
            return false;
        }

        return true;
    }
}
