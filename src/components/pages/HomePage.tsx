import * as React from 'react';
import styled from 'styled-components';
import About from '../AboutModule';
import Info from '../InfoModule';
import FontSetup from '../FontSetupModule';

const Wrapper = styled.div`
    margin: -8px;
`;

class HomePage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Wrapper>
                <Info />
                <FontSetup />
                <About />
            </Wrapper>
        );
    }
}

export default HomePage;
