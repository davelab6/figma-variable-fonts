import * as React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {route} from './routes';
import store from '../store/configStore';

class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);

        window.addEventListener('message', (event) => {
            console.log('Success', event);
        });
    }
    public render(): JSX.Element {
        parent.postMessage({pluginMessage: {type: 'get-selected-text'}}, '*');

        console.log('store', store);
        return (
            <Provider store={store}>
                <HashRouter children={route} />
            </Provider>
        );
    }
}

export default App;
