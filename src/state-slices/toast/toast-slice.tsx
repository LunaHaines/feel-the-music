import { createSlice } from "@reduxjs/toolkit";
import { ReactElement } from "react";

interface State {
    show: boolean;
    body: string;
    header: ReactElement;
}

const initialState: State =  {
    show: false,
    body: '',
    header: <></>
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showToast(state, action) {
            state.header = action.payload.header;
            state.body = action.payload.body;
            state.show = true;
        },
        hideToast(state, action) {
            state.show = false;
            state.body = "";
            state.header = <></>;
        }
    }
})