// @ts-nocheck

import React from 'react';
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
    font-variation-settings: ${(props) => props.axesCss};
`;

function WebfontModule(props) {
    // const axes = Object.keys(state.axisData);
    // const axisValues = axes.map((axis) => {
    //     return `'${axis}' ${state.axisData[axis]}`;
    // });
    // const axesCss = axisValues.join(', ');
    const axesCss = '';

    return (
        <WebfontWrapper>
            <WebfontText axesCss={axesCss}>{props.children}</WebfontText>
        </WebfontWrapper>
    );
}

export default WebfontModule;
