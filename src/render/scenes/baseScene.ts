import { ObjectsGenerator } from "../generators/objectsGenerator";
import { RenderableObject } from "../renderableObjects/object";
import { Render} from "../index";
import {UIEvent} from "../../host/input";
import {BaseSolverObject} from "../objects/object";
import {Item} from "../items/item";

export type SceneName = string;

export abstract class BaseScene {
    engine: Render;
    generator: ObjectsGenerator;
    actor: RenderableObject<BaseSolverObject, Item>;

    protected constructor(engine: Render) {
        this.engine = engine;
    }

    abstract tick(timePassed: number): void;
    abstract processUserInput(event: UIEvent): void;
}