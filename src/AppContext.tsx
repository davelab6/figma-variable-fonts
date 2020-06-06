import React, {createContext, useReducer, Dispatch} from 'react';
import {fontReducer, FontActions, axisReducer, AxisActions} from './reducers';

interface InitialStateType {
    fontData: {
        samsa: any;
        namedInstaces: any;
        data: any;
        loading: boolean;
    };
    axisData: {
        [key: string]: number;
    };
}

export const initialState = {
    fontData: {
        samsa: null,
        namedInstaces: null,
        data: {},
        loading: false,
    },
    axisData: {},
};

export const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<FontActions | AxisActions>;
}>({
    state: initialState,
    dispatch: () => null,
});

const mainReducer = ({fontData, axisData}: InitialStateType, action: FontActions | AxisActions) => ({
    fontData: fontReducer(fontData, action),
    axisData: axisReducer(axisData, action),
});

export const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>;
};
