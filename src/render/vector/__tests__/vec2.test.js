import {Vec2, Vec2Line, Vec2Math} from "../vec2";

describe('Test Vec2Math', () => {
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

describe('Test vec2 perpendicular', () => {
    test('Should make perpendicular for horizontal', () => {
        const vec = new Vec2(1, 0);
        const p = vec.perpendicular;
        expect(p.equals(new Vec2(0, 1))).toBeTruthy()
    })

    test('Should make perpendicular for any', () => {
        const vec = new Vec2(1, 1);
        const p = vec.perpendicular;









        expect(p.equals(new Vec2(-0.7071067811865475, 0.7071067811865475))).toBeTruthy()
    })

    test('Normal should flip', () => {
        const vec = new Vec2(-1, 0);
        const p = vec.perpendicular;
        expect(p.equals(new Vec2(0, -1))).toBeTruthy()
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

