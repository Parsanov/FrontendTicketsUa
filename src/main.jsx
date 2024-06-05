import React from 'react'
import ReactDOM from 'react-dom/client'
import Avia from './componets/Avia/Avia.jsx'
import './index.css'
import Header from "./componets/Header/Header.jsx";
import './CSS/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./componets/Footer/Footer.jsx";
import Train from "./componets/Train/Train.jsx";
import Login from "./componets/Login/Login.jsx";
import Registration from "./componets/Register/Registration.jsx";
import DetailTicket from "./componets/DetailTicket/DetailTicket.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <React.StrictMode>
          <Header/>
          <Routes>
              <Route path="/" element={<Avia/>} />
              <Route path="/Avia" element={<Avia/>} />
              <Route path="/Train" element={<Train/>} />
              <Route path="/Registration" element={<Registration/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Detail/:id" element={<DetailTicket />} />
          </Routes>
          <Footer />
      </React.StrictMode>
  </BrowserRouter>
)
