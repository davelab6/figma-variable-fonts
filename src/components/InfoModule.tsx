import React, {useContext} from 'react';
import ModuleWrapper from './ModuleWrapper';

import {AppContext} from '../AppContext';

function InfoModule() {
    const {state} = useContext(AppContext);

    const names = state.fontData.data?.names || [];

    console.log('names', names);

    return (
        <ModuleWrapper title="Info" open={names.length > 0}>
            {!!names && names.length > 0 && (
                <>
                    <div>Font: {names[0]}</div>
                    <div>By {names[9]}</div>
                </>
            )}
        </ModuleWrapper>
    );
}

export default InfoModule;
