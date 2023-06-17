import {ImmovableSolverObject} from "./immovable";
import {SolverObjectTypes} from "./types";
import {Vec2Line} from "../vector/vec2Line";
import {CollisionGrid} from "../grid";
import {Vec2} from "../vector/vec2";
import {createImmovableLineFrom2Points, ImmovableLineObject} from "./immovableLine";
import {Vec2Math} from "../vector/vec2Math";

export class ImmovablePolygon extends ImmovableSolverObject {
    _localPoints: Vec2[] = [];
    _lines: ImmovableLineObject[] = [];
    _fixedPosition: Vec2;

    type = SolverObjectTypes.TypeImmovablePolygon;
    immovable = true;

    bounceValue = 1;

    constructor(position: Vec2, points: Vec2[]) {
        super();

        this.currentPosition = position.copy();
        this.previousPosition = position.copy();

        this._fixedPosition = position.copy();

        points.forEach(point => {
            this._localPoints.push(point.copy());
        });
        this._recreateLines();
    }

    private _recreateLines() {
        const pointsToProcess = [...this._localPoints];
        let firstPoint: Vec2 = pointsToProcess.shift();
        let secondPoint: Vec2;
        let lastPoint: Vec2 = firstPoint;

        this._lines.splice(0, this._lines.length);

        while (secondPoint = pointsToProcess.shift()) {
            const line = createImmovableLineFrom2Points(
                this._fixedPosition.sum(lastPoint),
                this._fixedPosition.sum(secondPoint)
            );

            this._lines.push(line);

            lastPoint = secondPoint;
        }

        const line = createImmovableLineFrom2Points(
            this._fixedPosition.sum(lastPoint),
            this._fixedPosition.sum(firstPoint)
        )

        this._lines.push(line);
    }

    update(step) {
        this.currentPosition = this._fixedPosition;
        this.previousPosition = this._fixedPosition;
    }

    addToGrid(collisionGrid: CollisionGrid) {
        try {
            this._lines.forEach((line: ImmovableLineObject) => line.addToGrid(collisionGrid));
        } catch (e) {
            debugger
            console.log(e, this._lines);
        }
    }

    isPointInsideObject(point: Vec2): boolean {
        return true;
    }

    moveBy(delta: Vec2) {
        this._fixedPosition.addSelf(delta);
        this._lines.forEach((line: ImmovableLineObject) => line.moveBy(delta));
    }

    moveTo(position: Vec2) {
        const delta = Vec2Math.diff(position, this._fixedPosition);
        this.moveBy(delta);
    }

    toString() {
        return 'ImmovablePolygon';
    }

    debugRender(context: CanvasRenderingContext2D) {
        context.strokeStyle = '#00FF00';
        this._lines.forEach(line => line.debugRender(context));
    }

    get lines(): ImmovableLineObject[] {
        return this._lines;
    }
}