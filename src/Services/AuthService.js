import axios from "axios";

export const loginApi = async (userName, password) => {
    try {
        const response = await axios.post("https://localhost:7018/Login", {
            userName,
            password
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const registerApi = async (email, userName, password) => {
    try {
        const response = await axios.post("https://localhost:7018/Register", {
            email,
            userName,
            password
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};
