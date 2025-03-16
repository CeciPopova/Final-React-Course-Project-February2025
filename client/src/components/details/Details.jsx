import { Link } from "react-router-dom";
import styles from'./Details.module.css'


export default function Details() {
    return (
        <div className="details-container">
            <div className={styles["coffee-details"]}>
                <div className={styles["details-img"]}>
                    <div className="blog_img">
                        <img src="images/blog-img1.png" />
                    </div>
                    <h4 className="date_text">05 April</h4>
                </div>

                <div className="col-md-6">
                    <div className="details_box">
                        <div className="details-text">
                            <h4 className="prep_text">PREP TECHNIQUES Coffee</h4>
                            <p className="lorem_text">distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more</p>
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