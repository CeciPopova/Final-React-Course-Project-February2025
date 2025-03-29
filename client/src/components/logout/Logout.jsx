
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLogout } from "../../api/authApi";
import { Spinner } from "../../components/Spinner"; // Assuming you have a Spinner component

export default function Logout() {
    const { isLoggedOut, logout } = useLogout(); 

    useEffect(() => {
        logout(); // Trigger logout on mount
    }, [logout]);

    return isLoggedOut ? <Navigate to="/" /> : <Spinner />;
}
