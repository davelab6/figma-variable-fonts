import {combineReducers} from '@reduxjs/toolkit';

import fontDataReducer from '../features/fontData/fontDataSlice';
import activeTextReducer from '../features/activeText/activeTextSlice';

const rootReducer = combineReducers({
    fontData: fontDataReducer,
    activeText: activeTextReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
