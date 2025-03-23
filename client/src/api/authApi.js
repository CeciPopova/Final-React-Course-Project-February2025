import request from '../utils/requester';

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
        return request.post(`${baseUrl}/register`, {email, password });
    };

    return {
        register,
    }
}