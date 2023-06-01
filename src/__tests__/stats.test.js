import {Stats} from "../render/stats";
import {stat} from "@babel/core/lib/gensync-utils/fs";

describe('Tests Stats', () => {
    it('Should create keys on first usage', () => {
        const stats = new Stats();
        stats.addStats('test', 1);
        expect(stats.getStats('test').tick).toBe(1)
    })

    it('Should return all stats on getTickData', () => {
        const stats = new Stats();
        stats.addStats('test', 1);
        stats.addStats('test2', 2);

        const data = stats.getTickData();
        expect(data[0].value).toBe(1);
        expect(data[0].key).toBe('test');
        expect(data[1].value).toBe(2);
        expect(data[1].key).toBe('test2');
    })
})