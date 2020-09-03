import {combineReducers} from '@reduxjs/toolkit';

import fontsDataReducer from './fontDataReducer';
import activeTextReducer from './activeTextReducer';

const rootReducer = combineReducers({
    fontsData: fontsDataReducer,
    activeText: activeTextReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
