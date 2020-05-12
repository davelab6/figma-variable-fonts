import React, {useContext, useEffect} from 'react';
import ModuleWrapper from './ModuleWrapper';

import {SamsaFont} from 'samsa';
import {Types} from '../reducers';
import {AppContext} from '../AppContext';

function AxesModule() {
    const {state, dispatch} = useContext(AppContext);
    console.log('state', state.fontData.data?.axes);
    const axes = state.fontData.data?.axes;

    const displayAxes = axes => {
        return axes
            .map(axis => (
                <>
                    {axis.tag} - {axis.min} - {axis.default} - {axis.max}
                </>
            ))
            .join('');
    };

    return (
        <ModuleWrapper title="Axes" open={true}>
            (!!axes && axes.length > 0 && displayAxes(axes)
        </ModuleWrapper>
    );
}

export default AxesModule;
