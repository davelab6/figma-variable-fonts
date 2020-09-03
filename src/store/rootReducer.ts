import {combineReducers} from '@reduxjs/toolkit';

import fontsDataReducer from '../features/fontData/fontDataSlice';
import activeTextReducer from '../features/activeText/activeTextSlice';

const rootReducer = combineReducers({
    fontsData: fontsDataReducer,
    activeText: activeTextReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
