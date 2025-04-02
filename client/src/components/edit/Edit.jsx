import { Navigate, useNavigate, useParams } from 'react-router-dom'
import styles from './Edit.module.css'
import { useCoffee, useEditCoffee } from '../../api/coffeeApi';
import useAuth from '../../hooks/useAuth';
import Spinner from '../spinner/Spinner';


export default function Edit() {
    const navigate = useNavigate();
    const { userId } = useAuth()
    const { coffeeId } = useParams();
    const { edit } = useEditCoffee();
    const { coffee } = useCoffee(coffeeId);

    if (!coffee) {
        <Spinner />
        return <h1>Loading coffee data...</h1>;
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const coffeeData = Object.fromEntries(formData);

        try {
            await edit(coffeeId, coffeeData);

            navigate(`/coffees/${coffeeId}/details`);
        } catch (error) {
            console.error("Failed to edit coffee:", error);
            
            alert("Error editing coffee. Please try again.");
        }
    };


    const isOwner = userId === coffee._ownerId;
    if (!isOwner) {
        <Navigate to="/coffees" />
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
                                <form className={styles["create_form"]} onSubmit={formSubmitHandler} >
                                    <div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" 
                                            type="text" 
                                            defaultValue={coffee.name} 
                                            name="name" 
                                            required
                                            />
                                        </div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" 
                                            type="text" 
                                            defaultValue={coffee.ingredients} 
                                            name="ingredients" 
                                            required
                                            />
                                        </div>
                                        <div className={styles['input_group']}>
                                            <input className="mail_text" 
                                            type="text" 
                                            defaultValue={coffee.caffeine_mg} 
                                            name="caffeine_mg" 
                                            required
                                            />
                                        </div>
                                        <div className='input_group'>
                                            <input type="text" 
                                            className="mail_text" 
                                            defaultValue={coffee.serving_size_ml} 
                                            name="serving_size_ml" 
                                            required
                                            />
                                        </div>
                                        <div className='input_group'>
                                            <input type="text" 
                                            className="mail_text" 
                                            defaultValue={coffee.price} 
                                            name="price" 
                                            required
                                            />

                                        </div>
                                        <div className='input_group'>
                                            <input 
                                            type="text" 
                                            className="mail_text" 
                                            defaultValue={coffee.image} 
                                            name="image" 
                                            required
                                            />
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