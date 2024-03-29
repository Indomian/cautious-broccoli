import { Vec2 } from "../vec2";
import { Vec2Line } from "../vec2Line";
import { Vec2Math } from "../vec2Math";

describe('Test Vec2Math.intersect', () => {
    test.each([
        [
            Vec2Line.Horizontal(0),
            Vec2Line.Vertical(5),
            new Vec2(5, 0)
        ],
        [
            Vec2Line.Vertical(3),
            Vec2Line.Horizontal(4),
            new Vec2(3, 4)
        ],
        [
            new Vec2Line(
                Vec2.Zero(),
                new Vec2(1, 1)
            ),
            new Vec2Line(
                new Vec2(0, 1),
                new Vec2(1, 0)
            ),
            new Vec2(0.5, 0.5)
        ],
        [
            new Vec2Line(
                Vec2.Zero(),
                new Vec2(-1, -1)
            ),
            new Vec2Line(
                new Vec2(0, 1),
                new Vec2(1, 0)
            ),
            new Vec2(0.5, 0.5)
        ]
    ])('Two lines should intersect', (
        line1,
        line2,
        intersectionPoint
    ) => {
        const intersection = Vec2Math.intersect(line1, line2);

        expect(intersectionPoint.equals(intersection)).toBeTruthy();
    });

    test.each([
        [
            Vec2Line.Horizontal(0),
            Vec2Line.Vertical(5),
            true
        ],
        [
            Vec2Line.Vertical(3),
            Vec2Line.Horizontal(4),
            true
        ],
        [
            new Vec2Line(
                Vec2.Zero(),
                new Vec2(1, 1)
            ),
            new Vec2Line(
                new Vec2(0, 1),
                new Vec2(1, 0)
            ),
            true
        ],
        [
            new Vec2Line(
                Vec2.Zero(),
                new Vec2(-1, -1)
            ),
            new Vec2Line(
                new Vec2(0, 1),
                new Vec2(1, 0)
            ),
            false
        ]
    ])('Intersection point should be inside line', (
        line1,
        line2,
        isIntersectionInsideLine
    ) => {
        const intersection = Vec2Math.intersect(line1, line2);

        const result = line1.inBetween(intersection) && line2.inBetween(intersection);

        expect(result).toEqual(isIntersectionInsideLine);
    })
})

describe('Test mirror', () => {
    test('It should mirror vectors against Y', () => {
        const line = Vec2Line.Vertical(0);
        const vec = new Vec2(1, 1);
        const result = new Vec2 (-1 , 1);
        const mirrored = Vec2Math.mirror(vec, line);
        expect(result.equals(mirrored)).toBeTruthy();
    })

    test('It should mirror vectors against X', () => {
        const line = Vec2Line.Horizontal(0);
        const vec = new Vec2(1, 1);
        const result = new Vec2 (1 , -1);
        const mirrored = Vec2Math.mirror(vec, line);
        expect(result.equals(mirrored)).toBeTruthy();
    })

    test('It should mirror against any', () => {
        const line = new Vec2Line(
            Vec2.Zero(),
            new Vec2(1, 1)
        );

        const vec = Vec2.Vertical();
        const expected = Vec2.Horizontal();

        const mirrored = Vec2Math.mirror(vec, line);
        expect(expected.equals(mirrored)).toBeTruthy();
    })
})