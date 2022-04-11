import { configureStore } from "@reduxjs/toolkit";
import LayoutReducer from '../layout/store'
import AuthReducer from '../features/auth/store'

export const store = configureStore({
    reducer:{
        layout: LayoutReducer,
        auth: AuthReducer
    }
});
