import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/useAuth.jsx";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Login.css'

const LoginForm = () => {
    const { loginUser } = useAuth();
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const handleLogin = async (form) => {
        try {
           await loginUser(form.userName, form.password);
            navigate("/");
           const token = localStorage.getItem('token');

           if (token)
           {
               window.location.reload();
           }

        }catch(err) {
            console.log("err:", err);
        }

    };





    return (
        <div className="container">
            <div className="card">
                <div className="card-content">
                    <div className="card-body">
                        <h2 className="card-title">LogIn</h2>
                        <div className="form-group">
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="registration-input">
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
                                <button className="button-login" type="submit">Login</button>
                            </form>
                            <div className="registration-message-login">
                                <p className="">Досі не маєте аккаунта? <Link to={"/Registration"}>SingIn</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
