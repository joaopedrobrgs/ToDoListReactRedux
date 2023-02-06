import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        showModal: {
            reducer: (state) => {
                return state = true;
            }
        },
        hideModal: {
            reducer: (state) => {
                return state = false;
            }
        },
    }
}) 

export const {showModal, hideModal} = modalSlice.actions;

export default modalSlice.reducer;
