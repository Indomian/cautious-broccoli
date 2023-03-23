export interface UIEvent {}

export interface UIMouseEvent {
    screenX: number,
    screenY: number,
    dx: number,
    dy: number,
    leftButtonDown: boolean
}

export interface UIKeyboardEvent {
    keyPressed: string
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

        // Touch events
        this._canvas.addEventListener('touchstart', this.touchStart, { passive: false });
        this._canvas.addEventListener('touchmove', this.touchMove, { passive: false });
        this._canvas.addEventListener('touchcancel', this.touchCancel, { passive: false });
        this._canvas.addEventListener('touchend', this.touchEnd, { passive: false });

        // Keyboard events
        document.addEventListener('keypress', this.keyPress);
    }

    private removeHandlers() {
        document.removeEventListener('keypress', this.keyPress);
    }

    private processEvent(event) {
        this._handlers.forEach((callback: UserInputHandler) => {
            callback(event);
        })

        this._oldX = event.screenX;
        this._oldY = event.screenY;
    }

    addHandler(callback: UserInputHandler) {
        this._handlers.add(callback);
    }

    removeHandler(callback: UserInputHandler) {
        if (this._handlers.has(callback)) {
            this._handlers.delete(callback);
        }
    }

    keyPress = (browserEvent: KeyboardEvent) => {
        const event = {
            keyPressed: browserEvent.key
        }
        this.processEvent(event)
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
    }

    mouseLeave = (browserEvent: MouseEvent) => {
        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);
    }

    mouseMove = (browserEvent: MouseEvent) => {
        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);
    }

    mouseDown = (browserEvent: MouseEvent) => {
        this._leftButtonDown = true;

        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);
    }

    mouseUp = (browserEvent: MouseEvent) => {
        this._leftButtonDown = false;

        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);
    }

    click = (browserEvent: MouseEvent) => {
        const event = this.createMouseEvent(browserEvent);
        this.processEvent(event);
    }

    createTouchEvent(browserEvent: TouchEvent): UIMouseEvent | null {
        const touch = browserEvent.touches.item(0)

        return {
            screenX: touch.pageX,
            screenY: touch.pageY,
            dx: -this._oldX + touch.pageX,
            dy: -this._oldY + touch.pageY,
            leftButtonDown: this._leftButtonDown
        }
    }

    createTouchEndEvent(): UIMouseEvent {
        return {
            screenX: this._oldX,
            screenY: this._oldY,
            dx: 0,
            dy: 0,
            leftButtonDown: this._leftButtonDown
        }
    }

    touchStart = (browserEvent: TouchEvent) => {
        browserEvent.preventDefault();

        if (browserEvent.touches.length === 0) {
            return;
        }

        this._leftButtonDown = true;

        const touch = browserEvent.touches.item(0)

        const event = {
            screenX: touch.pageX,
            screenY: touch.pageY,
            dx: 0,
            dy: 0,
            leftButtonDown: this._leftButtonDown
        }

        this.processEvent(event);
    }

    touchMove = (browserEvent: TouchEvent) => {
        browserEvent.preventDefault();

        const event = this.createTouchEvent(browserEvent);
        if (event) {
            this.processEvent(event);
        }
    }

    touchEnd = (browserEvent: TouchEvent) => {
        browserEvent.preventDefault();

        this._leftButtonDown = false;
        const event = this.createTouchEndEvent();
        if (event) {
            this.processEvent(event);
        }
    }

    touchCancel = (browserEvent: TouchEvent) => {
        browserEvent.preventDefault();
        
        this._leftButtonDown = false;
        const event = this.createTouchEndEvent();
        if (event) {
            this.processEvent(event);
        }
    }
}