import { NavLink } from 'react-router-dom';
import './Header.css';
import '../../index.css';
import Airplane from '../../assets/icons/FlyIcon/AirplaneIcon.svg';
import Train from '../../assets/icons/TrainIcon/TrainIcon.svg';

const Header = () =>
{
    return(

        <nav className="Header">
            <div className="container">
                <div className="main-header">
                    <div className="logo">
                        <h1><NavLink to="/" className="link-logo">TicketsUA</NavLink></h1>
                    </div>

                    <div>
                        <ul className="list-services">

                            <li>
                                <img src={Airplane} className="image-icon airplane-icon"></img>
                                <NavLink className="link" to='/Avia'>
                                    Авіаквитки
                                </NavLink>
                            </li>

                            <li>
                                <img src={Train} className="image-icon train-icon"></img>
                                <NavLink className="link" to='/Train'>
                                    Потяги
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="list-user">
                            <li><NavLink className="link" to='/Login'>Увійти</NavLink></li>
                            <li><NavLink className="link" to='/Registration'>Реєстрація</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

)
}

export default Header