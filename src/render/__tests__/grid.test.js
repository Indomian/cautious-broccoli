import {CollisionGrid} from "../grid";
import {Vec2} from "../vector/vec2";

describe('Test has cell', () => {
    it('Should process correctly', () => {
        const grid = new CollisionGrid(
            4, 4
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