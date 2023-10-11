import {Vec2} from "../vector/vec2";
import {Vec2Line} from "../vector/vec2Line";
import {Vec2Math} from "../vector/vec2Math";

const p = [
    new Vec2(0, 0),
    new Vec2(70, 380),
    new Vec2(270, 380),
    new Vec2(340, 0),
    new Vec2(360, 0),
    new Vec2(280, 400),
    new Vec2(60, 400),
    new Vec2(-20, 0)
];



export function createMilkshake(size: number, position: Vec2): Vec2Line[] {
    const center = position.diff(new Vec2(360/2 * size, 400/2 * size));
    const milkShakeLines = [];

    for (let i=0; i < p.length - 1; i++) {
        milkShakeLines.push(new Vec2Line(p[i].mul(size).sum(center), p[i+1].mul(size).sum(center)));
    }

    milkShakeLines.push(new Vec2Line(p[p.length - 1].mul(size).sum(center), p[0].mul(size).sum(center)));
    return milkShakeLines;
}