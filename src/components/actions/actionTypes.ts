import { Action } from "redux";
import { FontData } from "../model/FontData";

export const ActionTypes = {
    INIT_STORE: "INIT_STORE",
    ADD_FONT_ITEM: "ADD_FONT_ITEM",
    COMPLETE_FONT_ITEM: "COMPLETE_FONT_ITEM",
};

export interface IInitStoreAction extends Action {
    fonts: FontData[];
}

export interface IAddFontAction extends Action {
    font: FontData;
}

export interface ICompleteFontAction extends Action {
    font: FontData;
}
