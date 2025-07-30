import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { loginUser } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('mtgToken'));
    const [user, setUser] = useState(() => localStorage.getItem('mtgUsername'));

    // Sync axios auth header with token
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    // Perform login: call API, set state and storage
    const login = async ({ username, password }) => {
        const result = await loginUser({ username, password });
        setToken(result.token);
        setUser(username);
        localStorage.setItem('mtgToken', result.token);
        localStorage.setItem('mtgUsername', username);
        return result;
    };

    // Logout: clear auth state
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('mtgToken');
        localStorage.removeItem('mtgUsername');
    };

    const isAuthenticated = Boolean(token);

    return (
        <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for consuming auth context
export const useAuth = () => useContext(AuthContext);
