import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice"
import chatReducer from "../features/chat/chatSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        chat: chatReducer
    }
});