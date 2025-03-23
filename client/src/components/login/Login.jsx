import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { useActionState } from 'react';
import { useLogin } from '../../api/authApi';


export default function Login({
    onLogin
}) {
    const navigate = useNavigate();
    const { login } = useLogin();

    const loginHandler = async (previousState, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);

        onLogin(authData);

        navigate('/catalog');
    }
    const [values, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });


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
                                <form className={styles["login_form"]} action={loginAction}>
                                    <div className={styles["input_group"]}>
                                        <input className="mail_text" type="email" placeholder="Your Email" name="email" />
                                    </div>
                                    <div className={styles["input_group"]}>
                                        <input type="password" className="mail_text" placeholder="Your Password" name="password" />
                                    </div>
                                    <div className={styles["send_bt"]}>
                                        <button type="submit" disabled={isPending}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <p>Don&apos;t have an acount?  <strong><Link to="/register" className={styles["strong"]} > Click here for Register!</Link></strong></p>
            </div>
        </div>
    )
}