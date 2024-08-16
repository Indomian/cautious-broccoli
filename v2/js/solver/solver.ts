import * as P5 from "p5";
import {World} from "../world";
import {Point} from "./objects";
import {Vector} from "p5";
import {ForceFunction} from "./forces";
import {ConstraintFunction} from "./constraints";
import {QuadTreeSolverSpace} from "./quadTreeSolverSpace";
import {Rect} from "../math/rect";
import {TimeInSeconds} from "./types";
import {AverageSet} from "../stats/average";

const SOLVER_SUBSTEPS = 4;
export const COLLISION_RANGE = new Vector(80, 80);

export class Solver {
    world: World;
    objects: Point[];
    forces: ForceFunction[];
    constraints: ConstraintFunction[];
    space: QuadTreeSolverSpace;
    possibleObjectsStats: AverageSet;

    constructor(world: World) {
        this.world = world;

        this.objects = [];
        this.forces = [];
        this.constraints = [];

        this.space = new QuadTreeSolverSpace({
            center: new Vector(this.world.width / 2, this.world.height / 2),
            size: new Vector(this.world.width, this.world.height)
        });

        this.possibleObjectsStats = new AverageSet();
    }

    addObject(obj: Point) {
        this.objects.push(obj);
    }

    removeObject(obj: Point) {
        const index = this.objects.indexOf(obj);
        if (index !== -1) {
            this.objects.splice(index, 1);
        }
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
        const possibleObjects = [];
        if (!this.space.root.query(range, possibleObjects)) {
            return;
        }

        possibleObjects.forEach(anotherObj => obj.collide(anotherObj));
        this.possibleObjectsStats.tick(possibleObjects.length);
    }

    solve(time: TimeInSeconds) {
        let step = time / SOLVER_SUBSTEPS;
        for (let i = 0; i < SOLVER_SUBSTEPS; i++) {
            this.processOptimizations();
            this.objects.forEach(obj => {
                this.forces.forEach(force => force(obj));
                obj.update(step);
                this.collisions(obj);
                this.constraints.forEach(constraint => constraint(obj));
            });
        }
    }

    draw(p5: P5) {
        this.space.debugRender(p5);
    }
}