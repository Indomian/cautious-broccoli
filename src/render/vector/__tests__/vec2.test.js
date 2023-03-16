import {Vec2} from "../vec2";

describe('Test vec2.perpendicular', () => {
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


