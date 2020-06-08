import {FontData} from '../model/FontData';
import {ActionTypes, IInitStoreAction, IFetchFontAction, ICompleteFontAction} from './actionTypes';

export const initStoreAction = (fonts: FontData[]): IInitStoreAction => {
    return {type: ActionTypes.INIT_STORE, fonts};
};

export const fetchFontAction = (font: FontData): IFetchFontAction => {
    return {type: ActionTypes.FETCH_FONT, font};
};

export const completeFontAction = (font: FontData): ICompleteFontAction => {
    return {type: ActionTypes.COMPLETE_FONT_ITEM, font};
};

export const actionCreators = {
    fetchFontAction,
    completeFontAction,
};
