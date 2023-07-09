import {Vec2Rect} from "../vec2Rect";
import {Vec2} from "../vec2";

describe('Test vec2Rect intersect', () => {
    it.each([
        [
            new Vec2Rect(
                new Vec2(10, 10),
                new Vec2(10, 10)
            ),
                new Vec2Rect(
                    new Vec2(5, 5),
                    new Vec2(5, 5)
            )
        ]
    ])('Should intersect', (rect1, rect2) => {
        expect(rect1.intersect(rect2)).toBeTruthy();
    })

    it.each([
        [
            new Vec2Rect(
                new Vec2(10, 10),
                new Vec2(10, 10)
            ),
            new Vec2Rect(
                new Vec2(50, 50),
                new Vec2(5, 5)
            )
        ]
    ])('Shouldnt intersect', (rect1, rect2) => {
        expect(rect1.intersect(rect2)).toBeFalsy();
    })
})