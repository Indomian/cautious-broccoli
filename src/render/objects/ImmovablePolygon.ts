import {ImmovableSolverObject} from "./immovable";
import {SolverObjectTypes} from "./types";
import {Vec2Line} from "../vector/vec2Line";
import {CollisionGrid} from "../grid";
import {Vec2} from "../vector/vec2";

export class ImmovablePolygon extends ImmovableSolverObject {
    _points: Vec2[] = [];
    _lines: Vec2Line[] = [];
    _fixedPosition: Vec2;

    type = SolverObjectTypes.TypeImmovablePolygon;
    immovable = true;

    bounceValue = 1;

    constructor(position: Vec2, points: Vec2[]) {
        super();

        this.currentPosition = position.copy();
        this.previousPosition = position.copy();

        this._fixedPosition = position.copy();

        points.forEach(point => this._points.push(point.copy()));
        this._recreateLines();
    }

    private _recreateLines() {
        const pointsToProcess = [...this._points];
        let firstPoint: Vec2 = pointsToProcess.shift();
        let secondPoint: Vec2;
        let lastPoint: Vec2 = firstPoint;

        this._lines.splice(0, this._lines.length);

        while (secondPoint = pointsToProcess.shift()) {
            this._lines.push(new Vec2Line(
                this._fixedPosition.sum(lastPoint),
                this._fixedPosition.sum(secondPoint)
            ));

            lastPoint = secondPoint;
        }

        this._lines.push(new Vec2Line(
            this._fixedPosition.sum(lastPoint),
            this._fixedPosition.sum(firstPoint)
        ));
    }

    update(step) {
        this.currentPosition = this._fixedPosition;
        this.previousPosition = this._fixedPosition;
    }

    addToGrid(collisionGrid: CollisionGrid) {
        try {
            this._lines.forEach((line: Vec2Line) => {
                collisionGrid.addObjectToCells(
                    line.vec1,
                    line.vec2,
                    this
                );
            });
        } catch (e) {
            debugger
            console.log(e, this._lines);
        }
    }

    isPointInsideObject(point: Vec2): boolean {
        return true;
    }

    moveBy(delta: Vec2) {
        this.currentPosition.addSelf(delta);
        this.previousPosition.addSelf(delta);
        this._fixedPosition.addSelf(delta);

        this._lines.forEach((line: Vec2Line) => line.moveBy(delta));
    }

    moveTo(position: Vec2) {
        this._fixedPosition = position.copy();
        this.currentPosition = position.copy();
        this.previousPosition = position.copy();

        this._recreateLines();
    }

    get lines(): Vec2Line[] {
        return this._lines;
    }
}