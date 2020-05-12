import React, {useContext, useEffect} from 'react';

import {SamsaFont} from 'samsa';
import {Types} from '../reducers';
import {AppContext} from '../AppContext';

function FontSetupModule() {
    const {state, dispatch} = useContext(AppContext);

    useEffect(() => {
        const fontUrl = 'https://cdn.jsdelivr.net/gh/google/fonts@master/ofl/inter/Inter[slnt,wght].ttf';
        const samsaOptions = {
            url: fontUrl,
            fontFamily: 'DefaultFont',
            callback: (data: object) => {
                const payload = {fontData: data};
                dispatch({type: Types.Update, payload});
            },
        };
        let vf = new SamsaFont(samsaOptions);
        console.log('vf', vf);
    }, []);

    return (
        <div id="panel-font-list" className="panel open">
            <h2>Font setup</h2>
            <div className="panel-content">
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
            </div>
        </div>
    );
}

export default FontSetupModule;
