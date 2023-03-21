import {UserInput, UIEvent} from "./input";
import {createWorker} from "./workerWorkaround.js";

export enum MessageType {
    MessageNone = 0,
    MessageInit = 1,
    MessageUserInput = 2
}

export class MessageEvent {
    type = MessageType.MessageNone;
}

export class MessageInit extends MessageEvent {
    type = MessageType.MessageInit;
    canvas;

    constructor(canvas) {
        super();
        this.canvas = canvas;
    }
}

export class MessageUserInput extends MessageEvent {
    type = MessageType.MessageUserInput;
    event;

    constructor(event) {
        super();
        this.event = event;
    }
}

export class WorkerApplication {
    worker;
    userInput;

    constructor(canvas) {
        this.worker = createWorker();
        const offscreen = canvas.transferControlToOffscreen();

        this.worker.postMessage(
            new MessageInit(offscreen),
            [offscreen]
        );

        this.userInput = new UserInput(canvas);
        this.userInput.addHandler(this.sendUserInputEvent);
    }

    sendUserInputEvent = (event: UIEvent) => {
        this.worker.postMessage(
            new MessageUserInput(event)
        )
    }

    initUserInput() {

    }
}