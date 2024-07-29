import {World} from "../world";
import {Point} from "./objects";
import {Vector} from "p5";
import {ForceFunction} from "./forces";
import {ConstraintFunction} from "./constraints";
import * as constants from "constants";
import {collidePoints} from "./colliders";

const SOLVER_SUBSTEPS = 2;

export class Solver {
    world: World;
    objects: Point[];
    forces: ForceFunction[];
    constraints: ConstraintFunction[];

    constructor(world: World) {
        this.world = world;

        this.objects = [];
        this.forces = [];
        this.constraints = [];
    }

    addObject(obj: Point) {
        this.objects.push(obj);
    }

    addForce(force: ForceFunction) {
        this.forces.push(force);
    }

    addConstraint(constraint: ConstraintFunction) {
        this.constraints.push(constraint);
    }

    collisions(obj) {
        this.objects.forEach(anotherObj => {
            if (obj === anotherObj) {
                return
            }

            collidePoints(obj, anotherObj);
        })
    }

    solve(time) {
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
}