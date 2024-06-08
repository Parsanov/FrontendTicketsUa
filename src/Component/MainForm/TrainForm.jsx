import PropTypes from 'prop-types';
import '/src/Main.css'


const TrainForm = ({ handleSubmit, formData, handleChange }) => {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input
                        placeholder="Звідки"
                        onChange={handleChange}
                        name="DepartureCity"
                        value={formData.DepartureCity}
                        type="text"
                    />
                    <input
                        placeholder="Куди"
                        onChange={handleChange}
                        name="ArrivalCity"
                        value={formData.ArrivalCity}
                        type="text"
                    />
                    <input
                        placeholder="Дата від'їзду"
                        onChange={handleChange}
                        name="DepartureDate"
                        value={formData.DepartureDate}
                        type="date"
                    />
                    <input
                        placeholder="Дата приїзду"
                        onChange={handleChange}
                        name="ArrivalDate"
                        value={formData.ArrivalDate}
                        type="date"
                    />
                    <div className="main-select">
                        <select
                            name="ClassSeat"
                            value={formData.ClassSeat}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Виберіть клас місця</option>
                            <option value="Економ">Економ</option>
                            <option value="Бізнес">Бізнес</option>
                            <option value="Перший клас">Перший клас</option>
                        </select>
                    </div>
                    <button type="submit">Знайти</button>
                </div>
            </form>
        </div>
    )
}


TrainForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        DepartureCity: PropTypes.string,
        ArrivalCity: PropTypes.string,
        DepartureDate: PropTypes.string,
        ArrivalDate: PropTypes.string,
        ClassSeat: PropTypes.string
    }).isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TrainForm