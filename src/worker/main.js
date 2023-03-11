import { Render } from "../render/index.js";

onmessage = function (event ) {
    console.log(event);

    const render = new Render(event.data.canvas);
    render.start();
}