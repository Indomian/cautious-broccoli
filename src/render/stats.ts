export interface StatsItem {
    key: string;
    value: number;
}

export interface StatsKeyData {
    key: string;
    total: number;
    tick: number;
}

export class Stats {
    tickData: number[] = [];
    totalData: number[] = [];
    keys: Record<any, any>;

    constructor() {
        this.keys = new Map();
    }

    resetTick() {
        this.tickData.forEach((value, index) => this.tickData[index] = 0);
    }

    writeStats(key, value) {
        const index = this.registerKey(key);
        this.tickData[index] = value;
        this.totalData[index] = value;
    }

    addStats(key, value = 1) {
        const index = this.registerKey(key);
        this.tickData[index] += value;
        this.totalData[index] += value;
    }

    registerKey(key) {
        if (this.keys.has(key)) {
            return this.keys.get(key)
        }

        this.tickData.push(0);
        this.totalData.push(0);
        this.keys.set(key, this.tickData.length - 1);
        return this.tickData.length - 1;
    }

    getStats(key: string): StatsKeyData {
        if (!this.keys.has(key)) {
            return {
                key,
                total: 0,
                tick: 0
            }
        }

        const index = this.keys.get(key);

        return {
            key,
            total: this.totalData[index],
            tick: this.tickData[index]
        }
    }

    getTickData(): StatsItem[] {
        const result: StatsItem[] = [];

        this.keys.forEach((index, key) => {
            result.push({
                key,
                value: this.tickData[index]
            })
        })

        return result;
    }
}