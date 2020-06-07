import * as React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    border-bottom: 1px solid #e5e5e5;
`;

const PanelTitle = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin-top: 0px;
    margin-bottom: 8px;
    color: rba(51, 51, 51);
`;

const PanelContent = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    margin-top: 0px;
    margin-bottom: 8px;
    padding-bottom: 8px;
`;

type ModuleWrapperProps = {
    open?: boolean;
    title: string;
    children?: React.ReactNode;
};

const ModuleWrapper = ({open, title, children}: ModuleWrapperProps) => (
    <Panel>
        <PanelTitle>{title}</PanelTitle>
        {open && <PanelContent>{children}</PanelContent>}
    </Panel>
);

export default ModuleWrapper;