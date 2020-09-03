import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {route} from './routes';
import {updateSelection} from '../reducers/activeTextReducer';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('message', (event) => {
            if (event.data.pluginMessage.payload.type === 'selected-change') {
                const {payload} = event.data.pluginMessage;
                dispatch(updateSelection({...payload}));
            }
        });
    }, []);

    return <HashRouter children={route} />;
};

export default App;
