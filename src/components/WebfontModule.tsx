import React, {useContext} from 'react';
import {AppContext} from '../AppContext';
import styled from 'styled-components';

const WebfontWrapper = styled.div`
    background: #f7f7f7;
    border-bottom: 1px solid #e5e5e5;
    padding: 16px;
`;

const WebfontText = styled.div`
    color: #acacac;
    font-size: 32px;
    font-family: 'Inter', sans-serif;
    font-variation-settings: ${props => props.axesCss};
`;

function WebfontModule() {
    const {state} = useContext(AppContext);

    const axes = Object.keys(state.axisData);
    const axisValues = axes.map(axis => {
        return `'${axis}' ${state.axisData[axis]}`;
    });
    const axesCss = axisValues.join(', ');

    return (
        <WebfontWrapper>
            <WebfontText axesCss={axesCss} contenteditable="true">
                AaBbCc
            </WebfontText>
        </WebfontWrapper>
    );
}

export default WebfontModule;