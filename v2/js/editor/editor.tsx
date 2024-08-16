import * as React from "react";
import {Sketch} from "../sketch";
import {Panel} from "./panel";

type EditorProps = {
    sketch: Sketch
}

export function Editor(props: EditorProps) {
    return <Panel />;
}

