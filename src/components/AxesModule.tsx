// @ts-nocheck

import React from 'react';
import {useSelector} from 'react-redux';

import ModuleWrapper from '../layouts/ModuleWrapper';
import AxisSlider from './AxisSlider';

function AxesModule() {
    const {activeFont, fonts, loading} = useSelector((state: RootState) => state.fontData);

    if (!activeFont || !activeFont.fontName || !fonts[activeFont.fontName] || !fonts[activeFont.fontName].axes) {
        return <></>;
    }

    console.log('fonts[activeFont.fontName]', fonts[activeFont.fontName]);
    const currentFontAxes = fonts[activeFont.fontName].axes;

    const displayAxes = () => {
        return currentFontAxes.map((axis, index) => {
            const {min, max, tag, name} = axis;
            return (
                <div key={index}>
                    <AxisSlider name={name} tag={tag} min={min} current={activeFont.axes[tag]} max={max} />
                </div>
            );
        });
    };

    return (
        <ModuleWrapper title="Axes" open={true}>
            {Object.keys(currentFontAxes).length > 0 && displayAxes()}
        </ModuleWrapper>
    );
}

export default AxesModule;
