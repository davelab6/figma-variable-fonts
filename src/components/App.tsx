import * as React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {route} from './routes';
import store from '../store/configStore';

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        console.log('store', store);
        return (
            <Provider store={store}>
                <HashRouter children={route} />
            </Provider>
        );
    }
}

export default App;
