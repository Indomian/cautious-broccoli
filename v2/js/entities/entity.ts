import {Sketch} from "../sketch";

interface EntityConfiguration {}

export class Entity {
    sketch: Sketch;
    configuration: EntityConfig<EntityConfiguration>;
    visible: boolean = false;

    constructor(sketch: Sketch, configuration: EntityConfiguration) {
        this.sketch = sketch;
        this.configuration = new EntityConfig(configuration);
    }

    add() {

    }

    draw(debug = false) {
    }

    handleKeys() {

    }

    remove() {

    }
}

export class EntityConfig<Type> {
    value: Type;

    constructor(config: Type) {
        this.value = config
    }

    toJSON() {
        return JSON.stringify(this.value);
    }
}