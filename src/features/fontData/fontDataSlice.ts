import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface FontData {
    fontId: number;
    data: any;
    loading: boolean;
}

interface FontDataList {
    [key: string]: FontData;
}

interface FontFamily {}

export interface AxisData {
    name: number;
    data: any;
    loading: boolean;
}

type CurrentFontDataState = {
    fonts: FontDataList;
    loading: boolean;
};

export interface FontAxis {
    tag: string;
    name: string;
    min: number;
    defaultValue: number;
    max: number;
}

let initialState: CurrentFontDataState = {
    fonts: {},
    loading: false,
};

const fontDataSlice = createSlice({
    name: 'fontData',
    initialState,
    reducers: {
        updateFontAxis(state, payload: PayloadAction<>) {},
        addFontFamily(state, payload: PayloadAction<>) {},
        resetStore(state) {
            state.fonts = {};
            state.loading = false;
        },
    },
});

export const {resetStore, updateFontAxis, addFontFamily} = fontDataSlice.actions;

export default fontDataSlice.reducer;
