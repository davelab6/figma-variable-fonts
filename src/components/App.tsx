import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {FIGMA_EVENT_TYPES} from '../plugin/shared/constants';
import {route} from './routes';
import {updateSelection} from '../features/activeText/activeTextSlice';
import {updateActiveFontAxes} from '../features/fontData/fontDataSlice';

const App = () => {
  const dispatch = useDispatch();

  const {activeFont} = useSelector((state: RootState) => state.fontData);

  const setupEvents = () => {
    window.addEventListener('message', (event) => {
      const pm = event.data.pluginMessage;
      if (pm && pm.payload && pm.payload.type === FIGMA_EVENT_TYPES.SELECTED_CHANGED) {
        const {payload} = pm;
        dispatch(updateSelection({...payload}));
        // console.log('payload', payload);
        if (payload.isVariableFontNode === 'true') {
          dispatch(
            updateActiveFontAxes({
              fontName: payload.fontName,
              axes: payload.axes,
            })
          );
        }
      }
    });
  };

  useEffect(() => {
    window.parent.postMessage({pluginMessage: {type: FIGMA_EVENT_TYPES.ON_UI_LOADED}}, '*');

    setupEvents();
  }, [window]);

  return <HashRouter children={route} />;
};

export default App;
