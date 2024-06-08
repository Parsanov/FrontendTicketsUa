import axios from 'axios';


export const GetUserTicket = async (userId) => {
    try {
        const response = await axios.post(
            `https://localhost:7018/AirTicket/AccountTickets`,
            { userId: userId},
            { headers: { 'Content-Type': 'application/json' } }
        );

        if (response) {
            return response.data;
        } else {
            console.error("Помилка: Немає даних від API.");
            return null;
        }
    } catch (error) {
        console.error("Помилка отримання квитків:", error);
        throw error;
    }
}