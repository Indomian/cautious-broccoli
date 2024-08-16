import * as P5 from "p5";
import {Point} from "./objects";
import {Sketch} from "../sketch";

export class BaseSolverSpace {
    constructor() {}

    clear() {};
    addObject(obj: Point) {};
    debugRender(p5: P5) {};
}
