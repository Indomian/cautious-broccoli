import {Point} from "./objects";
import {Sketch} from "../sketch";

export class BaseSolverSpace {
    sketch: Sketch;

    constructor(sketch: Sketch) {
        this.sketch = sketch;
    }

    clear() {};
    addObject(obj: Point) {};
    debugRender() {};
}
