import React from 'react';
import styled from 'styled-components';

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
                <AxesModule />
                <WebfontModule />
                <FontSetupModule />
                <AboutModule />
            </Wrapper>
        </AppProvider>
    );
};

export default App;
