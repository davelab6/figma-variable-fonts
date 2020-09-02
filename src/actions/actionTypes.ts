import {Action} from 'redux';
import {FontData} from '../model/FontData';

export const ActionTypes = {
    INIT_STORE: 'INIT_STORE',
    FETCH_FONT: 'FETCH_FONT',
    COMPLETE_FONT_ITEM: 'COMPLETE_FONT_ITEM',
};

export interface IInitStoreAction extends Action {
    font: FontData;
}

export interface IFetchFontAction extends Action {
    font: FontData;
}

export interface ICompleteFontAction extends Action {
    font: FontData;
}
