import '../../index.css';
import './Avia.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AirPlaneForm from "../../Pages/AirPlaneForm/AirPlaneForm.jsx";

const Avia = () => {
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

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://localhost:7018/AirTicket/FindTicket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                navigate("/FindTicket");
            } else {
                console.log("Помилка відправки форми");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
            <div className="container">
                <div className="app-conteiner">
                    <div className="main-text">
                        <h1>Купити авіаквитки по всьому світу</h1>
                    </div>
                    <AirPlaneForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
                </div>
            </div>
    )
}

export default Avia;
