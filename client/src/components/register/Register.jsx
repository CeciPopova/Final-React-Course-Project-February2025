import styles from './Register.module.css'

export default function Register() {
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
                                <form className={styles["register_form"]} action="">
                                    <div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" type="name" placeholder="Your Name" name="name" />
                                        </div>
                                        <div className='input_group'>
                                            <input type="email" className="mail_text" placeholder="Your Email" name="email" />
                                        </div>
                                        <div className='input_group'>
                                            <input type="password" className="mail_text" placeholder="Your Password" name="password" />
                                        </div>
                                        <div className='input_group'>
                                            <input type="password" className="mail_text" placeholder="Repeat Password" name="repassword" />
                                        </div>
                                    </div>
                                    <div className={styles["send_bt"]}>
                                        <button type='submit'className={styles['register-button']}>Register</button>
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