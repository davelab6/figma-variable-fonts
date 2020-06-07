import { FontData } from "../model/FontData";
import { ActionTypes, IInitStoreAction, IAddFontAction, ICompleteFontAction } from "./actionTypes";

export const initStoreAction = (fonts: FontData[]): IInitStoreAction => {
    return {type: ActionTypes.INIT_STORE, fonts};
};

export const addFontAction = (font: FontData): IAddFontAction => {
    return {type: ActionTypes.ADD_FONT_ITEM, font};
};

export const completeFontAction = (font: FontData): ICompleteFontAction => {
    return {type: ActionTypes.COMPLETE_FONT_ITEM, font};
};

export const actionCreators = {
    addFontAction,
    completeFontAction,
};
