import { useNavigate, useParams } from 'react-router-dom'
import styles from './Edit.module.css'
import {  useCoffee, useEditCoffee } from '../../api/coffeeApi';


export default function Edit() {
    const navigate = useNavigate();
    const { coffeeId } = useParams();
    const { edit } = useEditCoffee();
    const {coffee} = useCoffee(coffeeId);
    
    

    const formAction = async (formData) => {
        const coffeeData = Object.fromEntries(formData);

        await edit(coffeeId, coffeeData);

        navigate(`/coffees/${coffeeId}/details`);
    }


    return (
        <div className={styles["create_section"]}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="contact_taital">Edit Coffee</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mail_section_1">
                                <form className={styles["create_form"]} action={formAction} >
                                    <div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" type="text" defaultValue={coffee.name} name="name" />
                                        </div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" type="text" defaultValue={coffee.ingredients} name="ingredients" />
                                        </div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" type="text" defaultValue={coffee.caffeine_mg} name="caffeine_mg" />
                                        </div>
                                        <div className='input_group'>
                                            <input type="text" className="mail_text" defaultValue={coffee.serving_size_ml} name="serving_size_ml" />
                                        </div>
                                        <div className='input_group'>
                                            <input type="text" className="mail_text" defaultValue={coffee.price} name="price" />
                                        </div>
                                        <div className='input_group'>
                                            <input type="text" className="mail_text" defaultValue={coffee.image} name="image" />
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
}