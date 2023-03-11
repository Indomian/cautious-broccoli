import { onReady }  from "../utils/onReady";
import { getElement } from "../utils/getElement";
import {Render} from "../render";

function initApplication() {
    console.log('Init application');
    /**
     * @var {HTMLCanvasElement}
     */
    const canvas = getElement("#image_canvas");

    if (canvas.transferControlToOffscreen) {
        console.log('Render in worker');
        const worker = new Worker(new URL('../worker/main.js', import.meta.url), {type: 'module'});
        const offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({canvas: offscreen}, [offscreen]);
    } else {
        // There is no support for offscreen render
        console.log('Render in main thread');
        const render = new Render(canvas);
        render.start();
    }
}

onReady(initApplication);