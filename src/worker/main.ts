import { Render } from "../render/index.js";
import {MessageType} from "../host/worker";

let render;

onmessage = function (event ) {
    switch (event.data.type) {
        case MessageType.MessageInit:
            render = new Render(event.data.canvas);
            render.start();
            break;
        case MessageType.MessageUserInput:
            if (render) {
                render.processUserInput(event.data.event);
            }
            break;
    }
}