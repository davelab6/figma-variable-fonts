import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {FontDataList /*FontData, FontFamily, AxisData, FontAxis*/} from './types.d';

type CurrentFontDataState = {
    fonts: FontDataList;
    loading: boolean;
};

const initialState: CurrentFontDataState = {
    fonts: {},
    loading: false,
};

const fontDataSlice = createSlice({
    name: 'fontData',
    initialState,
    reducers: {
        updateFontAxis(state, payload: PayloadAction<string>) {
            // state.
        },
        addFontFamily(state, payload: PayloadAction<string>) {},
        resetStore(state) {
            state.fonts = {};
            state.loading = false;
        },
    },
});

export const {resetStore, updateFontAxis, addFontFamily} = fontDataSlice.actions;

export default fontDataSlice.reducer;
