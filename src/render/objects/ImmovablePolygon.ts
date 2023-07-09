import {ImmovableSolverObject} from "./immovable";
import {SolverObjectTypes} from "./types";
import {Vec2Line} from "../vector/vec2Line";
import {BaseSolverSpace} from "../solver/baseSolverSpace";
import {Vec2} from "../vector/vec2";
import {createImmovableLineFrom2Points, ImmovableLineObject} from "./immovableLine";
import {Vec2Math} from "../vector/vec2Math";
import {BaseRender} from "../render/baseRender";
import {Vec2Rect} from "../vector/vec2Rect";

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

    addToSpace(solverSpace: BaseSolverSpace) {
        try {
            this._lines.forEach((line: ImmovableLineObject) => line.addToSpace(solverSpace));
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

    debugRender(context: BaseRender) {
        context.strokeStyle('#00FF00');
        this._lines.forEach(line => line.debugRender(context));
    }

    get lines(): ImmovableLineObject[] {
        return this._lines;
    }

    intersects(range: Vec2Rect): boolean {
        return this._lines.some(line => line.intersects(range));
    }

    getCollisionRange(): Vec2Rect {
        return new Vec2Rect(this.currentPosition, new Vec2(60, 60));
    }
}