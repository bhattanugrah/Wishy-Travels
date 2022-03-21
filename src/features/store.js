import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const LayoutSlice = createSlice({
    name: 'layout',
    initialState:{
        loading: false,
        modalShow: false,
        signUpModalShow: false,
        

    }
})