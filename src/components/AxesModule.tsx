// @ts-nocheck

import React from 'react';
import {useStore, connect} from 'react-redux';

import ModuleWrapper from '../layouts/ModuleWrapper';
import AxisSlider from './AxisSlider';
import FontAxis from '../model/FontAxis';
import {getFonts} from '../selectors';

const AxesModule: React.FC<Props> = (props: {fontDatas: any}) => {
    const fontDataAxes = props.fontDatas.data?.axes;
    const displayAxes = (axes: FontAxis[]) => {
        return axes.map((axis, index) => {
            const {min, max, tag, default: defaultValue, name} = axis;
            return (
                <div key={index}>
                    <AxisSlider name={name} tag={tag} min={min} defaultValue={defaultValue} max={max} />
                </div>
            );
        });
    };

    return (
        <ModuleWrapper title="Axes" open={true}>
            {fontDataAxes.length > 0 && displayAxes(fontDataAxes)}
        </ModuleWrapper>
    );
};

const mapStateToProps = (state) => {
    return {fontDatas: getFonts(state)};
};

const mapDispatchToProps = {
    // ... normally is an object full of action creators
};

export default connect(mapStateToProps, mapDispatchToProps)(AxesModule);
