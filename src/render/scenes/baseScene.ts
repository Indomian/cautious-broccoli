import { ObjectsGenerator } from "../generators/objectsGenerator";
import { RenderableObject } from "../renderableObjects/object";
import { Render} from "../index";
import {UIEvent} from "../../host/input";

export type SceneName = string;

export abstract class BaseScene {
    engine: Render;
    generator: ObjectsGenerator;
    actor: RenderableObject;

    protected constructor(engine: Render) {
        this.engine = engine;
    }

    abstract tick(timePassed: number): void;
    abstract processUserInput(event: UIEvent): void;
}