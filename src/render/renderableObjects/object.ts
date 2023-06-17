import {Item} from "../items/item";
import {BaseSolverObject} from "../objects/object";

export class RenderableObject<SolverObject extends BaseSolverObject, DrawItem extends Item> {
    solverObject: SolverObject = null;
    renderItem: DrawItem = null;

    constructor(solverObject: SolverObject, renderItem: DrawItem) {
        this.solverObject = solverObject;
        this.renderItem = renderItem;
    }

    update() {
        this.renderItem.position = this.solverObject.currentPosition;
    }

    render() {
        this.update();
        this.renderItem.render();
    }
}