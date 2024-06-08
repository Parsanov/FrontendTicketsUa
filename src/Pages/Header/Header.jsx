import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Airplane from '../../assets/icons/FlyIcon/AirplaneIcon.svg';
import Train from '../../assets/icons/TrainIcon/TrainIcon.svg';
import { fetchData } from "../../Services/AccountSettingService.js";
import './Header.css';
import '../../index.css';

const Header = () => {
    const [userName, setUserName] = useState('');

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

    return (
        <nav className="Header">
            <div className="container">
                <div className="main-header">
                    <div className="logo">
                        <h1>
                            <NavLink to="/" className="link-logo">
                                TicketsUA
                            </NavLink>
                        </h1>
                    </div>
                    <div>
                        <ul className="list-services">
                            <li>
                                <img src={Airplane} className="image-icon airplane-icon" alt="Airplane Icon" />
                                <NavLink className="link" to="/Avia">
                                    Авіаквитки
                                </NavLink>
                            </li>
                            <li>
                                <img src={Train} className="image-icon train-icon" alt="Train Icon" />
                                <NavLink className="link" to="/Train">
                                    Потяги
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="profile-main">
                        <ul className="list-user">
                            {userName ? (
                                <li>
                                    <img className="img-profile"
                                         src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                                         alt="User Profile"/>
                                    <NavLink to={"/Profile"} className="link-profile">
                                        <h2>{userName}</h2>
                                    </NavLink>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink className="link" to="/Login">
                                            Увійти
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="link" to="/Registration">
                                            Реєстрація
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;