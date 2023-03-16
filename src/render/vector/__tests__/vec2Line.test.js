import { Vec2 } from "../vec2";
import { Vec2Line } from "../vec2Line";

describe('Test point projections', () => {
    test('It should work', () => {
        const s3 = Math.sqrt(3);

        const line = new Vec2Line(
            new Vec2(0, 0),
            new Vec2(10, 0)
        );

        const point = new Vec2(
            s3, 1
        );

        const expectedPoint = new Vec2(
            s3, 0
        )

        expect(line.getPointProjection(point).equals(expectedPoint)).toBeTruthy();

    })
})

describe('Test Vec2Line.inBetween', () => {
    test('Simple case', () => {
        const line = new Vec2Line(
            new Vec2(0, 0),
            new Vec2(10, 10)
        );

        const point = new Vec2(
            5,
            5
        );

        expect(line.inBetween(point)).toBeTruthy();
    })
})