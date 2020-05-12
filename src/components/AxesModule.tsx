import React, {useContext} from 'react';

import AxisSlider from './AxisSlider';

import {AppContext} from '../AppContext';

function AxesModule() {
    const {state} = useContext(AppContext);

    const axes = state.fontData.data?.axes;

    const displayAxes = axes => {
        return axes.map((axis, index) => {
            const {min, max, tag, default: defaultValue} = axis;
            return (
                <div key={index}>
                    <AxisSlider tag={tag} min={min} defaultValue={defaultValue} max={max} />
                </div>
            );
        });
    };

    return (
        <ModuleWrapper title="Axes" open={true}>
            {!!axes && axes.length > 0 && displayAxes(axes)}
        </ModuleWrapper>
    );
}

export default AxesModule;
