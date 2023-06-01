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
import {createTriangle} from "../primitives/triangle";
import {ImmovablePolygon} from "../objects/ImmovablePolygon";
import {Polygon} from "../items/polygon";

export class Scene3 extends BaseScene {
    _createBalls: boolean = false;
    timePassedSinceLastBallCreated: number = 0;
    ballIndex: number = 0;
    center: Vec2;
    radius: number;
    ballsViews: CircleWithText[] = [];

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
        const ballGeneratorPoint = this.actor.ballsObject.currentPosition;
        const toCenter = ballGeneratorPoint.diff(this.center);
        const n = toCenter.ort;

        const ballVelocity = n.mul(-1);

        const ballView =  new CircleWithText(
            this.engine.context,
            Vec2.Zero(),
            7,
            index2color(this.ballIndex+200),
            '',
            '#000000'
        );

        this.ballsViews.push(ballView);

        const obj = new RenderableObject(
            (new BallsObject(
                ballGeneratorPoint.diff(n.mul(40)),
                5
            )).setVelocity(ballVelocity),
            ballView
        )

        this.engine.addObject(obj);
        this.ballIndex++;
    }

    createActor() {
        const trianglePoints = createTriangle(60);

        const polygonObject = new ImmovablePolygon(
            this.center,
            trianglePoints
        )

        const polygonView = new Polygon(
            this.engine.context,
            Vec2.Zero(),
            polygonObject.lines,
            '#ff0000'
        )

        this.actor = new RenderableObject(
            polygonObject,
            polygonView
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
        if (this.createBalls) {
            this.timePassedSinceLastBallCreated += timePassed;

            if(this.timePassedSinceLastBallCreated > 0.05) {
                this.timePassedSinceLastBallCreated = 0;
                this.createBall();
            }
        }

        this.ballsViews.forEach((ballView: CircleWithText) => {
            ballView.color = index2color(ballView.position.y)
        });
    }

    processUserInput(event: AnyUIEvent) {
        const mouseEvent = event as UIMouseEvent;

        if (mouseEvent.leftButtonDown) {
            if (this.actor.ballsObject.isPointInsideObject(
                new Vec2(
                    mouseEvent.screenX,
                    mouseEvent.screenY
                )
            )) {
                this.createBalls = true;
            }

        } else {
            this.createBalls = false;
        }

        if (mouseEvent.screenX || mouseEvent.screenY) {
            this.actor.ballsObject.moveTo(
                new Vec2(
                    mouseEvent.screenX,
                    mouseEvent.screenY
                )
            )
        }
    }

    set createBalls(can: boolean) {
        this._createBalls = can;
        if (can) {
            this.actor.renderItem.color = '#00ff00';
        } else {
            this.actor.renderItem.color = '#ff0000';
        }
    }

    get createBalls(): boolean {
        return this._createBalls;
    }
}