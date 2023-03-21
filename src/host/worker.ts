import {UserInput, UIEvent} from "./input";
import {MessageUserInput, MessageInit} from "./messages";
import {createWorker} from "./workerWorkaround.js";

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