import React, {useState, useContext} from 'react';
import {AppContext} from '../AppContext';
import {Types} from '../reducers';
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
    font-weight: 600;
    font-size: 10px;
    width: 40px;
`;

const AxisName = styled.div`
    font-weight: 400;
    font-size: 9px;
`;

const AxisCurrentValue = styled.div`
    font-size: 10px;
`;

const SliderLabels = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

const SliderLabelsLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
`;

const SliderLabelsRight = styled.div``;

const SliderRow = styled.div`
    .rangeslider.rangeslider-horizontal,
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
    .rangeslider__handle:focus {
        outline: none;
    }
    .rangeslider-horizontal .rangeslider__handle:after {
        display: none;
    }
`;

const AxisSliderWrapper = styled.div`
    margin-bottom: 8px;
    margin-top: 8px;
`;

function AxisSlider({name, tag, min, defaultValue, max}: AxisSliderProps) {
    const [current, setCurrent] = useState(defaultValue);
    const {state, dispatch} = useContext(AppContext);

    const onChange = (newValue: number) => {
        setCurrent(newValue);
        const payload = {[tag]: newValue};
        dispatch({type: Types.UpdateAxis, payload});
    };

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
                <Slider tooltip={false} min={min} max={max} value={current} onChange={onChange} />
            </SliderRow>
        </AxisSliderWrapper>
    );
}

export default AxisSlider;