import React from 'react';

import AboutModule from './components/AboutModule';
import AxesModule from './components/AxesModule';
import FontSetupModule from './components/FontSetupModule';
import InfoModule from './components/InfoModule';
import WebfontModule from './components/WebfontModule';

import {AppProvider} from './AppContext';

const App = () => {
    return (
        <AppProvider>
            <InfoModule />
            <AxesModule />
            <WebfontModule />
            <FontSetupModule />
            <AboutModule />
        </AppProvider>
    );
};

export default App;
