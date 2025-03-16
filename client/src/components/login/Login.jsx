import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login() {
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
                                <form className={styles["login_form"]} action="">
                                    <div className={styles["input_group"]}>
                                        <input className="mail_text" type="name" placeholder="Your Name" name="name" />
                                    </div>
                                    <div className={styles["input_group"]}>
                                        <input type="password" className="mail_text" placeholder="Your Password" name="password" />
                                    </div>
                                    <div className={styles["send_bt"]}>
                                        <button type="submit">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <p>Don&apos;t have an acount?  <strong><Link className={styles["strong"]} to="/register"> Click here for Register!</Link></strong></p>
            </div>
        </div>
    )
}