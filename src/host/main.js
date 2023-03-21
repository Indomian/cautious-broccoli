import { onReady }  from "../utils/onReady";
import { getElement } from "../utils/getElement";

import {WorkerApplication} from "./worker";
import {DirectApplication} from "./direct";

function initApplication() {
    console.log('Init application');
    /**
     * @var {HTMLCanvasElement}
     */
    const canvas = getElement("#image_canvas");
    const container = getElement('#container');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    if (canvas.transferControlToOffscreen) {
        console.log('Render in worker');
        const application = new WorkerApplication(canvas);
    } else {
        // There is no support for offscreen render
        console.log('Render in main thread');
        const application = new DirectApplication(canvas);
    }
}

onReady(initApplication);