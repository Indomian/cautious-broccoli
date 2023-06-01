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

    let application;

    if (canvas.transferControlToOffscreen) {
        console.log('Render in worker');
        application = new WorkerApplication(canvas);
    } else {
        // There is no support for offscreen render
        console.log('Render in main thread');
        application = new DirectApplication(canvas);
    }

    const buttonLoadScene1 = getElement('#scene1');
    const buttonLoadScene2 = getElement('#scene2');
    const buttonLoadScene3 = getElement('#scene3');


    buttonLoadScene1.addEventListener('click', (e) => {
        e.preventDefault();
        application.loadScene('scene1');
    })

    buttonLoadScene2.addEventListener('click', e => {
        e.preventDefault();
        application.loadScene('scene2');
    })

    buttonLoadScene3.addEventListener('click', e => {
        e.preventDefault();
        application.loadScene('scene3');
    })
}

onReady(initApplication);