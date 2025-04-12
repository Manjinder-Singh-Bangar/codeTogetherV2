import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../Utils/axios";

export const fetchMessages = createAsyncThunk("message/getMessage", async(recieverId) =>{
    const res = await axiosPrivate.get(`message/${recieverId}`)
    
    return res.data.data.messages
})

export const fetchReceiverUser = createAsyncThunk("message/recieverProfile", async(userId) => {
    const res = await axiosPrivate.get(`message/receiver/${userId}`)

    return res.data.data
})

export const fetchChatUsers = createAsyncThunk("message/chatusers", async () => {
    const res = await axiosPrivate.get("message/getchatusers");

    return res.data.data
})

const initialState = {
    selectedUserId: "",
    chat: [],
    chatStatus:"idle", // "idle", "pending", "successfull", "failed"
    friends: [],
    friendsStatus: "idle", // "idle", "pending", "successfull", "failed"
    error: null,
    recieverUser: null, 
    recieverUserStatus: "idle", // "idle", "pending", "successfull", "failed"
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
                state.chatStatus = "pending"
            })
            .addCase(fetchMessages.rejected, (state, action) => {
                state.chatStatus = "failed"
                state.error = action.payload
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.chat = action.payload
                state.chatStatus = "successfull"
            })
            .addCase(fetchReceiverUser.pending, (state, action) => {
                state.recieverUserStatus = "pending"
            })
            .addCase(fetchReceiverUser.rejected, (state, action) => {
                state.recieverUserStatus = "failed"
                state.error = action.payload
            })
            .addCase(fetchReceiverUser.fulfilled, (state, action) => {
                state.recieverUser = action.payload
                state.recieverUserStatus = "successfull"
            })
            .addCase(fetchChatUsers.pending, (state, action) => {
                state.friendsStatus = "pending"
            })
            .addCase(fetchChatUsers.rejected, (state, action) => {
                state.friendsStatus = "failed"
                state.error = action.payload
            })
            .addCase(fetchChatUsers.fulfilled, (state, action) => {
                state.friends = action.payload
                state.friendsStatus = "successfull"
            })
    }

})

export const getChatUsers = (state) => state.chat.friends
export const getRecieverUser = (state) => state.chat.recieverUser
export const getChatStatus = (state) => state.chat.chatStatus
export const getFriendsStatus = (state) => state.chat.friendsStatus
export const getRecieverUserStatus = (state) => state.chat.recieverUserStatus
export const getError = (state) => state.chat.error
export const getChat = (state) => state.chat.chat
export const getSelectedUserId = (state) => state.chat.selectedUserId
export const {setSelectedUserId} = chatSlice.actions;
export default chatSlice.reducer;