import PropTypes from 'prop-types';
import UaAirLines from '../../assets/icons/AirCompanyIcon/Ukraine-International-Airlines-Logo.png';

const Ticket = ({ ticket }) => {
    return (
        <div className="ticket">
            <div className="airCompany">
                <img src={UaAirLines} alt="Ukraine International Airlines"/>
                <h2>{ticket.airCompany}</h2>
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
                <button title="Submit">Вибрати</button>
            </div>
        </div>
    );
}

Ticket.propTypes = {
    ticket: PropTypes.shape({
        airCompany: PropTypes.string.isRequired,
        departureCity: PropTypes.string.isRequired,
        arrivalCity: PropTypes.string.isRequired,
        departureDate: PropTypes.instanceOf(Date).isRequired,
        arrivalDate: PropTypes.instanceOf(Date).isRequired,
        classSeat: PropTypes.string.isRequired,
        costTickets: PropTypes.number.isRequired,
    }).isRequired,
};

export default Ticket;
