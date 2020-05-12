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
    align-items: baseline;
`;

const SliderLabelsRight = styled.div``;

const SliderRow = styled.div`
    .rangeslider-horizontal .rangeslider__fill {
        background: #efefef;
    }

    .rangeslider,
    .rangeslider .rangeslider__fill {
        box-shadow: none;
    }

    .rangeslider-horizontal {
        height: 8px;
        border-radius: 10px;
    }

    .rangeslider {
        margin: 0px;
    }

    .rangeslider-horizontal .rangeslider__handle {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
    }

    .rangeslider .rangeslider__handle {
        background: #d7d7d7;
        box-shadow: none;
    }

    .rangeslider-horizontal .rangeslider__handle:after {
        display: none;
    }
`;

const AxisSliderWrapper = styled.div`
    margin-bottom: 16px;
`;

function AxisSlider({name, tag, min, defaultValue, max}: AxisSliderProps) {
    const [current, setCurrent] = useState(defaultValue);

    return (
        <AxisSliderWrapper>
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
                <Slider tooltip={false} min={min} max={max} value={current} onChange={setCurrent} />
            </SliderRow>
        </AxisSliderWrapper>
    );
}

export default AxisSlider;
