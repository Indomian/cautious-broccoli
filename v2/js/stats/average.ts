export class AverageSet {
    stack: number[];
    maxTicks: number;

    constructor(ticks: number = 10) {
        this.stack = [];
        this.maxTicks = ticks;
    }

    tick(value: number) {
        this.stack.push(value);
        if (this.stack.length > this.maxTicks) {
            this.stack.shift();
        }
    }

    get average() {
        return this.stack.reduce((prevValue, currentValue) => prevValue + currentValue, 0) / this.stack.length;
    }
}