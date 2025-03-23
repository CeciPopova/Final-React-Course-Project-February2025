import { useNavigate } from 'react-router-dom'
import styles from './Create.module.css'

import { useCreateCoffee } from '../../api/coffeeApi';

export default function Create() {
    const navigate = useNavigate();
    const {create} = useCreateCoffee();

    const submitAction = async (formData) => {
        const coffeeData = Object.fromEntries(formData);

        await create(coffeeData);

        navigate('/catalog');
    }

    return (
        <div className={styles["create_section"]}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="contact_taital">Add new Coffee</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mail_section_1">
                                <form className={styles["create_form"]} action={submitAction}>
                                    <div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" type="text" placeholder="Coffee Name" name="name" />
                                        </div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" type="text" placeholder="Ingredients" name="ingredients" />
                                        </div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" type="number" placeholder="Caffeine mg" name="caffeine_mg" />
                                        </div>
                                        <div className='input_group'>
                                            <input type="number" className="mail_text" placeholder="Serving size ml" name="serving_size_ml"  />
                                        </div>
                                        <div className='input_group'>
                                            <input type="number" className="mail_text" placeholder="Price" name="price" />
                                        </div>
                                        <div className='input_group'>
                                            <input type="text" className="mail_text" placeholder="Image URL" name="image" />
                                        </div>
                                    </div>
                                    <div className={styles["send_bt"]}>
                                        <button type='submit' className={styles['add-button']}>Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )



        // <div className="contact_section layout_padding">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-sm-12">
        //                 <h1 className="contact_taital">Get In Touch</h1>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="container-fluid">
        //         <div className="contact_section_2">
        //             <div className="row">
        //                 <div className="col-md-12">
        //                     <div className="mail_section_1">
        //                         <input type="text" className="mail_text" placeholder="Your Name" name="Your Name" />
        //                         <input type="text" className="mail_text" placeholder="Your Email" name="Your Email" />
        //                         <input type="text" className="mail_text" placeholder="Your Phone" name="Your Phone" />
        //                         <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
        //                         <div className="send_bt"><a href="#">Send</a></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    
}