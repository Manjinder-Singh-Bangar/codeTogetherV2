import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { axiosPrivate } from "../../Utils/axios";
import { useSelector } from "react-redux";



const initialState = {
    user:  null,
    error: null,
    status: "idle",
    allUsers: [
        
    ]
}

export const fetchUserDetails = createAsyncThunk("user/profile", async (userId) => {
    const res = await axiosPrivate.get(`users/userDetails/${userId}`)
    console.log(res)
    return res.data.data
})



export const fetchAllUsers = createAsyncThunk("user/allUsers", async () => {
    const res = await axiosPrivate.get('users/people')
    console.log(res)
    return res.data.data
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUserInfo: (state, action) =>{
            state.user = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(fetchUserDetails.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error
        })
        .addCase(fetchUserDetails.pending, (state, action) => {
            state.status = "pending"
        })
        .addCase(fetchUserDetails.fulfilled, (state, action) => {
            state.status = "successfull"
            state.user = action.payload
        })  
        .addCase(fetchAllUsers.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error
        })
        .addCase(fetchAllUsers.pending, (state) => {
            state.status = "pending"
        })
        .addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.status = "successfull"
            state.allUsers = [...state.allUsers, action.payload]
        })
        
    }
})

export const getUser = (state) => state.user.user
export const getStatus = (state) => state.user.status
export const getError = (state) => state.user.error
export const getAllUsers = (state) => state.user.allUsers

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
