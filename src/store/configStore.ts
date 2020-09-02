import {createStore, applyMiddleware, Dispatch, Action} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {FontData} from '../model/FontData';
import {initStoreAction} from '../actions/actions';
import {rootReducer} from '../reducers/rootReducer';

export interface IState {
    font: FontData | {};
}

export const initialState = {
    fontData: {
        data: FontData,
        loading: false,
    },
};

export const initStore = () => {
    return (dispatch: Dispatch<Action>) => {
        const font: FontData = {};
        return dispatch(initStoreAction(font));
    };
};

export const configureStore = () => {
    if (process.env.NODE_ENV === 'production') {
        return createStore(rootReducer, applyMiddleware(thunk));
    } else {
        return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
    }
};
