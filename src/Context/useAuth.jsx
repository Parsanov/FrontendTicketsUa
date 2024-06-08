import React, { createContext, useEffect, useState } from "react";
import { loginApi, registerApi } from "../Services/AuthService.js";
import { toast } from "react-toastify";
import axios from "axios";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
            axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
        }
        setIsReady(true);
    }, []);

    const registerUser = async (email, username, password) => {
        try {
            const res = await registerApi(email, username, password);
            if (res) {
                localStorage.setItem("token", res.data.token);
                const userObj = {
                    username: res.data.username,
                    email: res.data.email,
                };
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res.data.token);
                setUser(userObj);
                toast.success("Registration Success!");
            }
        } catch (error) {
            console.log(error);
            toast.error("Registration failed");
        }
    };

    const loginUser = async (username, password) => {
        try {
            const res = await loginApi(username, password);
            if (res) {
                localStorage.setItem("token", res.data.token);
                const userObj = {
                    username: res.data.username,
                    email: res.data.email,
                };
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res.data.token);
                setUser(userObj);
                toast.success("Login Success!");
            }
        } catch (e) {
            console.log(e);
            toast.warning("Server error occurred");
        }
    };

    const isLoggedIn = () => !!user;

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
    };

    return (
        <UserContext.Provider value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}>
            {isReady ? children : null}
        </UserContext.Provider>
    );
};

export const useAuth = () => React.useContext(UserContext);