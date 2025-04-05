import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from '../hooks/useRefreshToken';
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../features/auth/authSlice";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const auth = useSelector((state) => state.auth)

    useEffect(() => {

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, [auth?.accessToken])

    return (
        <>
            {isLoading
                ? <p>Loading...</p>
                : <Outlet />
                    
            }
        </>
    )
}

export default PersistLogin