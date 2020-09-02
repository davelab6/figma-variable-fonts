import {Action} from 'redux';
import {initState} from './rootReducer';
import * as fontActions from '../actions/actionTypes';

export const fonts = (state = initState.font, action: Action) => {
    switch (action.type) {
        case fontActions.ActionTypes.INIT_STORE:
            return (action as fontActions.IInitStoreAction).font;

        default:
            return state;
    }
};
