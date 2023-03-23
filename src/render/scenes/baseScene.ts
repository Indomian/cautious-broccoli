import { ObjectsGenerator } from "../generators/objectsGenerator";
import { RenderableObject } from "../renderableObjects/object";
import { Render} from "../index";

export class BaseScene {
    engine: Render;
    generator: ObjectsGenerator;
    actor: RenderableObject;

    constructor(engine: Render) {
        this.engine = engine;
    }
}