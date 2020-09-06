import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {route} from './routes';
import {updateSelection} from '../features/activeText/activeTextSlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.parent.postMessage({pluginMessage: {type: 'on-ui-loaded'}}, '*');

        window.addEventListener('message', (event) => {
            const pm = event.data.pluginMessage;
            if (pm && pm.payload && pm.payload.type === 'selected-change') {
                const {payload} = pm;
                dispatch(updateSelection({...payload}));
                console.log('payload', payload);
                if (payload.isVf === 'true') {
                }
            }
        });
    }, [window]);

    return <HashRouter children={route} />;
};

export default App;
