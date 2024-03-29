import {BaseScene} from "./baseScene";
import {CombineGenerator} from "../generators/combineGenerator";
import { TotalObjectsGenerator } from "../generators/totalObjectsGenerator";
import { Render} from "../index";
import {Circle} from "../items/circle";
import {Vec2} from "../vector/vec2";
import {Vec2Math} from "../vector/vec2Math";
import {BallsObject} from "../objects/ball";
import {RenderableObject} from "../renderableObjects/object";
import {ImmovableBallsObject} from "../objects/immovableBall";
import {ImmovableLineRenderableObject} from "../renderableObjects/immovableLine";
import {ImmovableLineObject} from "../objects/immovableLine";
import {Line} from "../items/line";
import {CircleWithText} from "../items/circleWithText";
import { index2color } from "../items/utils/index2color";
import { ViewportConstrain } from "../constrains/viewport";
import {AnyUIEvent, UIMouseEvent} from "../../host/input";
import {createMilkshake} from "../primitives/milkshake";
import {Vec2Line} from "../vector/vec2Line";

const ballsColors = {
    57: '#ffffff',
    78: '#ffffff',
    71: '#ffffff',
    86: '#ffffff',
    200: '#ffffff',
    202: '#ffffff',
    218: '#ffffff',
}

export class Scene1 extends BaseScene {
    canMoveRedObject: boolean = false;

    constructor(engine: Render) {
        super(engine)

        const canvasCenter = new Vec2(
            this.engine.canvas.width / 2,
            this.engine.canvas.height / 2
        );

        this.generator =
            this.createBallsGenerator(
                canvasCenter,
                new Vec2(
                    300, 300
                ),
                new Vec2(2, -2)
            );


        this.createBottomBouncyLine();
        this.createMilkShake(canvasCenter);
        this.createActor();
        this.initConstrain();
    }

    createBallsGenerator(canvasCenter, pointDelta, baseBallVelocity) {
        const ballGeneratorPoint = canvasCenter.diff(pointDelta);
        const ballVelocity = baseBallVelocity.mul(1/this.engine.solver.subSteps);

        return new TotalObjectsGenerator(
            this.engine.solver,
            1000,
            7,
            (index) => {
                const obj = new RenderableObject<BallsObject, CircleWithText>(
                    (new BallsObject(
                        ballGeneratorPoint,
                        5
                    )).setVelocity(ballVelocity),
                    new CircleWithText(
                        this.engine.context,
                        Vec2.Zero(),
                        5,
                        index2color(index+200),
                        '',
                        '#000000'
                    )
                )

                const obj2 = new RenderableObject<BallsObject, CircleWithText>(
                    (new BallsObject(
                        ballGeneratorPoint.sum(
                            Vec2.Down(20)
                        ),
                        5
                    )).setVelocity(ballVelocity),
                    new CircleWithText(
                        this.engine.context,
                        Vec2.Zero(),
                        5,
                        index2color(index+100),
                        '',
                        '#000000'
                    )
                )

                const obj3 = new RenderableObject<BallsObject, CircleWithText>(
                    (new BallsObject(
                        ballGeneratorPoint.sum(
                            Vec2.Down(-20)
                        ),
                        5
                    )).setVelocity(ballVelocity),
                    new CircleWithText(
                        this.engine.context,
                        Vec2.Zero(),
                        5,
                        index2color(index),
                        '',
                        '#000000'
                    )
                )

                const obj4 = new RenderableObject<BallsObject, CircleWithText>(
                    (new BallsObject(
                        ballGeneratorPoint.sum(
                            Vec2.Right(-40)
                        ),
                        5
                    )).setVelocity(ballVelocity),
                    new CircleWithText(
                        this.engine.context,
                        Vec2.Zero(),
                        5,
                        index2color(index-100),
                        '',
                        '#000000'
                    )
                )

                return [obj,obj2, obj3, obj4];
            }
        )
    }

    createBottomBouncyLine() {
        // Bottom bouncy line
        const bottomLine = new ImmovableLineObject(
            new Vec2(
                0, this.engine.canvas.height - 10
            ),
            new Vec2(
                this.engine.canvas.width, 0
            )
        )

        bottomLine.bounceValue = 1.5;

        this.engine.addObject(
            new ImmovableLineRenderableObject(
                bottomLine,
                new Line(
                    this.engine.context,
                    Vec2.Zero(),
                    Vec2.Zero(),
                    '#ff0000'
                )
            )
        )
    }

    createMilkShake(canvasCenter) {
        createMilkshake(1, canvasCenter).forEach(line => {
            this.engine.addObject(new ImmovableLineRenderableObject(
                new ImmovableLineObject(line),
                new Line(this.engine.context, Vec2.Zero(), Vec2.Zero(), '#ffffff')
            ))
        });

        createMilkshake(0.5, canvasCenter).forEach(line => {
            this.engine.addObject(new ImmovableLineRenderableObject(
                new ImmovableLineObject(line),
                new Line(this.engine.context, Vec2.Zero(), Vec2.Zero(), '#0000ff')
            ))
        });
    }

    initConstrain() {
        this.engine.constrain = new ViewportConstrain(this.engine.canvas.width, this.engine.canvas.height)
    }

    createActor() {
        this.actor = new RenderableObject<ImmovableBallsObject, Circle>(
            new ImmovableBallsObject(new Vec2(230, 50), 30),
            new Circle(this.engine.context, Vec2.Zero(), 30, '#ff0000')
        );
        this.engine.addObject(this.actor);
    }

    getActor() {
        return this.actor;
    }

    tick(timePassed: number) {
        this.engine.stats.addStats('Time passed', timePassed)

        if (timePassed > 0.017) {
            return;
        }
        const newBalls = this.generator.getNextObjects(timePassed);
        if (newBalls) {
            newBalls.forEach(ball => this.engine.addObject(ball));
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
                this.actor.solverObject.moveBy(
                    new Vec2(
                        mouseEvent.dx,
                        mouseEvent.dy
                    )
                )
            }
        } else {
            this.canMoveRedObject = false;
        }
    }
}