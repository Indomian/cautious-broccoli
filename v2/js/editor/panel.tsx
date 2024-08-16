import * as React from "react";
import SidePanel from 'intergalactic/side-panel';

export function Panel() {
    return (
        <SidePanel visible={true} aria-label='Documentation'>
            <SidePanel.Panel>
                <h1>Side panel</h1>
            </SidePanel.Panel>
        </SidePanel>
    )
}