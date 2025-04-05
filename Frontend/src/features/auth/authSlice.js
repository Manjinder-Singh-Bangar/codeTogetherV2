import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    refreshToken: null,
    userId : null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setAccessToken: (state, action) => {
            console.log(action)
            state.accessToken = action.payload.accessToken;
            state.userId = action.payload.userId;


        },
        setAuth: (state, action) =>{
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.userId = action.payload.userId;
            console.log("userId from the Auth slice",state.userId)
        },
        clearAuth: (state) =>{
            state.accessToken = null,
            state.refreshToken = null,
            state.userId = ""
        }
    }
})

export const {setAuth,setAccessToken, clearAuth} = authSlice.actions
export default authSlice.reducer