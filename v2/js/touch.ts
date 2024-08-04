import * as P5 from "p5";
import {Vector} from "p5";

type p5touch = {
    id: number,
    x: number,
    y: number,
    winX: number,
    winY: number
}

type Range = number;

export function inRange(value: number, range: Range): boolean {
    return value > -range && value < range;
}

export function notInRange(value: number, range: Range): boolean {
    return !inRange(value, range);
}

const TOUCH_DISTANCE: Range = 1;

export class Touch {
    id: number;
    touchX: number;
    touchY: number;
    prevTouchX: number;
    prevTouchY: number;
    startTouch: Vector;

    constructor(touch: p5touch) {
        this.id = touch.id;
        this.touchX = touch.x;
        this.touchY = touch.y;
        this.prevTouchX = touch.x;
        this.prevTouchY = touch.y;
        this.startTouch = new Vector(touch.x, touch.y);
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

    get startPoint(): Vector {
        return this.startTouch;
    }

    get distance(): number {
        return Vector.dist(this.point, this.prevPoint);
    }

    get fullDistance(): number {
        return Vector.dist(this.point, this.startPoint);
    }

    get moved():boolean {
        return notInRange(this.distance, TOUCH_DISTANCE);
    }

    get movedSinceStart(): boolean {
        return notInRange(this.fullDistance, TOUCH_DISTANCE);
    }
}

interface TouchZoom {
    delta: number;
}

export type TouchZoomCallback = (event: TouchZoom) => boolean;

function nopTouchZoomCallback(event:TouchZoom) {
    return true;
}

export class Touches {
    touches: Map<number, Touch>;
    p5: P5;

    handleTouchClick: Function;
    handleTouchMove: Function;
    handleTouchZoom: TouchZoomCallback = nopTouchZoomCallback;

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
            const touches = [...this.touches.values()];
            const touch: Touch = touches.pop();
            if (!touch.movedSinceStart) {
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
        } else if (this.touches.size === 2) {
            const touches = [...this.touches.values()];
            if (touches.some(touch => touch.movedSinceStart)) {
                const startDistance = Vector.dist(touches[0].prevPoint, touches[1].prevPoint);
                const endDistance = Vector.dist(touches[0].point, touches[1].point);
                const distance = endDistance - startDistance;
                if (notInRange(distance, TOUCH_DISTANCE)) {
                    this.handleTouchZoom({
                        delta: distance
                    });
                }
            }
        }

    }

    processTouches = () => {

    }
}