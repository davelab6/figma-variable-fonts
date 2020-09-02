// @ts-nocheck

import React from 'react';

import ModuleWrapper from '../layouts/ModuleWrapper';
import AxisSlider from './AxisSlider';

function AxesModule() {
    const axes = [];
    // const axes = state.fontData.data?.axes;
    const displayAxes = (axes) => {
        return [].map((axis, index) => {
            // return axes.map((axis, index) => {
            //     const {min, max, tag, default: defaultValue, name} = axis;
            return (
                <div key={index}>
                    <AxisSlider name={name} tag={tag} min={min} defaultValue={defaultValue} max={max} />
                </div>
            );
        });
    };

    return (
        <ModuleWrapper title="Axes" open={true}>
            {axes.length > 0 && displayAxes(axes)}
        </ModuleWrapper>
    );
}

export default AxesModule;
