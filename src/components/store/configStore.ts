import { createStore, applyMiddleware, Dispatch, Action } from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { FontData } from "../model/FontData";
import { initStoreAction } from "../actions/actions";
import { rootReducer } from "../reducers/rootReducer";

export interface IState {
    fonts: FontData[];
}

interface InitialStateType {
    fontData: {
        data: any;
        loading: boolean;
    };
    axisData: {
        [key: string]: number;
    };
}

export const initialState = {
    fontData: {
        data: {},
        loading: false,
    },
    axisData: {},
};

export const initStore = () => {
    return (dispatch: Dispatch<Action>) => {
        const fonts: FontData[] = [];
        return dispatch(initStoreAction(fonts));
    };
};

export const configureStore = () => {
    if (process.env.NODE_ENV === "production") {
        return createStore(
            rootReducer,
            applyMiddleware(thunk),
        );
    } else {
        return createStore(
            rootReducer,
            composeWithDevTools(
                applyMiddleware(thunk),
            ),
        );
    }
};
