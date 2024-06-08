import axios from 'axios';


const JWTRequest = async (token) => {
    try {
        const response = await axios.post("https://localhost:7018/JwtData", { token });
        return response.data;
    } catch (error) {
        console.error('Error in JWTRequest:', error);
        throw error;
    }
};


export const fetchData = async () => {
    try {
        const userToken = localStorage.getItem('token');
        if (!userToken) {
            throw new Error('Token not found in localStorage');
        }

        const data = await JWTRequest(userToken);

        if (data) {
            return data;
        } else {
            throw new Error("Failed to fetch valid user data from JWT.");
        }
    } catch (error) {
        console.error('Error in fetchData:', error);
        throw error;
    }
};
