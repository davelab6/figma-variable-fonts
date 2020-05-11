  
import * as React from 'react';

import AboutModule from './components/AboutModule'
import AxesModule from './components/AxesModule'
import FontSetupModule from './components/FontSetupModule'
import InfoModule from './components/InfoModule'
import WebfontModule from './components/WebfontModule'

export const App = () => {
    return (
        <>
          <AboutModule />
          <AxesModule />
          <FontSetupModule />
          <InfoModule />
          <WebfontModule />
        </>
    );
};