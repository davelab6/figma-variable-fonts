// @ts-nocheck

import React, {useContext, useEffect} from 'react';
import ModuleWrapper from '../layouts/ModuleWrapper';

import {SamsaFont} from 'samsa';
import {useDispatch} from 'react-redux';

function FontSetupModule() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fontUrl = 'https://cdn.jsdelivr.net/gh/google/fonts@master/ofl/inter/Inter[slnt,wght].ttf';
        const samsaOptions = {
            url: fontUrl,
            fontFamily: 'DefaultFont',
            callback: (data: {[key: string]: any}) => {
                const payload = {fontData: data};
                dispatch({type: Types.Update, payload});

                const axisDefaults = {};
                data.axes.forEach((axis) => {
                    axisDefaults[axis.tag] = axis.default;
                });
                dispatch({type: Types.ResetAxis, payload: axisDefaults});
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
