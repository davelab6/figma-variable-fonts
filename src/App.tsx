import React from 'react';
import styled from 'styled-components';
import {hot} from 'react-hot-loader';

import AboutModule from './components/AboutModule';
import AxesModule from './components/AxesModule';
import FontSetupModule from './components/FontSetupModule';
import InfoModule from './components/InfoModule';
import WebfontModule from './components/WebfontModule';

import {AppProvider} from './AppContext';

const Wrapper = styled.div`
    margin: -8px;
`;

const App = () => {
    return (
        <AppProvider>
            <Wrapper>
                <InfoModule />
                <WebfontModule />
                <AxesModule />
                <FontSetupModule />
                <AboutModule open={true} />
            </Wrapper>
        </AppProvider>
    );
};

export default hot(module)(App);
