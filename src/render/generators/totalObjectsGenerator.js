import {ObjectsGenerator} from "./objectsGenerator";

export class TotalObjectsGenerator extends ObjectsGenerator {
    constructor(solver, count, delay, createCallback) {
        super(solver);
        this.limit = count;
        this.total = 0;

        this.delay = delay;
        this.create = createCallback;
        this.lastCreateTime = 0;
    }

    getNextObjects(step) {
        if (this.total > this.limit) {
            return [];
        }

        this.lastCreateTime += 1;
        if (this.lastCreateTime > this.delay) {
            const newItems = this.create(this.total);
            this.lastCreateTime = 0;
            this.total+= newItems.length;

            return newItems;
        }

        return []
    }
}