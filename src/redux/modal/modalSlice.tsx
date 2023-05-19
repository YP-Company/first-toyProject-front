import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean;
    title: string;
    content: string;
    move: string | (() => void);
}

const initialState: ModalState = {
    isOpen: false,
    title: "",
    content: "",
    move: "",
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state, action) {
            const { isOpen, title, content, move } = action.payload;
            state.isOpen = isOpen;
            state.title = title;
            state.content = content;
            state.move = move;
        },

        closeModal(state) {
            state.isOpen = false;
        },
        // Add any additional modal actions here
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
