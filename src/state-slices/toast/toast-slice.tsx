import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface State {
    show: boolean;
    body: string;
}

const initialState: State =  {
    show: false,
    body: ''
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showToast(state, action) {
            state.body = action.payload.body;
            state.show = true;
        },
        hideToast(state) {
            state.show = false;
            state.body = "";
        }
    }
})

export const { showToast, hideToast } = toastSlice.actions;
export const toastState = (state: RootState) => state.toast;
export default toastSlice.reducer;