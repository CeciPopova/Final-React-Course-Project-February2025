import { Link, useNavigate, useParams } from "react-router-dom";
import styles from './Details.module.css'
import { useCoffee, useDeleteCoffee } from "../../api/coffeeApi";


export default function Details() {
    const { coffeeId } = useParams();
    const navigate = useNavigate();
    const { coffee } = useCoffee(coffeeId);
    const { deleteCoffee } = useDeleteCoffee();

    const coffeeDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Do you want to delete ${coffee.name} coffee?`);

        if (!hasConfirm) {
            return;
        }

        await deleteCoffee(coffeeId);

        navigate('/coffees')
    }


    return (
        <div className="details-container">
            <div className={styles["coffee-details"]}>
                <div className={styles["details-img"]}>
                    <div className="blog_img">
                        <img src={coffee.image} />
                    </div>
                    <h4 className="date_text">{coffee._createdOn}</h4>
                </div>

                <div className="col-md-6">
                    <div className="details_box">
                        <div className="details-text">
                            <h4 className="prep_text">{coffee.name}</h4>
                            <div>
                                <p className="lorem_text">ingredients {coffee.ingredients}</p>
                                <p className="lorem_text">caffeine_mg {coffee.caffeine_mg}</p>
                                <p className="lorem_text">serving_size_ml {coffee.serving_size_ml}</p>
                                <p className="lorem_text">price {coffee.price}</p>
                            </div>
                            <div className={styles["details-btn"]}>
                                <div className="read_btn"><Link className="button" to={`/coffees/${coffee._id}/edit`}>Edit</Link></div>
                                <div className="read_btn"><button onClick={coffeeDeleteClickHandler}>Delete</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}