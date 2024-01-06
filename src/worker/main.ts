import { Render } from "../render/index";
import { MessageType } from "../host/messages";

let render: Render;

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
        case MessageType.MessageEngineEvent:
            if (render) {
                render.processEngineEvent(event.data.event);
            }
            break;
    }
}