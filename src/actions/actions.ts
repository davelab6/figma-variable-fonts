import {FontData} from '../model/FontData';
import {ActionTypes, IInitStoreAction, IFetchFontAction, ICompleteFontAction} from './actionTypes';

export const initStoreAction = (font: FontData): IInitStoreAction => {
    return {type: ActionTypes.INIT_STORE, font};
};

export const fetchFontAction = (font: FontData): IFetchFontAction => {
    return {type: ActionTypes.FETCH_FONT, font};
};

export const actionCreators = {
    fetchFontAction,
    completeFontAction,
};
