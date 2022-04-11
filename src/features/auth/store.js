import { createSlice } from "@reduxjs/toolkit";


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
            email: ''
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
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
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
            localStorage.setItem('User', JSON.stringify(action.payload));
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
export const logUser = (response) =>(dispatch) =>{
    dispatch(setUser(response.loggedUser));
    dispatch(setToken(response.token));
    // console.log(response.firstName, response.lastName, response.email, response.username)
    // dispatch(setRToken(response.refresh));
    dispatch(setLoading(false));
}

export const logOutUser = () =>async (dispatch) =>{
    localStorage.clear();
    dispatch(refresh())
}

export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;


export default AuthSlice.reducer;
