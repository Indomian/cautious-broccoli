import {CollisionGrid} from "../grid";
import {Vec2} from "../vector/vec2";
import {ImmovableLineObject} from "../objects/immovableLine";

describe('Test has cell', () => {
    it('Should process correctly', () => {
        const grid = new CollisionGrid(
            4, 4, new Vec2(10, 10)
        );

        expect(grid.hasCell(0, -1)).toBeFalsy();
        expect(grid.hasCell(0, 0)).toBeTruthy();
        expect(grid.hasCell(0, 1)).toBeTruthy();

        expect(grid.hasCell(15, 0)).toBeTruthy();
        expect(grid.hasCell(16, 0)).toBeFalsy();

        expect(grid.hasCell(15, 1)).toBeFalsy();
    })
})

describe('Test calculate adjasentCells', () => {
    it('Should correctly calculate 1x1 grid', () => {
        const grid = new CollisionGrid(
            1,
            1,
            new Vec2(10, 10)
        );
        expect(grid.adjacentCells[0]).toHaveLength(1);
    });

    it('Should have size 4 for all cells in 2x2 grid', () => {
        const grid = new CollisionGrid(
            2,
            2,
            new Vec2(10, 10)
        );

        grid.adjacentCells.forEach(cells => expect(cells).toHaveLength(4));
    });

    it('Should have sizes 4, 6, 9 in 3x3', () => {
        const grid = new CollisionGrid(
            3,
            3,
            new Vec2(10, 10)
        );

        expect(grid.adjacentCells[0]).toHaveLength(4);
        expect(grid.adjacentCells[3]).toHaveLength(6);
        expect(grid.adjacentCells[4]).toHaveLength(9);
        expect(grid.adjacentCells[5]).toHaveLength(6);
        expect(grid.adjacentCells[8]).toHaveLength(4);
    })
})

describe('Test getVecFromIndex', () => {
    it('Should correctly return coord', () => {
        const grid = new CollisionGrid(
            3,
            3,
            new Vec2(10, 10)
        );

        const centerTop = grid.getVecFromIndex(3);
        expect(centerTop.x).toBe(1);
        expect(centerTop.y).toBe(0);
    })
})

describe('Test addObjectsToCells', () => {
    test.each([
        [new Vec2(5, 5), new Vec2(95, 5)],
        [new Vec2(95, 5), new Vec2(5, 5)]
    ])('Should add items to grid for horizontal lines', (
        point1: Vec2,
        point2: Vec2
    ) => {
        const grid = new CollisionGrid(
            10,
            10,
            new Vec2(10, 10)
        );

        grid.addObjectToCells(
            point1,
            point2,
            new ImmovableLineObject(new Vec2(5, 5), new Vec2(90, 0))
        );

        expect(grid.cells[0].objects).toHaveLength(1);
        expect(grid.cells[1].objects).toHaveLength(0);
        expect(grid.cells[10].objects).toHaveLength(1);
        expect(grid.cells[11].objects).toHaveLength(0);
    });

    test.each([
        [new Vec2(5, 5), new Vec2(5, 95)],
        [new Vec2(5, 95), new Vec2(5, 5)]
    ])('Should add items to grid verticaly forward', (
        point1: Vec2,
        point2: Vec2
    ) => {
        const grid = new CollisionGrid(
            10,
            10,
            new Vec2(10, 10)
        );

        grid.addObjectToCells(
            point1,
            point2,
            new ImmovableLineObject(new Vec2(5, 5), new Vec2(0, 90))
        );

        expect(grid.cells[0].objects).toHaveLength(1);
        expect(grid.cells[1].objects).toHaveLength(1);
        expect(grid.cells[10].objects).toHaveLength(0);
        expect(grid.cells[11].objects).toHaveLength(0);
    });

    test.each([
        [new Vec2(-5, 5), new Vec2(105,0)]
    ])('Should cover horizontal lines that are out of world', (
        point1: Vec2,
        point2: Vec2
    ) => {
        const grid = new CollisionGrid(
            10,
            10,
            new Vec2(10, 10)
        );

        grid.addObjectToCells(
            point1,
            point2,
            new ImmovableLineObject(new Vec2(5, 5), new Vec2(0, 90))
        );

        expect(grid.cells[0].objects).toHaveLength(1);
        expect(grid.cells[90].objects).toHaveLength(1);
    });

    test.each([
        [new Vec2(5, -5), new Vec2(5,105)]
    ])('Should cover vertical lines that are out of world', (
        point1: Vec2,
        point2: Vec2
    ) => {
        const grid = new CollisionGrid(
            10,
            10,
            new Vec2(10, 10)
        );

        grid.addObjectToCells(
            point1,
            point2,
            new ImmovableLineObject(new Vec2(5, 5), new Vec2(0, 90))
        );

        expect(grid.cells[0].objects).toHaveLength(1);
        expect(grid.cells[9].objects).toHaveLength(1);
    });
});
