import { useContext, useState } from 'react';
import { useRegister } from '../../api/authApi';
import styles from './Register.module.css';
import { UserContext } from '../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState('');
    const [formError, setFormError] = useState("");  // Form validation error
    const [error, setError] = useState("");  // API error
    const [loading, setLoading] = useState(false);  // Track if the request is pending

    // Register handler
    const registerHandler = async (event) => {
        event.preventDefault();  // Prevent the default form submission

        // Reset previous errors
        setFormError("");
        setError("");

        // Simple form validation: Check if all fields are provided
        if (!name || !email || !password || !confirmPassword || !image) {
            setFormError("All fields are required.");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setFormError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);  // Set loading state

            // Call the register API using the custom hook
            const authData = await register(email, password);

            userLoginHandler(authData);  // Update the user context
            navigate('/');  // Redirect to home page after successful registration

        } catch (err) {
            console.error('Registration failed:', err);
            setError("An error occurred during registration. Please try again.");  // Show a user-friendly error message
        } finally {
            setLoading(false);  // Reset loading state
        }
    };

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
                                <form
                                    className={styles["register_form"]}
                                    onSubmit={registerHandler}  // Submit the form using the register handler
                                >
                                    <div className={styles["input_group"]}>
                                        <input
                                            className="mail_text"
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}  // Update name state
                                            required
                                        />
                                    </div>
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
                                    <div className={styles["input_group"]}>
                                        <input
                                            type="password"
                                            className="mail_text"
                                            placeholder="Confirm Password"
                                            name="confirm-password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}  // Update confirm password state
                                            required
                                        />
                                    </div>
                                    <div className='input_group'>
                                        <input
                                            type="text"
                                            className="mail_text"
                                            placeholder="Profile picture"
                                            name="image"
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        />
                                    </div>
                                    {/* Display form validation error */}
                                    {formError && <div className={styles["error_message"]}>{formError}</div>}

                                    {/* Display API error if any */}
                                    {error && <div className={styles["error_message"]}>{error}</div>}

                                    <div className={styles["send_bt"]}>
                                        <button type="submit" disabled={loading}>
                                            {loading ? "Registering..." : "Register"}
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
                    Already have an account?{" "}
                    <strong>
                        <Link to="/login" className={styles["strong"]}>
                            Click here to Login!
                        </Link>
                    </strong>
                </p>
            </div>
        </div>
    );
}
