import { Vec2 } from "./vector/vec2";
import {BaseSolverObject} from "./objects/object";
import {Vec2Math} from "./vector/vec2Math";

export class CollisionCell {
    objects: BaseSolverObject[] = [];
    hightlight: boolean = false;

    addObject(obj) {
        this.objects.push(obj);
    }

    clear() {
        this.objects = [];
        this.hightlight = false;
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

type CollisionGridForEachCallback = (x: number, y: number, cell: CollisionCell, index?: number) => void;

export class CollisionGrid {
    cells: CollisionCell[] = [];
    _width: number;
    _height: number;
    _size: number;
    cellSize: Vec2;

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

    resize() {
        this.cells = [];
        this._size = this._width * this._height;
        for (let i = 0; i < this._size; i++) {
            this.cells.push(new CollisionCell());
        }
    }

    addObject(worldX, worldY, obj) {
        const x = Math.floor(worldX / this.cellSize.x);
        const y = Math.floor(worldY / this.cellSize.y);

        const index = x * this.width + y;
        if (isNaN(index) || index >= this.size || index < 0) {

        } else {
            this.cells[index].addObject(obj);
        }
    }

    makeIndexFromVec(vec) {
        return vec.x * this.width + vec.y;
    }

    makeIndexFromCoord(x, y) {
        return x * this.width + y;
    }

    /**
     * Adds object to all cells between given coords
     * @param worldLeftTop
     * @param worldRightBottom
     * @param obj
     */
    addObjectToCells(worldLeftTop: Vec2, worldRightBottom: Vec2, obj: BaseSolverObject) {
        const point1 = Vec2Math.scale(worldLeftTop, this.cellSize).applySelf(Math.floor);
        const point2 = Vec2Math.scale(worldRightBottom, this.cellSize).applySelf(Math.floor);

        const index1 = this.makeIndexFromVec(point1);
        const index2 = this.makeIndexFromVec(point2);

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
            let left = Math.min(point1.x, point2.x);
            let top = Math.min(point1.y, point2.y);
            let right = Math.max(point1.x, point2.x);
            let bottom = Math.max(point1.y, point2.y);
            let height = bottom - top;
            let startFrom = this.makeIndexFromCoord(left, top);

            for (let x = 0; x <= right-left; x++) {
                for (let y = 0; y <= height; y++) {
                    const cellIndex= startFrom + x * this.height + y;
                    this.cells[cellIndex].addObject(obj)
                }
            }
        }
    }

    clear() {
        for (let i = 0; i < this.size; i++) {
            this.cells[i].clear();
        }
    }

    forEach(callback: CollisionGridForEachCallback) {
        this.cells.forEach((cell, index) => {
            const x = Math.floor(index / this.width);
            const y = index - x * this.width;
            callback(x, y, cell, index);
        })
    }

    hasCell(index, dt) {
        if (index < 0 || index >= this.size) {
            return false;
        }

        const x = Math.floor(index / this.width);
        const y = index - x * this.width;

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
