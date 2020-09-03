// @ts-nocheck

import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import ModuleWrapper from '../layouts/ModuleWrapper';
import {FontAxis} from '../features/fontDataReducer/FontAxis';

function InfoModule() {
    const names: FontAxis[] = useSelector((state) => state.fontData) || [];

    return (
        <ModuleWrapper title="Info" open={names.length > 0}>
            {!!names && names.length > 0 && (
                <>
                    <div>Font: {names[1]}</div>
                    <div>By {names[9]}</div>
                </>
            )}
        </ModuleWrapper>
    );
}

export default InfoModule;
