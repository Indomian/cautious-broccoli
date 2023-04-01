import {SceneName} from "../scenes/baseScene";

export interface EngineEvent {}

export interface LoadSceneEngineEvent extends EngineEvent {
    scene: SceneName
}

export type AnyEngineEvent = LoadSceneEngineEvent;