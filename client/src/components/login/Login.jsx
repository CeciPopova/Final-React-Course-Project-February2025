import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useLogin } from '../../api/authApi';
import { toast} from 'react-toastify'

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login, loading, error: apiError } = useLogin();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState("");  

    const loginHandler = async (event) => {
        event.preventDefault();
        setFormError(""); 

    
        if (!email || !password) {
            setFormError("Please enter both email and password.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setFormError("Please enter a valid email address.");
            return;
        }

        if (password.length < 4) {
            setFormError("Password must be at least 4 characters long.");
            return;
        }

        try {
            const authData = await login(email, password);
            userLoginHandler(authData); 

            toast('Successful Login',{type: 'success'});

            navigate('/profile');  
        } catch (err) {
            console.log(err);
            toast(err.message,{type: 'error'})
        }
    };

    return (
        <div className={styles["login_section"]}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="contact_taital">Login</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mail_section_1">
                                <form className={styles["login_form"]} onSubmit={loginHandler}>
                                    <div className={styles["input_group"]}>
                                        <input
                                            className="mail_text"
                                            type="email"
                                            placeholder="Your Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={loading}
                                            required
                                        />
                                    </div>
                                    <div className={styles["input_group"]}>
                                        <input
                                            type="password"
                                            className="mail_text"
                                            placeholder="Your Password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            disabled={loading}
                                            required
                                        />
                                    </div>

                                    {/* Display validation errors */}
                                    {formError && <div className={styles["error_message"]}>{formError}</div>}

                                    {/* Display API error if any */}
                                    {apiError && <div className={styles["error_message"]}>{apiError}</div>}

                                    <div className={styles["send_bt"]}>
                                        <button type="submit" disabled={loading}>
                                            {loading ? "Logging in..." : "Login"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p>
                    Don&apos;t have an account?{" "}
                    <strong>
                        <Link to="/register" className={styles["strong"]}>
                            Click here to Register!
                        </Link>
                    </strong>
                </p>
            </div>
        </div>
    );
}
