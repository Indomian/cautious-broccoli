import {Rect} from "../rect";
import {Vector} from "p5";

describe('Test Rect intersect', () => {
    it.each([
        [
            new Rect(
                new Vector(10, 10),
                new Vector(10, 10)
            ),
                new Rect(
                    new Vector(5, 5),
                    new Vector(5, 5)
            )
        ],
        [
            new Rect(
                new Vector(10, 10),
                new Vector(20, 20),
            ),
            new Rect(
                new Vector(0, 0),
                new Vector(5, 5),
            )
        ]
    ])('Should intersect', (rect1, rect2) => {
        expect(rect1.intersect(rect2)).toBeTruthy();
    })

    it.each([
        [
            new Rect(
                new Vector(10, 10),
                new Vector(10, 10)
            ),
            new Rect(
                new Vector(50, 50),
                new Vector(5, 5)
            )
        ]
    ])('Shouldnt intersect', (rect1, rect2) => {
        expect(rect1.intersect(rect2)).toBeFalsy();
    })
})