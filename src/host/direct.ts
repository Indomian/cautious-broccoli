import {Render} from "../render";
import {UIEvent, UserInput} from "./input";
import {BaseEngine} from "../engine/baseEngine";

export class DirectApplication extends BaseEngine {
    render;
    userInput;

    constructor(canvas) {
        super();
        this.render = new Render(canvas);
        this.render.start();

        this.userInput = new UserInput(canvas);
        this.userInput.addHandler(this.sendUserInputEvent);
    }

    sendUserInputEvent = (event) => {
        this.render.processUserInput(event)
    }

    sendEngineEvent = (event) => {
        this.render.processEngineEvent(event);
    }
}