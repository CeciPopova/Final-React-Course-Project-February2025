import { useContext } from 'react';
import request from '../utils/requester';
import { UserContext } from '../contexts/UserContext';
import { useEffect } from 'react';

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = (email, password) => {
        const result = request.post(`${baseUrl}/login`, { email, password });

        return result;
    }

    return {
        login,
    }
}

export const useRegister = () => {
    const register = (email, password) => {
        return request.post(`${baseUrl}/register`, { email, password });
    };

    return {
        register,
    }
}

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext)

    useEffect(() => {
        if (!accessToken) {
            return;
        }
        
        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        };
        request.get(`${baseUrl}/logout`, null, options)
            .then(userLogoutHandler);

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};