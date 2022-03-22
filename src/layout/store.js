import { createSlice } from "@reduxjs/toolkit";

export const LayoutSlice = createSlice({
    name: 'layout',
    initialState:{
        loading: false,
        modalShow: false,
        signUpModalShow: false
    },
    reducers: {
        setModalShow: (state, action)=>{
            state.modalShow = action.payload;
        },
        setSignUpModalShow: (state, action) =>{
            state.signUpModalShow = action.payload;
        }
    }
})

export const{
    setModalShow,
    setSignUpModalShow
} = LayoutSlice.actions;

export const selectModalShow  = (state) => state.layout.modalShow;
export const selectSignUpModalShow = (state) => state.layout.signUpModalShow;

export default LayoutSlice.reducer;


