import { useContext, useState } from 'react';
import { useRegister } from '../../api/authApi';
import styles from './Register.module.css'
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const { register, error, loading } = useRegister();
    const { userLoginHandler } = useContext(UserContext);

    const [errorMessage, setErrorMessage] = useState("");

    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }


        try {
            const authData = await register(email, password);
            //console.log(authData);
            userLoginHandler(authData);  // Store the user in context
            navigate('/');  // Redirect to homepage
        } catch (err) {
            // This block is executed if registration fails
            console.error("Registration error:", err);
            setErrorMessage(error || "Registration failed. Please try again.");
        }

    }
    return (
        <div className={styles["register_section"]}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="contact_taital">Register</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mail_section_1">
                                <form className={styles["register_form"]} action={registerHandler}>
                                    <div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" type="name" placeholder="Your Name" name="name" required />
                                        </div>
                                        <div className='input_group'>
                                            <input type="email" className="mail_text" placeholder="Your Email" name="email" required />
                                        </div>
                                        <div className='input_group'>
                                            <input type="password" className="mail_text" placeholder="Your Password" name="password" required />
                                        </div>
                                        <div className='input_group'>
                                            <input type="password" className="mail_text" placeholder="Confirm Password" name="confirm-password" required />
                                        </div>
                                    </div>

                                    
                                    {/* Display the error message if it exists */}
                                    {errorMessage && <div className={styles["error_message"]}>{errorMessage}</div>}
                                    {error && !errorMessage && <div className={styles["error_message"]}>{error}</div>}


                                    <div className={styles["send_bt"]}>
                                        <button type='submit' className={styles['register-button']} disabled={loading}> {loading ? "Registering..." : "Register"}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}