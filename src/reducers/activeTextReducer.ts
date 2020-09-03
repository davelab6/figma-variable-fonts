import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SelectedText {
    status: string;
    message: string;
    content: string;
    fontSize: number;
}

type CurrentActiveTextState = {} & SelectedText;

let initialState: CurrentActiveTextState = {
    status: 'not-loaded',
    message: '',
    content: 'This is a test',
    fontSize: 14,
};

const activeTextSlice = createSlice({
    name: 'activeText',
    initialState,
    reducers: {
        updateSelection(state, action: PayloadAction<SelectedText>) {
            const {status, message, content, fontSize} = action.payload;
            state.status = status;
            if (status === 'error') {
                state.message = message;
            }
            if (status === 'success') {
                state.message = '';
                state.content = content;
                state.fontSize = fontSize;
            }
        },
    },
});

export const {updateSelection} = activeTextSlice.actions;

export default activeTextSlice.reducer;
