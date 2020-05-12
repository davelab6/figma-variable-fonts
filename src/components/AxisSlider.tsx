import React, {useState} from 'react';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import 'react-rangeslider/lib/index.css';

type AxisSliderProps = {
    tag: string;
    name: string;
    min: number;
    defaultValue: number;
    max: number;
};

const AxisTag = styled.div`
    font-weight: 500;
    font-size: 10px;
    width: 48px;
`;

const AxisName = styled.div`
    font-weight: 400;
    font-size: 8px;
`;

const AxisCurrentValue = styled.div`
    font-size: 10px;
`;

const SliderLabels = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SliderLabelsLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SliderLabelsRight = styled.div``;

const SliderRow = styled.div``;

function AxisSlider({name, tag, min, defaultValue, max}: AxisSliderProps) {
    const [current, setCurrent] = useState(defaultValue);

    return (
        <>
            <SliderLabels>
                <SliderLabelsLeft>
                    <AxisTag>{tag}</AxisTag>
                    <AxisName>{name}</AxisName>
                </SliderLabelsLeft>
                <SliderLabelsRight>
                    <AxisCurrentValue>{current}</AxisCurrentValue>
                </SliderLabelsRight>
            </SliderLabels>
            <SliderRow>
                <Slider min={min} max={max} value={current} handleLabel={`${current}`} onChange={setCurrent} />
            </SliderRow>
        </>
    );
}

export default AxisSlider;
