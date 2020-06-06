import React, {useContext, useEffect} from 'react';
import ModuleWrapper from './ModuleWrapper';

import {SamsaFont} from 'samsa';
import {Types} from '../reducers';
import {AppContext} from '../AppContext';

function FontSetupModule() {
    const {dispatch} = useContext(AppContext);

    useEffect(() => {
        const fontUrl = 'https://lorp.github.io/samsa/src/fonts/Amstelvar-Roman-VF.ttf';
        const samsaOptions = {
            url: fontUrl,
            fontFamily: 'DefaultFont',
            callback: (data: {[key: string]: any}) => {
                const payload = {fontData: data};
                dispatch({type: Types.Update, payload});

                const axisDefaults = {};
                data.axes.forEach(axis => {
                    axisDefaults[axis.tag] = axis.default;
                });
                dispatch({type: Types.ResetAxis, payload: axisDefaults});
            },
        };
        let vf = new SamsaFont(samsaOptions);
        dispatch({type: Types.SetupSamsa, payload: vf});
        dispatch({type: Types.AddInstance});
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
