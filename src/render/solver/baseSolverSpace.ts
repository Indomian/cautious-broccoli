import {BaseSolverObject} from "../objects/object";
import {Vec2} from "../vector/vec2";

export abstract class BaseSolverSpace {
    abstract clear();
    abstract addObject(obj: BaseSolverObject);

    abstract addPointObject(worldX, worldY, obj: BaseSolverObject);

    abstract addRectangularObject(worldLeftTop: Vec2, worldRightBottom: Vec2, obj: BaseSolverObject);
    abstract debugRender(contenxt: CanvasRenderingContext2D);
}
