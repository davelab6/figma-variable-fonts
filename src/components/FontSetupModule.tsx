// @ts-nocheck

import React, {useContext, useEffect} from 'react';
import {SamsaFont} from 'samsa';
import {useDispatch} from 'react-redux';
import ModuleWrapper from '../layouts/ModuleWrapper';
import {addFontFamily, updateActiveFont, updateFontAxis} from '../features/fontData/fontDataSlice';

function FontSetupModule() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fontUrl = 'https://cdn.jsdelivr.net/gh/google/fonts@master/ofl/inter/Inter[slnt,wght].ttf';
        const samsaOptions = {
            url: fontUrl,
            fontFamily: 'DefaultFont',
            callback: (data: {[key: string]: any}) => {
                console.log('data', data);
                const fontData = {
                    fontUrl,
                    instances: data.instances,
                    axes: data.axes,
                    filename: data.filename,
                    names: data.names,
                    fontName: data.names[6],
                };
                dispatch(addFontFamily(fontData));
                const axes = {};
                data.axes.forEach((axis) => {
                    axes[axis.tag] = axis.default;
                });
                const activeFont = {
                    fontName: data.names[6],
                    variantName: 'Custom',
                    axes,
                };
                console.log('activeFont', activeFont);
                dispatch(updateActiveFont(activeFont));

                // const axisDefaults = {};
                // data.axes.forEach((axis) => {
                //     axisDefaults[axis.tag] = axis.default;
                // });
                // dispatch(updateFontAxis(axisDefaults));
            },
        };
        const vf = new SamsaFont(samsaOptions);
        console.log('vf', vf);
    }, []);

    return (
        <ModuleWrapper title="Font setup" open={true}>
            <div>
                <select id="select-fonts">
                    <option value="volvo">Roboto</option>
                    <option value="saab">Decovar</option>
                    <option value="vw">Amstelvar</option>
                </select>
            </div>
            <div>
                <button value="">Upload a variable font here</button>
            </div>
            <div>Preview</div>
        </ModuleWrapper>
    );
}

export default FontSetupModule;
