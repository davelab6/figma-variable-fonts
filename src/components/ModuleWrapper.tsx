import * as React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    background: pink;
`;

const PanelTitle = styled.h2``;

const PanelContent = styled.h2``;

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
