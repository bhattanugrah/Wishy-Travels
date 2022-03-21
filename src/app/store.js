import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        auth: AuthSlice,
        layout: LayoutReducer,
    }
})