import {Vec2} from "../vector/vec2";

export function createTriangle(size: number): Vec2[] {
    const height = size * Math.sqrt(3) / 2;
    const center = new Vec2(
        size / 2,
        size / 2 * (1 / Math.sqrt(3))
    )
    return [
        new Vec2(-center.x, -center.y),
        new Vec2(0, height - center.y),
        new Vec2(center.x, -center.y)
    ]
}
