import * as React from 'react';
import {SamsaFont} from 'samsa';

import AboutModule from './components/AboutModule';
import AxesModule from './components/AxesModule';
import FontSetupModule from './components/FontSetupModule';
import InfoModule from './components/InfoModule';
import WebfontModule from './components/WebfontModule';

const App = () => {
    let textbox: HTMLInputElement;

    console.log('SamsaFont', SamsaFont);

    const countRef = (element: HTMLInputElement) => {
        if (element) element.value = '5';
        textbox = element;
    };

    const onCreate = () => {
        const count = parseInt(textbox.value, 10);
        parent.postMessage({pluginMessage: {type: 'create-rectangles', count}}, '*');
    };

    const onCancel = () => {
        parent.postMessage({pluginMessage: {type: 'cancel'}}, '*');
    };

    return (
        <>
            <h2>Rectangle Creator</h2>
            <p>
                Count: <input ref={countRef} />
            </p>
            <button id="create" onClick={onCreate}>
                Create
            </button>
            <button onClick={onCancel}>Cancel</button>
            <InfoModule />
            <WebfontModule />
            <AxesModule />
            <FontSetupModule />
            <AboutModule />
        </>
    );
};

export default App;
