import {Sketch} from "../../sketch";
import {Solver} from "../../solver/solver";
import {World} from "../../world";
import {gravity} from "../../solver/forces";

describe("Test actor jumping with different frame duration", () => {

    it.each([])('Should correctly jump', () => {
        const world = new World();
        world.width = 100;
        world.height = 100;
        const solver = new Solver(world);

        const gravityForce = gravity(1);
        solver.addForce(gravityForce);


    })
})