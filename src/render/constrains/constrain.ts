import {BaseSolverObject} from "../objects/object";

export abstract class Constrain {
    protected constructor() {}

    /**
     *
     * @param {BaseSolverObject} obj
     */
    abstract applyConstrain(obj: BaseSolverObject): void;
}