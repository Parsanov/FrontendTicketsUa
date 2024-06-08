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
import DetailTicket from "./Pages/DetailTicket/DetailTicket.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import DetailTicketProfile from "./Pages/DetailTicket/DetailTicketProfile.jsx";

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
                    <Route path="/detail/:id" element={<DetailTicket />} />
                    <Route path="/Profile" element={<Profile/>} />
                    <Route path="/Profile/Detail/:id" element={<DetailTicketProfile/>} />
                </Routes>
                <Footer />
            </React.StrictMode>
        </BrowserRouter>
    </UserProvider>
);
