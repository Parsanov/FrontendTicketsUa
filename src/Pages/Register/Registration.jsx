import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/useAuth.jsx";
import './Registration.css'
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const { registerUser } = useAuth();
    const { register, handleSubmit} = useForm({
    });

    const navigate = useNavigate();

    const handleRegistration = async (data) => {
        try{
           await registerUser(data.email, data.userName, data.password);
            navigate("/")

           const token = localStorage.getItem('token');

            if (token){
                window.location.reload();
            }

        }catch(error){
            console.log("err:", error);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-content">
                <div className="card-body">
                    <h2 className="card-title">Signup</h2>
                    <div className="form-group">
                        <form onSubmit={handleSubmit(handleRegistration)}>
                            <div className="registration-input">
                                <div className="inputs-register">
                                    <input
                                        type="text"
                                        id="email"
                                        className={`form-control`}
                                        placeholder="Email"
                                        {...register('email')}
                                    />
                                </div>
                                <div className="inputs-register">

                                    <input
                                        type="text"
                                        id="username"
                                        className={`form-control`}
                                        placeholder="User name"
                                        {...register('userName')}
                                    />
                                </div>
                                <div className="inputs-register">

                                    <input
                                        type="password"
                                        id="password"
                                        className={`form-control`}
                                        placeholder="Password"
                                        {...register('password')}
                                    />
                                </div>
                            </div>
                            <button type="submit" >Signup</button>
                        </form>
                        <div className="login-message">
                            <p className="">Уже є аккаунт? <Link to={"/Login"}>LogIn</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    );
};

export default RegisterPage;
