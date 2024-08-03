import * as P5 from "p5";
import {Vector} from "p5";

type p5touch = {
    id: number,
    x: number,
    y: number,
    winX: number,
    winY: number
}

const TOUCH_DISTANCE = 1;

export class Touch {
    id: number;
    touchX: number;
    touchY: number;
    prevTouchX: number;
    prevTouchY: number;

    constructor(touch: p5touch) {
        this.id = touch.id;
        this.touchX = touch.x;
        this.touchY = touch.y;
        this.prevTouchX = touch.x;
        this.prevTouchY = touch.y;
    }

    update(touch: p5touch) {
        this.prevTouchX = this.touchX;
        this.prevTouchY = this.touchY;
        this.touchX = touch.x;
        this.touchY = touch.y;
    }

    get point(): Vector {
        return new Vector(this.touchX, this.touchY);
    }

    get prevPoint(): Vector {
        return new Vector(this.prevTouchX, this.prevTouchY);
    }

    get distance(): number {
        return Vector.dist(this.point, this.prevPoint);
    }

    get moved():boolean {
        return this.distance > TOUCH_DISTANCE;
    }
}

export class Touches {
    touches: Map<number, Touch>;
    p5: P5;

    handleTouchClick: Function;
    handleTouchMove: Function;

    constructor(p5: P5) {
        this.p5 = p5;
        this.touches = new Map<number, Touch>();

        this.p5.touchStarted = this.touchStarted;
        this.p5.touchEnded = this.touchEnded;
        this.p5.touchMoved = this.touchMoved;
    }

    updateTouches() {
        this.p5.touches.forEach(touch => {
            if (this.touches.has(touch.id)) {
                this.touches.get(touch.id).update(touch);
            } else {
                this.touches.set(touch.id, new Touch(touch));
            }
        });
    }

    touchStarted = () => {
        this.updateTouches();
    }

    touchEnded = (event) => {
        this.updateTouches();
        if (this.touches.size === 1) {
            const touch: Touch = this.touches.values().next();
            if (touch.moved) {
                this.handleTouchClick(event, touch.point);
            }
        }

        this.touches.clear();
    }

    touchMoved = () => {
        this.updateTouches();
        if (this.touches.size === 1) {
            const touches = [...this.touches.values()];
            const touch: Touch = touches.pop();
            if (touch.moved) {
                this.handleTouchMove(touch);
            }
        }
    }

    processTouches = () => {

    }
}