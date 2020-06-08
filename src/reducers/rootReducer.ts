import {combineReducers} from 'redux';
import {IState} from '../store/configStore';
import {fonts} from './fontDataReducer';

export const initState: IState = {
    fonts: [],
};

export const rootReducer = combineReducers({
    fonts,
});
