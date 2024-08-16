import {MINIMUM_ACC, Point} from "../objects";
import {Vector} from "p5";

describe('Test Point object behaviour and calculation', () => {
    it('Should be inactive if no forces applied', () => {
        const position = new Vector();
        const point = new Point(position, 10);
        for (let i = 0; i < 10; i++) {
            point.update(1 / 10);
            expect(point.velocity.mag()).toBeLessThanOrEqual(MINIMUM_ACC);
        }
    });

    it.each([
        [1, 1],
        [2, 2],
        [3, 3]
    ])('Should calculate next position correctly', (seconds, positionX) => {
        const position = new Vector();
        const point = new Point(position, 10);
        point.previousPosition.x = -1;
        point.update(seconds);
        expect(point.position.x).toBe(positionX);
    })

    it.each([
        [1, 1],
        [2, 2],
        [3, 3]
    ])('Should calculate next position correctly in ticks', (ticks, positionX) => {
        const position = new Vector();
        const point = new Point(position, 10);
        point.previousPosition.x = -1;
        for (let i = 0; i < ticks; i++) {
            point.update(1);
        }
        expect(point.position.x).toBe(positionX);
    });

    it.each([
        [1, 1],
        [2, 1],
        [3, 1]
    ])('Should calculate next position correctly in ticks less then 1 second', (ticks, positionX) => {
        const position = new Vector();
        const point = new Point(position, 10);
        point.previousPosition.x = -1;
        for (let i = 0; i < ticks; i++) {
            point.update(1 / ticks);
        }
        expect(point.position.x).toBe(positionX);
    });

    it.each([
        [[1], 1],
        [[0.5, 0.5, 1], 2],
        [[0.33, 1, 0.67, 0.25, 0.75], 3]
    ])('Should calculate next position correctly in unstable ticks', (ticks, positionX) => {
        const position = new Vector();
        const point = new Point(position, 10);
        point.previousPosition.x = -1;
        ticks.forEach(duration => point.update(duration));
        expect(point.position.x).toBe(positionX);
    })

    it.each([
        [1, 0.5],
        [2, 0.5],
        [3, 0.5],
        [4, 0.5],
        [10, 0.5]
    ])('Should gain speed under influence of the force', (
        ticks,
        resultY
    ) => {
        const position = new Vector();
        const point = new Point(position, 10);
        const force = new Vector(0, 1);
        for (let i = 0; i < ticks; i++) {
            point.applyForce(force);
            point.update(1 / ticks);
        }

        expect(point.position.x).toBe(0);
        expect(point.position.y).toBeCloseTo(resultY);
    });
})