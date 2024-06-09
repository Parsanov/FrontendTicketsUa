import { useState } from 'react';
import './DetailTicket.css';
import Successfully from '../../assets/Gif/like.gif';
import Arrow from '../../assets/icons/Arrow/Arow.png';
import { useParams, useSearchParams } from "react-router-dom";
import { fetchData } from "../../Services/AccountSettingService.js";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import TrainArrivalIcon from '../../assets/icons/TrainIcon/TrainDetailIcon/board-departure.png'
import TrainDepartureIcon from '../../assets/icons/TrainIcon/TrainDetailIcon/board-arrival.png'


const DetailAirTicket = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const departureCity = searchParams.get("departureCity");
    const arrivalCity = searchParams.get("arrivalCity");
    const departureDate = new Date(searchParams.get("departureDate"));
    const arrivalDate = new Date(searchParams.get("arrivalDate"));
    const classSeat = searchParams.get("classSeat");

    const calculateFlightDuration = (departureDate, arrivalDate) => {
        const flightDurationMs = arrivalDate - departureDate;
        const hours = Math.floor(flightDurationMs / (1000 * 60 * 60));
        const minutes = Math.floor((flightDurationMs % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}г ${minutes}хв`;
    };

    const spandTime = calculateFlightDuration(departureDate, arrivalDate);

    const buyUserTicket = async () => {

        setShowModal(true);

        const user = await fetchData();

        if (!user.userId){
            console.log("User not found")
        }

        try {
            await axios.post(`https://localhost:7018/TrainTicket/BuyTicket`, { TicketId: id,  UserId: user.userId }, {
                headers: { 'Content-Type': 'application/json' }
            });

            setTimeout(() => {
                navigate('/Profile');
            }, 3000);

        } catch (error) {
            console.error("Error purchasing ticket:", error);
        }

    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='container'>
            <div className="flight-info">
                <div className="cities-container">
                    <div className="city-container">
                        <div className="city-container-departure">
                            <img src={TrainDepartureIcon} className="icon"/>
                            <div className="city-name"><span>Місто виїзду</span> {departureCity}</div>
                        </div>
                    </div>
                    <img src={Arrow} className="line"/>
                    <div className="city-container">
                        <div className="city-container-arrival">
                            <img src={TrainArrivalIcon} className="icon"/>
                            <div className="city-name">{arrivalCity}</div>
                        </div>
                        <span className="down-span">Місто приїзду</span>
                    </div>
                </div>

                <div className="time-detail">
                    <div className="flight-details-departure">
                        <div>
                            <h2>
                                {new Date(departureDate).toLocaleTimeString('uk-UA', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </h2>
                        </div>
                        <div>
                            {new Date(departureDate).toLocaleDateString('uk-UA')}
                        </div>
                    </div>

                    <div className="spand-time">
                        {spandTime}
                    </div>

                    <div className="flight-details-arrival">
                        <div>
                            <h2>
                                {new Date(arrivalDate).toLocaleTimeString('uk-UA', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </h2>
                        </div>
                        <div>{new Date(arrivalDate).toLocaleDateString('uk-UA')}</div>
                    </div>
                </div>

                <div className="help-ticket-info">
                    <div className="departure-airport">Аеропорт виліту: Шарль де Голль Термінал 1</div>
                    <div className="flight-number">Рейс OS420</div>
                    <div className="set-class">Клас квитка: {classSeat}</div>
                    <div className="arrival-airport">Аеропорт прильоту: WAW Варшава Польща ім. Фредеріка Шопена</div>
                </div>
            </div>

            <button onClick={buyUserTicket} className="button-buy">
                Придбати
            </button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>Успішна покупка!</h2>
                        <p>Ваш квиток був успішно придбаний. <img src={Successfully} alt="Success"/></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailAirTicket;
