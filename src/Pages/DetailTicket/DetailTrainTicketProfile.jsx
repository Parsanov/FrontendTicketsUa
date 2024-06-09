
import './DetailTicket.css';
import './DetailTicketProfile.css'
import Arrow from '../../assets/icons/Arrow/Arow.png';
import { useParams, useSearchParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import TrainArrivalIcon from '../../assets/icons/TrainIcon/TrainDetailIcon/board-departure.png'
import TrainDepartureIcon from '../../assets/icons/TrainIcon/TrainDetailIcon/board-arrival.png'

const DetailTicket = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const departureCity = searchParams.get("departureCity");
    const arrivalCity = searchParams.get("arrivalCity");
    const departureDate = new Date(searchParams.get("departureDate"));
    const arrivalDate = new Date(searchParams.get("arrivalDate"));
    const classSeat = searchParams.get("classSeat");
    const navigate = useNavigate();

    const calculateFlightDuration = (departureDate, arrivalDate) => {
        const flightDurationMs = arrivalDate - departureDate;
        const hours = Math.floor(flightDurationMs / (1000 * 60 * 60));
        const minutes = Math.floor((flightDurationMs % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}г ${minutes}хв`;
    };

    const spandTime = calculateFlightDuration(departureDate, arrivalDate);


    const DeleteTicket = async () => {
            await axios.post(`https://localhost:7018/AirTicket/DeleteTicket`, {ticketId: id});

        setTimeout(() => {
            navigate('/Profile');
        }, 3000);
    }


    return (
        <div className='container'>
            <div className="flight-info">
                <div className="cities-container">
                    <div className="city-container">
                        <div className="city-container-departure">
                            <img src={TrainArrivalIcon} className="icon"/>
                            <div className="city-name"><span>Місто виїзду</span> {departureCity}</div>
                        </div>
                    </div>
                    <img src={Arrow} className="line"/>
                    <div className="city-container">
                        <div className="city-container-arrival">
                            <img src={TrainDepartureIcon} className="icon"/>
                            <div className="city-name">{arrivalCity}</div>
                        </div>
                        <span className="down-span">Місто виїзду</span>
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
                    <div className="departure-airport">Станція відїзду: Шарль де Голль Термінал 1</div>
                    <div className="flight-number">Рейс OS420</div>
                    <div className="set-class">Клас квитка: {classSeat}</div>
                    <div className="arrival-airport">Станція приїзду: WAW Варшава Польща ім. Фредеріка Шопена</div>
                </div>
            </div>

            <button onClick={DeleteTicket} className="button-delete">
                Видалити квиток
            </button>


        </div>
    );
};

export default DetailTicket;
