import axios from "../Utils/axios";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../Components/features/auth/authSlice";
import { useEffect } from "react";

const useRefreshToken = () =>{
    const dispatch = useDispatch();

    const refresh = async () =>{
        const response = await axios("users/refresh",{
            withCredentials: true
        });

        dispatch(setAccessToken({setAccessToken: response.data}))

        return response.data
    }

    return refresh();
}

export default useRefreshToken;