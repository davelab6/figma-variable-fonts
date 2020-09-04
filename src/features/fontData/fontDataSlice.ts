import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FontAxisAssignment {
    [key: string]: number;
}
interface FontInstance {
    fvs: FontAxisAssignment;
    glyphs: any[];
    id: number;
    name: string;
    static: any;
    tuple: number[];
    type: string;
}

export interface FontAxis {
    axisNameID: number;
    default: number;
    flags: number;
    id: number;
    max: number;
    min: number;
    name: string;
    tag: string;
}

interface FontFamilyData {
    instances: FontInstance[];
    axes: FontAxis[];
    filename: string;
    names: string[];
    fontFamilyName: string;
    designer: string;
    fontUniqueIdentifier: string;
}

interface ActiveAxis {
    current: number;
    name: string;
    tag: string;
}

interface ActiveFont {
    name: string;
    type: string;
    fvs: FontAxisAssignment;
    axes: {[key: string]: ActiveAxis};
}

interface FontDataList {
    [key: string]: FontFamilyData;
}

interface FontAxisData {
    axes: ActiveAxis[];
}

type CurrentFontDataState = {
    fonts: FontDataList;
    loading: boolean;
    activeFont: ActiveFont | null;
};

const initialState: CurrentFontDataState = {
    fonts: {},
    activeFont: null,
    loading: false,
};

const fontDataSlice = createSlice({
    name: 'fontData',
    initialState,
    reducers: {
        updateFontAxis(state, payload: PayloadAction<FontAxisData>) {
            const {axes} = payload;
            if (state.activeFont !== null) {
                axes.forEach((axis) => {
                    state.activeFont.axes[axis.tag].current = axis.current;
                });
            }
        },
        addFontFamily(state, payload: PayloadAction<FontFamilyData>) {
            const {fontName, names, filename, axes, instances} = payload;
            state.fonts[fontName] = {
                names,
                filename,
                axes,
                instances,
            };
            if (names) {
                state.fonts[fontName]['fontUniqueIdentifier'] = names[3];
                state.fonts[fontName]['fontFamilyName'] = names[4];
                state.fonts[fontName]['designer'] = names[9];
            }
        },
        resetStore(state) {
            state.fonts = {};
            state.loading = false;
        },
    },
});

export const {resetStore, updateFontAxis, addFontFamily} = fontDataSlice.actions;

export default fontDataSlice.reducer;
