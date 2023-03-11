import {ObjectsGenerator} from "./objectsGenerator";

export class TotalObjectsGenerator extends ObjectsGenerator {
    constructor(count, delay, createCallback) {
        super();
        this.limit = count;
        this.total = 0;

        this.delay = delay;
        this.create = createCallback;
        this.lastCreateTime = 0;
    }

    getNextObject(step) {
        if (this.total > this.limit) {
            return;
        }

        this.lastCreateTime += step;
        if (this.lastCreateTime > this.delay) {
            const newItem = this.create();
            this.lastCreateTime = 0;
            this.total++;

            return newItem;
        }
    }
}