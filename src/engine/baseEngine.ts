import {AnyUIEvent} from "../host/input";
import {SceneName} from "../render/scenes/baseScene";
import {AnyEngineEvent, LoadSceneEngineEvent} from "../render/events/engine";

type BaseEngineUIEventHandlerType = (event: AnyUIEvent) => void ;
type BaseEngineEngineEventHandlerType = (event: AnyEngineEvent) => void;

export abstract class BaseEngine {
    sendUserInputEvent: BaseEngineUIEventHandlerType;
    sendEngineEvent: BaseEngineEngineEventHandlerType;

    loadScene(sceneName: SceneName) {
        const event: LoadSceneEngineEvent = {
            scene: sceneName
        }
        this.sendEngineEvent(event);
    }
}