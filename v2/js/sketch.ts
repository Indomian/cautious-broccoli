import * as P5 from "p5";
import {Stats} from "../../src/render/stats";
import {Solver} from "./solver/solver";
import {World} from "./world";
import {Entity} from "./entities/entity";

export class Sketch {
    p5: P5;
    stats: Stats;
    solver: Solver;
    world: World;
    entities: Entity[];
    drawDebug: boolean = false;

    constructor(p5: P5) {
        this.p5 = p5;
        this.stats = new Stats();
        this.world = new World(this.p5);
        this.solver = new Solver(this);
        this.entities = [];

        this.p5.windowResized = this.windowResized;
    }

    addEntity(entity: Entity) {
        this.entities.push(entity);
        entity.add();
    }

    removeEntity(entity: Entity) {
        const index = this.entities.indexOf(entity);
        if (index !== -1) {
            this.entities[index].remove();
            this.entities.splice(index, 1);
        }
    }

    windowResized = () => {
        this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
        this.world.viewPortSize.set(this.p5.windowWidth, this.p5.windowHeight);
    }
}