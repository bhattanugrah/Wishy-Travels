import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name: 'auth',
    initialState:{
        loading: false,
        message:'',
        token:'',


        user:{
            id: 0,
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            email_verified_at: new Date(),
            phone_verified_at: new Date() | null,
            status: true,
            created_at: new Date(),
            updated_at: new Date()
        },
        scopes:[],
        settings: {
            key: '',
            value: ''
        },
        isLoggedIn: false
    },
    reducers:{
        /*Start Common*/
        setLoading:(state, action)=>{
            state.loading = action.payload;
        },
        setAlert:(state, action) =>{
            state.message = action.payload;
        },
        setToken:(state, action)=>{
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
            state.isLoggedIn = true;
        },
        setRToken:(state, action)=>{
            localStorage.setItem("refresh", action.payload);
            state.token = action.payload;
        },
        /* End Common*/

        /*Start User*/
        setUser:(state, action)=>{
            state.user = action.payload;
        },
        setScope:(state, action)=>{
            localStorage.setItem('scopes', JSON.stringify(action.payload));
            state.scopes = action.payload;
        },
        setSetting:(state, action) =>{
            localStorage.setItem('settings', JSON.stringify(action.payload));
            state.settings = action.payload;
        },
        setLoggedIn:(state, action) => {
            state.isLoggedIn = action.payload;
        },
        refresh:state=>{
            const token = localStorage.getItem("token");
            state.token = token || '';
            state.isLoggedIn = token? true:false;
        }
        /* END USER*/
    }
});

export const {
    setLoading,
    setAlert,
    setToken,
    setRToken,
    setUser,
    setScope,
    setSetting,
    setLoggedIn,
    refresh
} = AuthSlice.actions;

//start user
export const logUser = () =>(dispatch) =>{
    dispatch(setUser());
    dispatch(setToken(token));
    dispatch(setRToken(refresh));
    dispatch(setScope(scope));
    dispatch(setSetting(setting));  
    dispatch(setLoading(false));
}