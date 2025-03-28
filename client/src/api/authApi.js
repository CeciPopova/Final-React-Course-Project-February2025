import { useContext, useState } from 'react';
import request from '../utils/requester';
import { UserContext } from '../contexts/UserContext';
import { useEffect } from 'react';

const baseUrl = 'http://localhost:3030/users';
//const baseUrl = 'https://softuni-practice-server-f4y1.onrender.com/users';

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = (email, password) => {
        setLoading(true);
        setError(null);  // Reset previous errors
        try {
            const result = request.post(`${baseUrl}/login`, { email, password });

            return result;

        } catch (err) {
            setError(err.message);
            throw err;

        } finally {
            setLoading(false);
        }
    }

    return {
        login, loading, error,
    }
}

export const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const register = (email, password) => {
        setLoading(true);
        setError(null);
        try {
            return request.post(`${baseUrl}/register`, { email, password });
        } catch (err) {

            setError(err.message);
            throw err;
        } finally {
            setLoading(false)
        }

    };

    return {
        register, loading, error,
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