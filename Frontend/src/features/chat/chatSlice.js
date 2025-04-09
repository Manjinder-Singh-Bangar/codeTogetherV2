import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../Utils/axios";

export const fetchMessages = createAsyncThunk("message/getMessage", async(recieverId) =>{
    const res = await axiosPrivate.get(`message/${recieverId}`)
    
    return res.data.data.messages
})

export const fetchReceiverUser = createAsyncThunk("message/recieverProfile", async(userId) => {
    const res = await axiosPrivate.get(`message/receiver/${userId}`)
    console.log(res)
    return res.data.datal
})

const initialState = {
    selectedUserId: "",
    chat: [],
    friends: null,
    error: null,
    status: "idle", // "idle", "pending", "successfull", "failed"
    recieverUser: null, 
}



const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setSelectedUserId: (state, action) => {
            state.selectedUserId = action.payload
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchMessages.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchMessages.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.chat = [action.payload]
                state.status = "successfull"
            })
            .addCase(fetchReceiverUser.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(fetchReceiverUser.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(fetchReceiverUser.fulfilled, (state, action) => {
                state.recieverUser = [action.payload]
                state.status = "successfull"
            })
    }

})


export const getRecieverUser = (state) => state.chat.recieverUser
export const getStatus = (state) => state.chat.status
export const getError = (state) => state.chat.error
export const getChat = (state) => state.chat.chat
export const getSelectedUserId = (state) => state.chat.selectedUserId
export const {setSelectedUserId} = chatSlice.actions;
export default chatSlice.reducer;