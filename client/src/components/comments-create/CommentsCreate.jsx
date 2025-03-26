import styles from './CommentsCreate.module.css'

export default function CommentsCreate({ 
    onCreate,
}) {
    const commentAction = async (formData) => {
        const comment = formData.get('comment');

        onCreate(comment);
    }
    return (
        <article className="create-comment">
            
            <form className="form" action={commentAction}>
                <textarea className={styles["comment-text"]} name="comment" placeholder="Add New Comment......"></textarea>
                <div className={styles["read_btn"]}><input className={styles["button"]} type="submit" value="Add Comment" /></div>
            </form>
        </article>
    );
}