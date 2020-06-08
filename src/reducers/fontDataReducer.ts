import {Action} from 'redux';
import {initState} from './rootReducer';
import * as fontActions from '../actions/actionTypes';

export const fonts = (state = initState.fonts, action: Action) => {
    switch (action.type) {
        case fontActions.ActionTypes.INIT_STORE:
            return (action as fontActions.IInitStoreAction).fonts;
        case fontActions.ActionTypes.FETCH_FONT:
            return (action as fontActions.IInitStoreAction).fonts;
        default:
            return state;
    }
};
