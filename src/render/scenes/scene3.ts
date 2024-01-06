import {BaseScene} from "./baseScene";
import { Render} from "../index";
import {Circle} from "../items/circle";
import { CircleWithText } from "../items/circleWithText";
import {Vec2} from "../vector/vec2";
import {RenderableObject} from "../renderableObjects/object";
import { CircleConstrain } from "../constrains/circle";
import {ObjectsGenerator} from "../generators/objectsGenerator";
import {AnyUIEvent, UIMouseEvent} from "../../host/input";
import {BallsObject} from "../objects/ball";
import {index2color} from "../items/utils/index2color";
import {createTriangle} from "../primitives/triangle";
import {ImmovablePolygon} from "../objects/ImmovablePolygon";
import {Polygon} from "../items/polygon";
import {PolygonRainbow} from "../items/polygonRainbow";

type Scene3Actor = RenderableObject<ImmovablePolygon, Polygon>;

export class Scene3 extends BaseScene {
    _createBalls: boolean = false;
    timePassedSinceLastBallCreated: number = 0;
    ballIndex: number = 0;
    center: Vec2;
    radius: number;
    ballsViews: CircleWithText[] = [];

    actor: Scene3Actor;

    nextTickActorPosition: Vec2;

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

        const radius = 20 + Math.random() * 30;

        const ballView =  new CircleWithText(
            this.engine.context,
            Vec2.Zero(),
            radius,
            index2color(this.ballIndex+200),
            '',
            '#000000'
        );

        this.ballsViews.push(ballView);

        const obj = new RenderableObject<BallsObject, CircleWithText>(
            (new BallsObject(
                ballGeneratorPoint.diff(n.mul(40)),
                radius
            )).setVelocity(ballVelocity),
            ballView
        )

        this.engine.addObject(obj);
        this.ballIndex++;
    }

    createActor() {
        const trianglePoints = createTriangle(60);

        this.nextTickActorPosition = this.center;

        const polygonObject = new ImmovablePolygon(
            this.center,
            trianglePoints
        )

        const polygonView = new PolygonRainbow(
            this.engine.context,
            Vec2.Zero(),
            trianglePoints,
            '#ff0000'
        )

        this.actor = new RenderableObject<ImmovablePolygon, Polygon>(
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
                '#555555'
            )
        );
    }

    getActor() {
        return this.actor;
    }

    tick(timePassed: number) {
        this.actor.solverObject.moveTo(
            this.nextTickActorPosition
        );

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
            if (this.actor.solverObject.isPointInsideObject(
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
            this.nextTickActorPosition = new Vec2(
                mouseEvent.screenX,
                mouseEvent.screenY
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