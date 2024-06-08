import  {fetchData} from "../../Services/AccountSettingService.js";
import {useState, useEffect} from "react";
import { useAuth } from "../../Context/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import  { GetUserTicket } from "../../Services/ProfileFetchService.js";
import './Profile.css'
import AirTicket from "../../Component/Ticket/AirTicket.jsx";



const Profile = () => {
    const [UserTiketData, setTiketData] = useState([]);
    const [userName, setUserName] = useState("");
    const { logout } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        const fetchUserIdAndTickets = async () => {
            try {
                const userData = await fetchData();
                setUserName(userData.userName)

                if (userData) {
                    const tiketData = await GetUserTicket(userData.userId);
                    if (tiketData) {
                        setTiketData(tiketData);
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
    }



    const handlerSelectTicket = (ticket) => {
        navigate(`/Profile/Detail/${ticket.id}?departureCity=${ticket.departureCity}&arrivalCity=${ticket.arrivalCity}&departureDate=${ticket.departureDate}&arrivalDate=${ticket.arrivalDate}&classSeat=${ticket.classSeat}`);
    }

    return(
        <div className="container">
            <div className="profile-main">
                <div className="profile-info">
                </div>

                <div className="userName-profile">
                    <h2>Profile {userName}</h2>
                </div>

                <div>
                    {
                        UserTiketData.length > 0 && (
                            <div className="main-tickets">
                                {UserTiketData.map((ticket) => (
                                    <AirTicket ticket={ticket} key={ticket.id} onSelectTicket={handlerSelectTicket}/>
                                ))}
                            </div>
                        )
                    }
                </div>

                <div className="logout-btn">
                    <button onClick={handleLogout}>Вихід</button>
                </div>

            </div>


        </div>
    )
}

export default Profile