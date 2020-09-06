import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {route} from './routes';
import {updateSelection} from '../features/activeText/activeTextSlice';
import {updateActiveFont, updateActiveFontAxes} from '../features/fontData/fontDataSlice';

const App = () => {
    const dispatch = useDispatch();

    const {activeFont} = useSelector((state: RootState) => state.fontData);

    const activeFontName = activeFont ? activeFont.fontName : null;

    const updateActiveAxes = (payload) => {
        console.log('activeFont', activeFont);
        if (payload.isVariableFontNode === 'true') {
            dispatch(
                updateActiveFontAxes({
                    fontName: payload.fontName,
                    axes: JSON.parse(payload.axes),
                })
            );
        }
    };

    const setupEvents = () => {
        window.addEventListener('message', (event) => {
            const pm = event.data.pluginMessage;
            if (pm && pm.payload && pm.payload.type === 'selected-change') {
                const {payload} = pm;
                dispatch(updateSelection({...payload}));
                console.log('payload', payload);
                updateActiveAxes(payload);
            }
        });
    };

    useEffect(() => {
        window.parent.postMessage({pluginMessage: {type: 'on-ui-loaded'}}, '*');

        setupEvents();
    }, [window]);

    return <HashRouter children={route} />;
};

export default App;
