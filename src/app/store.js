import { configureStore } from "@reduxjs/toolkit";
import LayoutReducer from '../layout/store'

export const store = configureStore({
    reducer:{
        layout: LayoutReducer,
    }
});
