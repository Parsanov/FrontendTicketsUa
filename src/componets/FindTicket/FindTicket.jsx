import '../../index.css';
import './FindTicket.css';
import UaAirLines from '../../assets/icons/AirCompanyIcon/Ukraine-International-Airlines-Logo.png';
import {useState, useEffect} from 'react';
import Avia from "../Avia/Avia.jsx";
import Ticket from "../../Pages/Ticket/Ticket.jsx";


const FindTicket = () => {
    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7018/AirTicket/GetTikects")
            .then(res => res.json())
            .then(data => setTicket(data));
    }, []);



    return (
        <div className="container">

            <Avia />

            <div className="main-tickets">
                {ticket.map((ticket) => (
                   <Ticket ticket={ticket} key={ticket.id} />
                ))}
            </div>
        </div>
    )
}

export default FindTicket