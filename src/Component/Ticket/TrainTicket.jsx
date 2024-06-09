import PropTypes from 'prop-types';
import TrainCompany from '../../assets/icons/TrainCompany/toppng.com-логотип-укрзалізниці-1200x428.png'

const TrainTicket = ({ ticket, onSelectTicket }) => {

    const handleSelect = () => {
        onSelectTicket(ticket);
    };


    return (
        <div className="ticket">
                <div className="airCompany">
                    <img src={TrainCompany} alt="Ukraine International Airlines"/>
                    <h2>{ticket.trainCompany}</h2>
                </div>
                <div className="flight-city">
                    <ul>
                        <li>{ticket.departureCity}</li>
                        <li>-</li>
                        <li>{ticket.arrivalCity}</li>
                    </ul>
                </div>
                <div className="date-time">
                    <ul>
                        <li>{new Date(ticket.departureDate).toLocaleTimeString('uk-UA', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</li>
                        <li>-</li>
                        <li>{new Date(ticket.arrivalDate).toLocaleTimeString('uk-UA', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</li>
                    </ul>
                </div>
                <div className="class-seat">
                    <h2>{ticket.classSeat}</h2>
                </div>
                <div className="cost-ticket">
                    <h2>{ticket.costTickets}₴</h2>
                </div>
                <div className="button-submit">
                    <button title="Submit" onClick={handleSelect}>Вибрати</button>
                </div>
        </div>


    );
}

TrainTicket.propTypes = {
    ticket: PropTypes.shape({
        trainCompany: PropTypes.string.isRequired,
        departureCity: PropTypes.string.isRequired,
        arrivalCity: PropTypes.string.isRequired,
        departureDate: PropTypes.instanceOf(Date).isRequired,
        arrivalDate: PropTypes.instanceOf(Date).isRequired,
        classSeat: PropTypes.string.isRequired,
        costTickets: PropTypes.number.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Перевірка для ticket.id
    }).isRequired,
    onSelectTicket: PropTypes.func.isRequired,  // Перевірка для onSelectTicket
};


export default TrainTicket;
