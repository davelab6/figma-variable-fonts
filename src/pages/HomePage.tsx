import * as React from 'react';
import styled from 'styled-components';
import About from '../components/AboutModule';
import Info from '../components/InfoModule';
import FontSetup from '../components/FontSetupModule';
import Axes from '../components/AxesModule';

const Wrapper = styled.div`
    margin: -8px;
`;

class HomePage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Wrapper>
                <Info />
                <Axes />
                <FontSetup />
                <About />
            </Wrapper>
        );
    }
}

export default HomePage;
