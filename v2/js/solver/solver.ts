import {World} from "../world";
import {Point} from "./objects";
import {Vector} from "p5";
import {ForceFunction} from "./forces";
import {ConstraintFunction} from "./constraints";
import * as constants from "constants";
import {collidePoints} from "./colliders";
import {QuadTreeSolverSpace} from "./quadTreeSolverSpace";
import {Sketch} from "../sketch";
import {Rect} from "../math/rect";

const SOLVER_SUBSTEPS = 2;
const COLLISION_RANGE = new Vector(40, 40);

export class Solver {
    world: World;
    sketch: Sketch;
    objects: Point[];
    forces: ForceFunction[];
    constraints: ConstraintFunction[];
    space: QuadTreeSolverSpace;

    constructor(sketch: Sketch) {
        this.sketch = sketch;
        this.world = sketch.world;

        this.objects = [];
        this.forces = [];
        this.constraints = [];

        this.space = new QuadTreeSolverSpace(this.sketch)
    }

    addObject(obj: Point) {
        this.objects.push(obj);
    }

    addForce(force: ForceFunction) {
        this.forces.push(force);
    }

    removeForce(force: ForceFunction) {
        const index = this.forces.indexOf(force);
        if (index !== -1) {
            this.forces.splice(index, 1);
        }
    }

    addConstraint(constraint: ConstraintFunction) {
        this.constraints.push(constraint);
    }

    removeConstraint(constraint: ConstraintFunction) {
        const index = this.constraints.indexOf(constraint);
        if (index !== -1) {
            this.constraints.splice(index, 1);
        }
    }

    processOptimizations() {
        this.space.clear();
        this.objects.forEach((obj, index) => {
            this.space.addObject(obj);
        });
    }

    collisions(obj: Point) {
        const range = new Rect(obj.position, COLLISION_RANGE);
        const possibleObjects = this.space.root.query(range);
        possibleObjects.forEach(anotherObj => {
            if (obj === anotherObj) {
                return;
            }

            collidePoints(obj, anotherObj);
        })
    }

    solve(time) {
        this.processOptimizations();

        let step = time / SOLVER_SUBSTEPS;
        for (let i = 0; i < SOLVER_SUBSTEPS; i++) {
            this.objects.forEach(obj => {
                this.forces.forEach(force => force(obj));
                obj.update(step);
                this.collisions(obj);
                this.constraints.forEach(constraint => constraint(obj));
            });
        }
    }

    draw() {
        this.space.debugRender();
    }
}