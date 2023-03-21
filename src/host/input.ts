export interface UIEvent {}

export interface UIMouseEvent {
    screenX: number,
    screenY: number,
    dx: number,
    dy: number,
    leftButtonDown: boolean
}

export type UserInputHandler = (event: UIEvent) => void;

export class UserInput {
    _canvas: HTMLCanvasElement;
    _handlers: Set<UserInputHandler>;

    _oldX: number;
    _oldY: number;

    _leftButtonDown: boolean;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._handlers = new Set();

        this._leftButtonDown = false;

        this.addHandlers();
    }

    private addHandlers() {
        this._canvas.addEventListener('mouseenter', this.mouseEnter);
        this._canvas.addEventListener('mouseleave', this.mouseLeave);
        this._canvas.addEventListener('mousemove', this.mouseMove);
        this._canvas.addEventListener('mousedown', this.mouseDown);
        this._canvas.addEventListener('mouseup', this.mouseUp);
        this._canvas.addEventListener('click', this.click);
    }

    private removeHandlers() {

    }

    private processEvent(event) {
        this._handlers.forEach((callback: UserInputHandler) => {
            callback(event);
        })
    }

    addHandler(callback: UserInputHandler) {
        this._handlers.add(callback);
    }

    removeHandler(callback: UserInputHandler) {
        if (this._handlers.has(callback)) {
            this._handlers.delete(callback);
        }
    }

    createMouseEvent(browserEvent: MouseEvent): UIMouseEvent {
        return {
            screenX: browserEvent.offsetX,
            screenY: browserEvent.offsetY,
            dx: -this._oldX + browserEvent.offsetX,
            dy: -this._oldY + browserEvent.offsetY,
            leftButtonDown: this._leftButtonDown
        }
    }

    mouseEnter = (browserEvent: MouseEvent) => {
        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);

        this._oldX = event.screenX;
        this._oldY = event.screenY;
    }

    mouseLeave = (browserEvent: MouseEvent) => {
        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);

        this._oldX = event.screenX;
        this._oldY = event.screenY;
    }

    mouseMove = (browserEvent: MouseEvent) => {
        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);

        this._oldX = event.screenX;
        this._oldY = event.screenY;
    }

    mouseDown = (browserEvent: MouseEvent) => {
        this._leftButtonDown = true;

        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);

        this._oldX = event.screenX;
        this._oldY = event.screenY;
    }

    mouseUp = (browserEvent: MouseEvent) => {
        this._leftButtonDown = false;

        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);

        this._oldX = event.screenX;
        this._oldY = event.screenY;
    }

    click = (browserEvent: MouseEvent) => {
        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);

        this._oldX = event.screenX;
        this._oldY = event.screenY;
    }
}