import { ObjectsGenerator } from "./objectsGenerator";
import { RenderableObject } from "../renderableObjects/object";
import {Solver} from "../solver";

export class CombineGenerator extends ObjectsGenerator {
    generators: ObjectsGenerator[] = []

    constructor(solver: Solver) {
        super(solver);
    }

    addGenerator(generator: ObjectsGenerator) {
        this.generators.push(generator);
    }

    getNextObjects(tick) {
        return this.generators.reduce((accumulator: RenderableObject[], generator) => {
            return accumulator.concat(accumulator, generator.getNextObjects(tick))
        }, []);
    }

}