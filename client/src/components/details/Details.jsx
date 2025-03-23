import { Link, useParams } from "react-router-dom";
import styles from'./Details.module.css'
import { useCoffee } from "../../api/coffeeApi";


export default function Details() {
    const {coffeeId} = useParams();

    const { coffee } = useCoffee(coffeeId);


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
                            <h4 className="prep_text">Name {coffee.name}</h4>
                            <div>
                            <p className="lorem_text">ingredients {coffee.ingredients}</p>
                            <p className="lorem_text">caffeine_mg {coffee.caffeine_mg}</p>
                            <p className="lorem_text">serving_size_ml {coffee.serving_size_ml}</p>
                            <p className="lorem_text">price {coffee.price}</p>
                            </div>
                            <div className={styles["details-btn"]}>
                                <div className="read_btn"><Link to="/edit">Edit</Link></div>
                                <div className="read_btn"><Link to="/details">Delete</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}