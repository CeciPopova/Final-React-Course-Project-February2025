import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useLogin } from '../../api/authApi';

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login, loading, error } = useLogin();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState("");  // Form validation error

    // Login handler
    const loginHandler = async (event) => {
        event.preventDefault();  // Prevent the default form submission

        // Reset previous errors
        setFormError("");

        // Simple form validation: Check if email and password are provided
        if (!email || !password) {
            setFormError("Please enter both email and password.");
            return;
        }

        try {
            // Call the login API using the custom hook
            const authData = await login(email, password);
            userLoginHandler(authData);  // Update the user context
            navigate('/coffees');  // Redirect to catalog page after successful login
        } catch (err) {
            console.error('Login failed:', err);
            setFormError("Invalid email or password. Please try again.");  // Show a user-friendly error message
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
                                <form
                                    className={styles["login_form"]}
                                    onSubmit={loginHandler}  // Submit the form using the login handler
                                >
                                    <div className={styles["input_group"]}>
                                        <input
                                            className="mail_text"
                                            type="email"
                                            placeholder="Your Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}  // Update email state
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
                                            onChange={(e) => setPassword(e.target.value)}  // Update password state
                                            required
                                        />
                                    </div>

                                    {/* Display form validation error */}
                                    {formError && <div className={styles["error_message"]}>{formError}</div>}

                                    {/* Display API error if any */}
                                    {error && <div className={styles["error_message"]}>{error}</div>}

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
