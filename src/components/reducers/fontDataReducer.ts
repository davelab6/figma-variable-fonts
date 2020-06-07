import { Action } from "redux";
import { initState } from "./rootReducer";
import * as fontActions from "../actions/actionTypes";

export const fonts = (
    state = initState.fonts,
    action: Action,
) => {
    switch (action.type) {
        case fontActions.ActionTypes.INIT_STORE:
            return (action as fontActions.IInitStoreAction).fonts;
        case fontActions.ActionTypes.ADD_FONT_ITEM: {
            const fontItems = state.slice();
            const font = (action as fontActions.IAddFontAction).font;
            font.id = fontItems.length;
            font.key = fontItems.length;
            font.isCompleted = false;
            fontItems.push(font);
            return fontItems;
        }
        case fontActions.ActionTypes.COMPLETE_FONT_ITEM: {
            const fontItems = state.slice();
            const font = (action as fontActions.ICompleteFontAction).font;
            for (const item of fontItems) {
                if (item.id === font.id) {
                    item.isCompleted = true;
                    break;
                }
            }
            return fontItems;
        }
        default:
            return state;
    }
};
