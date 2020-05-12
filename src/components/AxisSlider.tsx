import React, {useState} from 'react';
import Slider from 'react-rangeslider';
import styled from 'styled-components';

type AxisSliderProps = {
    tag: string;
    min: number;
    defaultValue: number;
    max: number;
};

function AxisSlider({tag, min, defaultValue, max}: AxisSliderProps) {
    const [current, setCurrent] = useState(defaultValue);

    return <Slider min={min} max={max} value={current} handleLabel={current} onChange={setCurrent} />;
}

export default AxisSlider;
