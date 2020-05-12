import React, {createContext, useReducer, Dispatch} from 'react';
import {fontReducer, FontActions} from './reducers';

interface InitialStateType {
    fontData: {
        data: any;
        loading: boolean;
    };
}

export const initialState = {
    fontData: {
        data: {},
        loading: false,
    },
};

export const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<FontActions>;
}>({
    state: initialState,
    dispatch: () => null,
});

const mainReducer = ({fontData}: InitialStateType, action: FontActions) => ({
    fontData: fontReducer(fontData, action),
});

export const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>;
};
