// @ts-nocheck

import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const WebfontWrapper = styled.div`
    background: #f7f7f7;
    border-bottom: 1px solid #e5e5e5;
    padding: 16px;
`;

const WebfontText = styled.div`
    color: #acacac;
    font-size: 32px;
    font-family: 'Inter var experimental', sans-serif;
    font-variation-settings: ${(props) => props.axesCss};
`;

function WebfontModule(props) {
    const {activeFont, fonts} = useSelector((state: RootState) => state.fontData);
    const {content} = useSelector((state: RootState) => state.activeText);

    if (!activeFont) {
        return null;
    }

    const axes = Object.keys(activeFont.axes);
    const axisValues = axes.map((axisName) => `'${axisName}' ${activeFont.axes[axisName]}`);
    const axesCss = axisValues.join(', ');

    return (
        <WebfontWrapper>
            <WebfontText axesCss={axesCss}>{props.children}</WebfontText>
        </WebfontWrapper>
    );
}

export default WebfontModule;
