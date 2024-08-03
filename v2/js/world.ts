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

    moveViewPort(d: Vector);
    moveViewPort(dx: number, dy: number);
    moveViewPort(dxord: any, dy?: number){
        if (dy !== undefined) {
            this.viewPortPosition.add(dxord, dy);
        } else {
            this.viewPortDistance.add(dxord);
        }
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