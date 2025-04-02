import moment from 'moment';

import { Link, useNavigate, useParams } from "react-router-dom";
import styles from './Details.module.css'
import { useCoffee, useDeleteCoffee } from "../../api/coffeeApi";
import useAuth from "../../hooks/useAuth";
import CommentsView from "../coments-show/CommentsShow";
import CommentsCreate from "../comments-create/CommentsCreate";
import { useComments, useCreateComment } from "../../api/commentsApi";

export default function Details() {
    const { userId, username, isAuthenticated } = useAuth();
    const { coffeeId } = useParams();
    const navigate = useNavigate();
    const { coffee } = useCoffee(coffeeId);
    const { deleteCoffee } = useDeleteCoffee();
    const { comments, addComment } = useComments(coffeeId);
    const { create } = useCreateComment();


    const coffeeDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Do you want to delete ${coffee?.name || "this"} coffee?`);

        if (!hasConfirm) return;

        try {
            await deleteCoffee(coffeeId);
            navigate('/coffees');
        } catch (error) {
            console.error("Failed to delete coffee:", error);
            alert("Error: Could not delete coffee. Please try again later.");
        }
    };

    const commentCreateHandler = async (comment) => {
        try {
            const newComment = await create(coffeeId, comment);
            addComment({ ...newComment, author: { username } });
        } catch (error) {
            console.error("Failed to create comment:", error);
            alert("Error: Could not add your comment. Please try again.");
        }
    };

    const isOwner = userId === coffee._ownerId;

    return (
        <div className={styles["details-container"]}>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="about_taital">Details</h1>
                </div>
            </div>
            <div className={styles["coffee-details"]}>
                <div className={styles["details-img"]}>
                    <div className={styles["blog_img"]}>
                        <img className={styles["image"]} src={coffee?.image} alt={coffee?.name || "Coffee Image"} />
                    </div>
                    <h4 className={styles["price"]}>Price: {coffee.price}$</h4>
                </div>
                <div className={styles["details-content"]}>
                    <div className={styles["details-box"]}>
                        <div className={styles["details-text"]}>
                            <h4 className="prep_text">{coffee.name}</h4>
                            <div>
                                <p className="lorem_text"><strong>ingredients: </strong> {coffee.ingredients}</p>
                                <p className="lorem_text"><strong>Caffeine: </strong> {coffee.caffeine_mg}mg</p>
                                <p className="lorem_text"><strong>Size: </strong> {coffee.serving_size_ml}ml</p>
                                <p className="lorem_text"><strong>Added on: </strong>{moment(coffee?._createdOn).format('LL')}</p>

                            </div>
                            {isOwner &&
                                (<div className={styles["details-btn"]}>
                                    <div className="read_btn"><Link className="button" to={`/coffees/${coffee._id}/edit`}>Edit</Link></div>
                                    <div className="read_btn"><button className={styles["button"]} onClick={coffeeDeleteClickHandler}>Delete</button></div>
                                </div>)

                            }

                        </div>
                        <CommentsView comments={comments} />
                    </div>
                </div>
                <div className={styles["comments"]}>

                    {isAuthenticated
                        ? <CommentsCreate onCreate={commentCreateHandler} />
                        : <strong  ><Link to="/login" className={styles["strong"]}>  Login here to comment!</Link></strong>
                    }
                </div>
            </div>
        </div>
    )
}