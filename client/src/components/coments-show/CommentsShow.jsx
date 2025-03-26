import styles from './Comment-Show.module.css'

export default function CommentsView({
    comments,
}) {
    return (
        <div className="details-comments">
            <h2 className="prep_text">Comments:</h2>
            <ul>
                 {comments.length > 0 
                    ? comments.map(({ _id, comment, author }) => (
                        <li key={_id} className={styles["comment"]} >
                            <p><strong>{author.username}</strong>: {comment}</p>
                        </li>
                    ))
                    : <p className="no-comment">No comments.</p>
                }
            </ul>
        </div>
    );
}