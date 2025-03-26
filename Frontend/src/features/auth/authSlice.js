import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    refreshToken: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setAuth: (state, action) =>{
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        clearAuth: (state) =>{
            state.accessToken = null,
            state.refreshToken = null
        }
    }
})

export const {setAuth,setAccessToken, clearAuth} = authSlice.actions
export default authSlice.reducer