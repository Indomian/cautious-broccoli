 import * as P5 from "p5";

import {Sketch1} from "./sketches/sketch1";
import {Sketch2} from "./sketches/sketch2";
import {Sketch3} from "./sketches/sketch3";


 const sketch = (p5: P5) => {
    new Sketch2(p5);
};

new P5(sketch);

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});


