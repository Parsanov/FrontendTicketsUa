import { fetchData } from "../../Services/AccountSettingService.js";
import { useState, useEffect } from "react";
import { useAuth } from "../../Context/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { GetUserTicket } from "../../Services/ProfileFetchService.js";
import './Profile.css';
import AirTicket from "../../Component/Ticket/AirTicket.jsx";
import TrainTicket from "../../Component/Ticket/TrainTicket.jsx";

const Profile = () => {
    const [UserAirTicketData, setAirTicketData] = useState([]);
    const [UserTrainTicketData, setTrainTicketData] = useState([]);
    const [userName, setUserName] = useState("");
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserIdAndTickets = async () => {
            try {
                const userData = await fetchData();
                setUserName(userData.userName);

                if (userData) {
                    const airTicketData = await GetUserTicket(userData.userId, 'AirTicket/AccountTickets');
                    if (airTicketData) {
                        setAirTicketData(airTicketData);
                    }

                    const trainTicketData = await GetUserTicket(userData.userId, 'TrainTicket/AccountTickets');
                    if (trainTicketData) {
                        setTrainTicketData(trainTicketData);
                    }
                }
            } catch (error) {
                console.error('Помилка отримання даних користувача або квитків:', error);
            }
        };

        fetchUserIdAndTickets();
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/");
        window.location.reload();
    };

    const handleSelectAirTicket = (ticket) => {
        navigate(`/Profile/AirDetail/${ticket.id}?departureCity=${ticket.departureCity}&arrivalCity=${ticket.arrivalCity}&departureDate=${ticket.departureDate}&arrivalDate=${ticket.arrivalDate}&classSeat=${ticket.classSeat}`);
    };

    const handleSelectTrainTicket = (ticket) => {
        navigate(`/Profile/TrainDetail/${ticket.id}?departureCity=${ticket.departureCity}&arrivalCity=${ticket.arrivalCity}&departureDate=${ticket.departureDate}&arrivalDate=${ticket.arrivalDate}&classSeat=${ticket.classSeat}`);
    };

    return (
        <div className="container">
            <div className="profile-main">
                <div className="profile-info"></div>

                <div className="userName-profile">
                    <h2>Профіль {userName}</h2>
                </div>

                <div className="ticket-profile">
                    {UserAirTicketData.length > 0 && (
                        <>
                            <h2>Авіаквитки</h2>
                            <div className="main-tickets">
                                {UserAirTicketData.map((ticket) => (
                                    <AirTicket ticket={ticket} key={ticket.id} onSelectTicket={handleSelectAirTicket} />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="ticket-profile">
                    {UserTrainTicketData.length > 0 && (
                        <>
                            <h2>Залізничні квитки</h2>
                            <div className="main-tickets">
                                {UserTrainTicketData.map((ticket) => (
                                    <TrainTicket ticket={ticket} key={ticket.id} onSelectTicket={handleSelectTrainTicket} />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="logout-btn">
                    <button onClick={handleLogout}>Вихід</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
