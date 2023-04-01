import {UserInput, UIEvent, AnyUIEvent} from "./input";
import {MessageUserInput, MessageInit, MessageEngineEvent} from "./messages";
import {createWorker} from "./workerWorkaround.js";
import {BaseEngine} from "../engine/baseEngine";
import {AnyEngineEvent} from "../render/events/engine";

export class WorkerApplication extends BaseEngine {
    worker;
    userInput;

    constructor(canvas) {
        super();
        this.worker = createWorker();
        const offscreen = canvas.transferControlToOffscreen();

        this.worker.postMessage(
            new MessageInit(offscreen),
            [offscreen]
        );

        this.userInput = new UserInput(canvas);
        this.userInput.addHandler(this.sendUserInputEvent);
    }

    sendUserInputEvent = (event: AnyUIEvent) => {
        this.worker.postMessage(
            new MessageUserInput(event)
        )
    }

    sendEngineEvent = (event: AnyEngineEvent) => {
        this.worker.postMessage(
            new MessageEngineEvent(event)
        )
    }
}