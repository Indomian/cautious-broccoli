import {BaseRender} from "./baseRender";
import {Vec2} from "../vector/vec2";

export class Canvas2DRender extends BaseRender {
    private _context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        super();

        this._context = context;
    }

    private getCoord(x?: number | Vec2 , y?: number): [number, number] {
        let cx, cy;
        if (x === undefined) {
            cx = this._position.x;
            cy = this._position.y;
        } else if (x instanceof Vec2) {
            cx = x.x;
            cy = x.y;
        } else {
            cx = x;
            cy = y;
        }

        return [cx, cy];
    }

    circle(radius: number, x?: number | Vec2 , y?: number) {
        const [cx, cy] = this.getCoord(x, y);

        this._context.beginPath()
        this._context.arc(
            cx,
            cy,
            radius,
            0,
            2 * Math.PI
        )

        this._context.stroke();
    }

    fillCircle(radius: number, x?: number | Vec2, y?: number) {
        const [cx, cy] = this.getCoord(x, y);

        this._context.beginPath()
        this._context.arc(
            cx,
            cy,
            radius,
            0,
            2 * Math.PI
        )

        this._context.fill();
    }

    color() {
    }

    fillStyle(style: string) {
        this._context.fillStyle = style;
    }

    fillRect(x1: number, y1: number, x2: number, y2: number) {
        this._context.fillRect(x1, y1, x2 - x1, y2 - y1);
    }

    line(x: number | Vec2, y?: number | Vec2, x2?: number, y2?: number) {

        if (y instanceof Vec2) {
            [x, y] = this.getCoord(x);
            [x2, y2] = this.getCoord(y);
        } else {
            [x, y] = this.getCoord(x, y);
        }

        this._context.beginPath();
        this._context.moveTo(x, y);
        this._context.lineTo(x2, y2);
        this._context.stroke();
    }

    vector(position: Vec2, direction: Vec2) {
        this._context.beginPath();
        this._context.moveTo(position.x, position.y);
        this._context.lineTo(position.x + direction.x, position.y + direction.y);
        this._context.stroke();
    }

    rect(x: number, y: number, width: number, height: number) {
        this._context.strokeRect(x, y, width, height);
    }

    text(text: string, x?: number | Vec2 , y?: number) {
        const [cx, cy] = this.getCoord(x, y);

        this._context.fillStyle = "#ffffff";
        this._context.textAlign = "start";
        this._context.fillText(text, cx, cy);
    }

    moveTo() {
    }

    font(font: string) {
        this._context.font = font;
    }

    lineTo(x: number | Vec2, y?: number) {
        const [x2, y2] = this.getCoord(x, y);

        this._context.moveTo(this._position.x, this._position.y);
        this._context.lineTo(x2, y2);
    }

    strokeStyle(style: string) {
        this._context.strokeStyle = style;
    }

    lineWidth(width: number) {
        this._context.lineWidth = width;
    }

    polygon(worldPoints: Vec2[]) {
        this._context.beginPath(); // Start a new path

        let index = 0;
        this._context.moveTo(worldPoints[index].x, worldPoints[index].y);
        while(index < worldPoints.length - 1) {
            index++;
            this._context.lineTo(worldPoints[index].x, worldPoints[index].y);
        }
        this._context.lineTo(worldPoints[0].x, worldPoints[0].y);
        this._context.stroke();
    }
}