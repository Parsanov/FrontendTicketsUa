import  {fetchData} from "../../Services/AccountSettingService.js";
import {useState, useEffect} from "react";
import { useAuth } from "../../Context/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import './Profile.css'



const Profile = () => {
    const [useName, setUserName] = useState('');
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await fetchData();
                if (userData.userName) {
                    setUserName(userData.userName);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);



    const handleLogout = () => {
        logout();
        navigate("/");
        window.location.reload();
    }


    return(
        <div className="container">
            <div className="profile-main">
                <div className="profile-info">
                    Hello Profile! {useName}

                </div>

                <div className="logout-btn">
                    <button onClick={handleLogout}>Вихід</button>
                </div>

            </div>


        </div>
    )
}

export default Profile