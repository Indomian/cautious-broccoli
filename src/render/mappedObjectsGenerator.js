import {ObjectsGenerator} from "./objectsGenerator";


export class MappedObjectGeneratorItem {
    /**
     * Delay before object appear
     * @type {number}
     */
    timeout;

    /**
     * Object configuration
     * @type {BallsObject}
     */
    object;

    constructor(timeout, object) {
        this.timeout = timeout;
        this.object = object;
    }

}

export class MappedObjectsGenerator extends ObjectsGenerator {
    /**
     * @param {MappedObjectGeneratorItem[]} map
     */
    constructor(solver, map) {
        super(solver);

        this.items = map;
        this.currentTime = 0;
    }

    getNextObject(step) {
        this.currentTime += step;

        console.log(this.currentTime)

        const index = this.items.findIndex((item) => item.timeout < this.currentTime);
        if (index > -1) {
            return [this.items.splice(index, 1)[0].object];
        }
    }
}