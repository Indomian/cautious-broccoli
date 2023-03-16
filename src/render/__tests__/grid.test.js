import {CollisionGrid} from "../grid";

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