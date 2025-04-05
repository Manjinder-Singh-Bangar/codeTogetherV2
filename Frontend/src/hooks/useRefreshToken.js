import axios from "../Utils/axios";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../features/auth/authSlice";
import { useEffect } from "react";

const useRefreshToken = () =>{
    const dispatch = useDispatch();

    const refresh = async () =>{
        const response = await axios("users/refresh",{
            withCredentials: true
        });
        console.log(response.data.data.accessToken)
        dispatch(setAccessToken({accessToken: response.data.data.accessToken, userId: response.data.data.userId}))

        return response.data
    }

    return refresh;
}

export default useRefreshToken;