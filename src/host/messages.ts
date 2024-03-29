export enum MessageType {
    MessageNone = 0,
    MessageInit = 1,
    MessageUserInput = 2,
    MessageEngineEvent = 3
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

export class MessageEngineEvent extends MessageEvent {
    type = MessageType.MessageEngineEvent;
    event;

    constructor(event) {
        super();
        this.event = event;
    }
}
