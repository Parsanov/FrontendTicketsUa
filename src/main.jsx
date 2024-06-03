import React from 'react'
import ReactDOM from 'react-dom/client'
import Avia from './componets/Avia/Avia.jsx'
import './index.css'
import Header from "./componets/Header/Header.jsx";
import './CSS/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindTicket from './componets/FindTicket/FindTicket.jsx';
import Footer from "./componets/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <React.StrictMode>
          <Header/>
          <Routes>
              <Route path="/" element={<Avia/>} />
              <Route path="/Avia" element={<Avia/>} />
              <Route path="/FindTicket" element={<FindTicket/>} />
          </Routes>
          <Footer />
      </React.StrictMode>
  </BrowserRouter>
)
