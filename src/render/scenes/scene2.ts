import {BaseScene} from "./baseScene";
import { Render} from "../index";
import {Circle} from "../items/circle";
import { CircleWithText } from "../items/circleWithText";
import {Vec2} from "../vector/vec2";
import {RenderableObject} from "../renderableObjects/object";
import {ImmovableBallsObject} from "../objects/immovableBall";
import { CircleConstrain } from "../constrains/circle";
import {ObjectsGenerator} from "../generators/objectsGenerator";
import {AnyUIEvent, UIMouseEvent} from "../../host/input";
import {BallsObject} from "../objects/ball";
import {index2color} from "../items/utils/index2color";

export class Scene2 extends BaseScene {
    _canMoveRedObject: boolean = false;
    timePassedSinceLastBallCreated: number = 0;
    ballIndex: number = 0;
    center: Vec2;
    radius: number;

    constructor(engine: Render) {
        super(engine)

        this.center = new Vec2(
            this.engine.canvas.width / 2,
            this.engine.canvas.height / 2
        );

        this.radius = Math.min(this.center.x, this.center.y);

        this.generator = new ObjectsGenerator(this.engine.solver);
        this.createActor();
        this.initConstrain();
    }

    createBall() {
        const baseBallVelocity = new Vec2(0, 0);
        const ballGeneratorPoint = this.actor.solverObject.currentPosition;
        const toCenter = ballGeneratorPoint.diff(this.center);
        const n = toCenter.ort;

        const ballVelocity = n.mul(-1);
        const obj = new RenderableObject<BallsObject, CircleWithText>(
            (new BallsObject(
                ballGeneratorPoint.diff(n.mul(40)),
                5
            )).setVelocity(ballVelocity),
            new CircleWithText(
                this.engine.context,
                Vec2.Zero(),
                7,
                index2color(this.ballIndex+200),
                '',
                '#000000'
            )
        )

        this.engine.addObject(obj);
        this.ballIndex++;
    }

    createActor() {
        this.actor = new RenderableObject<ImmovableBallsObject, Circle>(
            new ImmovableBallsObject(new Vec2(230, 50), 30),
            new Circle(this.engine.context, Vec2.Zero(), 30, '#ff0000')
        );
        this.engine.addObject(this.actor);
    }

    initConstrain() {
        this.engine.constrain = new CircleConstrain(
            this.center,
            this.radius
        )

        this.engine.items.push(
            new Circle(
                this.engine.context,
                this.center,
                this.radius,
                '#ffffff'
            )
        );
    }

    getActor() {
        return this.actor;
    }

    tick(timePassed: number) {
        if (this.canMoveRedObject) {
            this.timePassedSinceLastBallCreated += timePassed;

            if(this.timePassedSinceLastBallCreated > 0.05) {
                this.timePassedSinceLastBallCreated = 0;
                this.createBall();
            }
        }
    }

    processUserInput(event: AnyUIEvent) {
        const mouseEvent = event as UIMouseEvent;

        if (mouseEvent.leftButtonDown) {
            if (this.actor.solverObject.isPointInsideObject(
                new Vec2(
                    mouseEvent.screenX,
                    mouseEvent.screenY
                )
            )) {
                this.canMoveRedObject = true;
            }

            if (this.canMoveRedObject) {

            }
        } else {
            this.canMoveRedObject = false;
        }

        if (mouseEvent.screenX || mouseEvent.screenY) {
            this.actor.solverObject.moveTo(
                new Vec2(
                    mouseEvent.screenX,
                    mouseEvent.screenY
                )
            )
        }
    }

    set canMoveRedObject(can: boolean) {
        this._canMoveRedObject = can;
        if (can) {
            this.actor.renderItem.color = '#00ff00';
        } else {
            this.actor.renderItem.color = '#ff0000';
        }
    }

    get canMoveRedObject(): boolean {
        return this._canMoveRedObject;
    }
}