import {Render} from "../render";
import {UIEvent, UserInput} from "./input";

export class DirectApplication {
    render;
    userInput;

    constructor(canvas) {
        this.render = new Render(canvas);
        this.render.start();

        this.userInput = new UserInput(canvas);
        this.userInput.addHandler(this.sendUserInputEvent);
    }

    sendUserInputEvent = (event) => {
        this.render.processUserInput(event)
    }
}