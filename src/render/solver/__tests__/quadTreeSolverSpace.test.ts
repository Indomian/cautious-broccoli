import {QuadTree} from "../quadTreeSolverSpace";
import {Vec2Rect} from "../../vector/vec2Rect";
import {Vec2} from "../../vector/vec2";
import {ImmovableLineObject} from "../../objects/immovableLine";

describe('Test query for ImmovableLine', () => {
    it.each([
      [
          new ImmovableLineObject(
              new Vec2(10, 10),
              new Vec2(90, 90)
          ),
          new Vec2Rect(
              new Vec2(50, 50),
              new Vec2(10, 10)
          )
      ],
        [
            new ImmovableLineObject(
                new Vec2(10, 90),
                new Vec2(90, -90)
            ),
            new Vec2Rect(
                new Vec2(50, 50),
                new Vec2(10, 10)
            )
        ]
    ])('Should find line in all tree', (line, range) => {
        const boundary = new Vec2Rect(
            new Vec2(50, 50),
            new Vec2(100, 100)
        )

        const qtree = new QuadTree(boundary, 10);

        qtree.insert(line);

        expect(qtree.objects).toHaveLength(1);
        expect(qtree.objects).toContain(line);

        const items = qtree.query(range);

        expect(items).toContain(line);
    })
})