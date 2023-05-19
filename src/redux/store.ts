import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";

import modalSlice from "./modal/modalSlice";

export const store = configureStore({
    reducer: {
        modal: modalSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
