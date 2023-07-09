import {Vec2} from "../vector/vec2";

export abstract class BaseRender {
    protected _position: Vec2;

    protected constructor() {
        this._position = Vec2.Zero();
    }

    moveTo(x: number | Vec2, y?: number) {
        this._position.moveTo(x, y);
    }

    abstract circle(radius: number, x?: number | Vec2 , y?: number);
    abstract fillCircle(radius: number, x?: number | Vec2 , y?: number);
    abstract rect(x: number, y: number, width: number, height: number);
    abstract fillRect(x1: number, y1: number, x2: number, y2: number);
    abstract lineTo(x: number | Vec2, y?: number);
    abstract line(x: number | Vec2, y?: number | Vec2, x2?: number, y2?: number);
    abstract polygon(worldPoints: Vec2[]);
    abstract vector(position: Vec2, direction: Vec2);
    abstract color();
    abstract fillStyle(style: string);
    abstract strokeStyle(style: string);
    abstract lineWidth(width: number);
    abstract text(text: string, x?: number | Vec2 , y?: number);
    abstract font(font: string);
}