import { onReady }  from "../utils/onReady";
import { getElement } from "../utils/getElement";

function initApplication() {
    console.log('Init application');
    /**
     * @var {HTMLCanvasElement}
     */
    const canvas = getElement("#image_canvas");

    const worker = new Worker( new URL('../worker/main.js', import.meta.url), {type: 'module'});
    const offscreen = canvas.transferControlToOffscreen();
    worker.postMessage({ canvas: offscreen }, [offscreen]);
}

onReady(initApplication);