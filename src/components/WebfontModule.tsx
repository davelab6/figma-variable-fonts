import * as React from 'react';
import styled from 'styled-components';
import ModuleWrapper from './ModuleWrapper';

const WebfontWrapper = styled.div`
    background: #f7f7f7;
    border-bottom: 1px solid #e5e5e5;
    padding: 16px;
`;

const WebfontText = styled.div`
    color: #acacac;
    font-size: 32px;
    font-family: 'Inter', sans-serif;
`;

function WebfontModule() {
    return (
        <WebfontWrapper>
            <WebfontText contenteditable="true">AaBbCc</WebfontText>
        </WebfontWrapper>
    );
}

export default WebfontModule;
