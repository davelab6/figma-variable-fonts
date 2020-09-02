import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface FontData {
    fontId: number;
    data: any;
    loading: boolean;
}

interface FontDataList {
    [key: string]: FontData;
}

type CurrentFontDataState = {
    fonts: FontDataList;
    loading: boolean;
};

let initialState: CurrentFontDataState = {
    fonts: {},
    loading: false,
};

const fontDataSlice = createSlice({
    name: 'fontData',
    initialState,
    reducers: {
        initStore(state) {
            state.fonts = {};
            state.loading = false;
        },
    },
});

export const {initStore} = fontDataSlice.actions;

export default fontDataSlice.reducer;
