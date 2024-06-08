import '../../index.css';
import '../../Main.css';
import '../../Tiket.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import AirPlaneForm from "../../Component/MainForm/AirPlaneForm.jsx";
import AirTicket from "../../Component/Ticket/AirTicket.jsx";

const Avia = () => {

    const navigate = useNavigate();

    const [ticket, setTicket] = useState([]);
    const [formData, setForm] = useState({
        DepartureCity: "",
        ArrivalCity: "",
        DepartureDate: "",
        ArrivalDate: "",
        ClassSeat: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch("https://localhost:7018/AirTicket/FindTicket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });


        } catch (error) {
            console.log(error);
        }
    }


    async function handlerLoadingTicket(){
        try {
            const res = await fetch("https://localhost:7018/AirTicket/GetTikects");
            const data  = await res.json();
            return data;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }

    handlerLoadingTicket().then(ticket => setTicket(ticket));


   const handlerSelectTicket = (ticket) => {
       navigate(`/detail/${ticket.id}?departureCity=${ticket.departureCity}&arrivalCity=${ticket.arrivalCity}&departureDate=${ticket.departureDate}&arrivalDate=${ticket.arrivalDate}&classSeat=${ticket.classSeat}`);
    }

    return (
            <div className="container">
                <div className="app-conteiner">
                    <div className="main-text">
                        <h1>Купити авіаквитки по всьому світу</h1>
                    </div>
                    <AirPlaneForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
                    {
                        ticket.length > 0 && (
                            <div className="main-tickets">
                                {ticket.map((ticket) => (
                                    <AirTicket ticket={ticket} key={ticket.id} onSelectTicket={handlerSelectTicket}/>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
    )
}

export default Avia;
