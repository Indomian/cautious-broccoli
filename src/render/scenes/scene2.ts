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

const milkShakePoints = [
    new Vec2(0, 0),
    new Vec2(70, 380),
    new Vec2(270, 380),
    new Vec2(340, 0)
]

const milkShakeLines = [
    [milkShakePoints[0], Vec2Math.diff(milkShakePoints[0], milkShakePoints[1]).flipSelf()],
    [milkShakePoints[1], Vec2Math.diff(milkShakePoints[1], milkShakePoints[2]).flipSelf()],
    [milkShakePoints[2], Vec2Math.diff(milkShakePoints[2], milkShakePoints[3]).flipSelf()]
]

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
    constructor(engine: Render) {
        super(engine)

        const canvasCenter = new Vec2(
            this.engine.canvas.width / 2,
            this.engine.canvas.height / 2
        );

        this.generator = new CombineGenerator(this.engine.solver);
        this.generator.addGenerator(
            this.createBallsGenerator(
                canvasCenter,
                new Vec2(
                    300, 300
                ),
                new Vec2(2, -2)
            )
        );

        this.generator.addGenerator(
            this.createBallsGenerator(
                canvasCenter,
                new Vec2(
                    -300, 300
                ),
                new Vec2(-2, -2)
            )
        );

        this.createBottomBouncyLine();
        this.createMilkShake(canvasCenter);
        this.createActor();
    }

    createBallsGenerator(canvasCenter, pointDelta, baseBallVelocity) {
        const ballGeneratorPoint = canvasCenter.diff(pointDelta);
        const ballVelocity = baseBallVelocity.mul(1/this.engine.solver.subSteps);

        return new TotalObjectsGenerator(
            this.engine.solver,
            700,
            7,
            (index) => {
                const obj = new RenderableObject(
                    (new BallsObject(
                        ballGeneratorPoint,
                        10
                    )).setVelocity(ballVelocity),
                    new CircleWithText(
                        this.engine.context,
                        Vec2.Zero(),
                        10,
                        index2color(index+200),
                        '',
                        '#000000'
                    )
                )

                const obj2 = new RenderableObject(
                    (new BallsObject(
                        ballGeneratorPoint.sum(
                            Vec2.Down(20)
                        ),
                        7
                    )).setVelocity(ballVelocity),
                    new CircleWithText(
                        this.engine.context,
                        Vec2.Zero(),
                        7,
                        index2color(index+100),
                        '',
                        '#000000'
                    )
                )

                const obj3 = new RenderableObject(
                    (new BallsObject(
                        ballGeneratorPoint.sum(
                            Vec2.Down(-20)
                        ),
                        15
                    )).setVelocity(ballVelocity),
                    new CircleWithText(
                        this.engine.context,
                        Vec2.Zero(),
                        15,
                        index2color(index),
                        '',
                        '#000000'
                    )
                )

                const obj4 = new RenderableObject(
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

        bottomLine.bounceValue = 1.2;

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
        milkShakeLines.forEach(line => {
            this.engine.addObject(new ImmovableLineRenderableObject(
                new ImmovableLineObject(
                    line[0].sum(
                        canvasCenter.diff(new Vec2(340/2, 380/2))
                    ),
                    line[1]
                ),
                new Line(
                    this.engine.context,
                    Vec2.Zero(),
                    Vec2.Zero(),
                    '#ffffff'
                )
            ));
        });
    }

    createActor() {
        this.actor = new RenderableObject(
            new ImmovableBallsObject(new Vec2(230, 50), 30),
            new Circle(this.engine.context, Vec2.Zero(), 30, '#ff0000')
        );
        this.engine.addObject(this.actor);
    }

    getActor() {
        return this.actor;
    }
}