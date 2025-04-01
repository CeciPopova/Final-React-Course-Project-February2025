import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Create.module.css';
import { useCreateCoffee } from '../../api/coffeeApi';

export default function Create() {
    const navigate = useNavigate();
    const { create } = useCreateCoffee();

    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [caffeineMg, setCaffeineMg] = useState('');
    const [servingSize, setServingSize] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [formError, setFormError] = useState('');
    const [apiError, setApiError] = useState('');
    const [loading, setLoading] = useState(false);

    const submitAction = async (event) => {
        event.preventDefault();
        setFormError('');
        setApiError('');

        if (!name || !ingredients || !caffeineMg || !servingSize || !price || !image) {
            setFormError('All fields are required.');
            return;
        }


        if (isNaN(caffeineMg) || isNaN(servingSize) || isNaN(price)) {
            setFormError('Caffeine, Serving size, and Price must be valid numbers.');
            return;
        }

        try {
            setLoading(true);


            const coffeeData = {
                name,
                ingredients,
                caffeine_mg: parseFloat(caffeineMg),
                serving_size_ml: parseFloat(servingSize),
                price: parseFloat(price),
                image
            };

            await create(coffeeData);

    
            navigate('/coffees');

        } catch (error) {
            console.error('Error creating coffee:', error);
            setApiError('An error occurred while creating the coffee. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles["create_section"]}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="contact_taital">Add New Coffee</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mail_section_1">
                                <form className={styles["create_form"]} onSubmit={submitAction}>
                                    <div>
                                        <div className={styles['input_group']}>
                                            <input 
                                                className="mail_text" 
                                                type="text" 
                                                placeholder="Coffee Name" 
                                                name="name" 
                                                value={name} 
                                                onChange={(e) => setName(e.target.value)} 
                                            />
                                        </div>
                                        <div className={styles['input_group']}>
                                            <input 
                                                className="mail_text" 
                                                type="text" 
                                                placeholder="Ingredients" 
                                                name="ingredients" 
                                                value={ingredients} 
                                                onChange={(e) => setIngredients(e.target.value)} 
                                            />
                                        </div>
                                        <div className={styles['input_group']}>
                                            <input 
                                                className="mail_text" 
                                                type="number" 
                                                placeholder="Caffeine (mg)" 
                                                name="caffeine_mg" 
                                                value={caffeineMg} 
                                                onChange={(e) => setCaffeineMg(e.target.value)} 
                                            />
                                        </div>
                                        <div className='input_group'>
                                            <input 
                                                type="number" 
                                                className="mail_text" 
                                                placeholder="Serving Size (ml)" 
                                                name="serving_size_ml" 
                                                value={servingSize} 
                                                onChange={(e) => setServingSize(e.target.value)} 
                                            />
                                        </div>
                                        <div className='input_group'>
                                            <input 
                                                type="text" 
                                                className="mail_text" 
                                                placeholder="Price" 
                                                name="price" 
                                                value={price} 
                                                onChange={(e) => setPrice(e.target.value)} 
                                            />
                                        </div>
                                        <div className='input_group'>
                                            <input 
                                                type="text" 
                                                className="mail_text" 
                                                placeholder="Image URL" 
                                                name="image" 
                                                value={image} 
                                                onChange={(e) => setImage(e.target.value)} 
                                            />
                                        </div>
                                    </div>

                                    {/* Show form validation errors */}
                                    {formError && <div className={styles["error_message"]}>{formError}</div>}

                                    {/* Show API errors */}
                                    {apiError && <div className={styles["error_message"]}>{apiError}</div>}

                                    <div className={styles["send_bt"]}>
                                        <button type="submit" className={styles['add-button']} disabled={loading}>
                                            {loading ? 'Adding...' : 'Add Coffee'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
