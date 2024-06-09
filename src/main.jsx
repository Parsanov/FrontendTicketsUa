import React from 'react'
import ReactDOM from 'react-dom/client'
import Avia from './Pages/Avia/Avia.jsx'
import './index.css'
import Header from "./Pages/Header/Header.jsx";
import './CSS/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from "./Context/useAuth.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import Train from "./Pages/Train/Train.jsx";
import Login from "./Pages/Login/Login.jsx";
import Registration from "./Pages/Register/Registration.jsx";
import DetailAirTicket from "./Pages/DetailTicket/DetailAirTicket.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import DetailAirTicketProfile from "./Pages/DetailTicket/DetailAirTicketProfile.jsx";
import DetailTrainTicket from "./Pages/DetailTicket/DetailTrainTicket.jsx";
import DetailTrainTicketProfile from "./Pages/DetailTicket/DetailTrainTicketProfile.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
        <BrowserRouter>
            <React.StrictMode>
                <Header/>
                <Routes>
                    <Route path="/" element={<Avia/>} />
                    <Route path="/Avia" element={<Avia/>} />
                    <Route path="/Train" element={<Train/>} />
                    <Route path="/Registration" element={<Registration/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/DetailAir/:id" element={<DetailAirTicket />} />
                    <Route path="/DetailTrain/:id" element={<DetailTrainTicket />} />
                    <Route path="/Profile" element={<Profile/>} />
                    <Route path="/Profile/AirDetail/:id" element={<DetailAirTicketProfile/>} />
                    <Route path="/Profile/TrainDetail/:id" element={<DetailTrainTicketProfile/>} />
                </Routes>
                <Footer />
            </React.StrictMode>
        </BrowserRouter>
    </UserProvider>
);
