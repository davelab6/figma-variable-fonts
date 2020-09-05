// @ts-nocheck

import React from 'react';
import {useSelector} from 'react-redux';

import ModuleWrapper from '../layouts/ModuleWrapper';
import {createFigmaGlyph} from '../features/fontData/utils';

function CanvasActions() {
    const {activeFont, fonts} = useSelector((state: RootState) => state.fontData);
    const {content} = useSelector((state: RootState) => state.activeText);

    const createGlyph = () => {
        const {fontUrl} = fonts[activeFont.fontName];
        const axes = activeFont.axes;
        createFigmaGlyph(content, axes, fontUrl);
    };

    return (
        <ModuleWrapper title="Actions" open={true}>
            <button onClick={createGlyph}>Create glyph</button>
            <button>Update glyph</button>
        </ModuleWrapper>
    );
}

export default CanvasActions;
