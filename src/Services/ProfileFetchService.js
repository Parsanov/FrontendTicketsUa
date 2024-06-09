import axios from 'axios';

export const GetUserTicket = async (userId, ticketURL) => {
    try {
        const response = await axios.post(
            `https://localhost:7018/${ticketURL}`,
            { userId: userId },
            { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.data) {
            return response.data;
        } else {
            console.error("Помилка: Немає даних від API.");
            return null;
        }
    } catch (error) {
        console.error("Помилка отримання квитків:", error);
        throw error;
    }
};
