import {combineReducers} from '@reduxjs/toolkit';
import fontsDataReducer from './fontDataReducer';

const rootReducer = combineReducers({
    fontsData: fontsDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
