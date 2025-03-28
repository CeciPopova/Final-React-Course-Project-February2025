import moment from 'moment';

import { Link, useNavigate, useParams } from "react-router-dom";
import styles from './Details.module.css'
import { useCoffee, useDeleteCoffee } from "../../api/coffeeApi";
import useAuth from "../../hooks/useAuth";
import LikeButton from "./Likebutton";
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

    console.log(coffee.likes);

    const coffeeDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Do you want to delete ${coffee.name} coffee?`);

        if (!hasConfirm) {
            return;
        }

        await deleteCoffee(coffeeId);

        navigate('/catalog');
    }

    const commentCreateHandler = async (comment) => {
        // TODO: try/catch
        const newComment = await create(coffeeId, comment);

        addComment({ ...newComment, author: { username } })
    };

    const isOwner = userId === coffee._ownerId;

    return (
        <div className="details-container">
            <div className={styles["coffee-details"]}>
                <div className={styles["details-img"]}>
                    <div className={styles["blog_img"]}>
                        <img src={coffee.image} />
                    </div>
                    <h4 className="date_text">Price: {coffee.price}$</h4>
                </div>

                <div className="col-md-6">
                    <div className="details_box">
                        <div className={styles["details-text"]}>
                            <h4 className="prep_text">{coffee.name}</h4>
                            <div>
                                <p className="lorem_text"><strong>ingredients: </strong> {coffee.ingredients}</p>
                                <p className="lorem_text"><strong>Caffeine: </strong> {coffee.caffeine_mg}mg</p>
                                <p className="lorem_text"><strong>Size: </strong> {coffee.serving_size_ml}ml</p>
                                <p className="lorem_text"><strong>Added on: </strong>{moment(coffee._createdOn).format('LL')}</p>

                            </div>
                            {isOwner
                                ?
                                (<div className={styles["details-btn"]}>
                                    <div className="read_btn"><Link className="button" to={`/coffees/${coffee._id}/edit`}>Edit</Link></div>
                                    <div className="read_btn"><button className={styles["button"]} onClick={coffeeDeleteClickHandler}>Delete</button></div>
                                </div>)

                                : (
                                    <div>
                                        <LikeButton likes={coffee.likes}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <CommentsView comments={comments} />
                    {isAuthenticated
                        ? <CommentsCreate onCreate={commentCreateHandler} />
                        : <strong  ><Link to="/login" className={styles["strong"]}>  Login here to comment!</Link></strong>
                    }
                </div>
            </div>
        </div>
    )
}