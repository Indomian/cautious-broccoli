import {Vec2} from "./vec2";

export class Vec2Rect {
    position: Vec2;
    size: Vec2;

    constructor(center: Vec2, size: Vec2) {
        this.position = center.copy();
        this.size = size.copy();
    }

    copy() {
        return new Vec2Rect(this.position, this.size);
    }

    get nw():Vec2Rect {
        const width = this.size.x / 2;
        const height = this.size.y / 2;
        return new Vec2Rect(
            new Vec2(this.position.x - width / 2, this.position.y - height / 2),
            new Vec2(width, height)
        );
    }

    get ne():Vec2Rect {
        const width = this.size.x / 2;
        const height = this.size.y / 2;
        return new Vec2Rect(
            new Vec2(this.position.x + width / 2, this.position.y - height / 2),
            new Vec2(width, height)
        );
    }

    get se():Vec2Rect {
        const width = this.size.x / 2;
        const height = this.size.y / 2;
        return new Vec2Rect(
            new Vec2(this.position.x + width / 2, this.position.y + height / 2),
            new Vec2(width, height)
        );
    }

    get sw():Vec2Rect {
        const width = this.size.x / 2;
        const height = this.size.y / 2;
        return new Vec2Rect(
            new Vec2(this.position.x - width / 2, this.position.y + height / 2),
            new Vec2(width, height)
        );
    }

    get left():number {
        return this.position.x - this.size.x / 2;
    }

    get right():number {
        return this.position.x + this.size.x / 2;
    }

    get top():number {
        return this.position.y - this.size.y / 2;
    }
    get bottom():number {
        return this.position.y + this.size.y / 2;
    }
}