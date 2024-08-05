import * as P5 from "p5";
import {Vector} from "p5";

export class World {
    width: number;
    height: number;
    viewPortSize: Vector;
    viewPortPosition: Vector;
    viewPortDistance: number;

    constructor(p5: P5) {
        this.width = 1000000;
        this.height = 1000000;

        this.viewPortSize = new Vector(400, 400);
        this.viewPortPosition = new Vector(0, 0);

        this.viewPortDistance = 1;
    }

    moveViewPort(d: Vector): void;
    moveViewPort(dx: number, dy: number): void;
    moveViewPort(dxord: any, dy?: number): void{
        if (dy !== undefined) {
            this.viewPortPosition.add(dxord, dy);
        } else {
            this.viewPortPosition.add(dxord);
        }
    }

    centerViewPort(center: Vector): void;
    centerViewPort(x: number, y: number): void;
    centerViewPort(a: any, b?: any): void {
        let center;
        if (b !== undefined) {
            center = new Vector(a, b);
        } else {
            center = a;
        }

        this.viewPortPosition.set(
            center.copy().mult(-1).add(this.viewPortSize.copy().mult(0.5))
        );
    }

    moveViewPortDistance(d: number) {
        if (this.viewPortDistance + d < 0.0001) {
            d /= 10;
        }

        this.viewPortDistance += d;

        if (this.viewPortDistance < 0.0001) {
            this.viewPortDistance = 0.0001;
        }
        console.log(this.viewPortDistance);
    }
}