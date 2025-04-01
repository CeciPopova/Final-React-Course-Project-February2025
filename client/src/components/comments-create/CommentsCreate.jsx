import styles from './CommentsCreate.module.css'

export default function CommentsCreate({ 
    onCreate,
}) {

    const commentAction = async (formData) => {
        const comment = formData.get('comment').trim();
    
        if (!comment) {
            alert("Comment cannot be empty!");
            return;
        }
    
        try {
            await onCreate(comment);
        } catch (error) {
            console.error("Failed to create comment:", error);
            alert("Error: Could not add your comment. Please try again.");
        }
    };
    
    return (
        <article className={styles["create-comment"]}> 
            <form className="form" action={commentAction}>
                <textarea className={styles["comment-text"]} name="comment" placeholder="Add New Comment......"></textarea>
                <div className={styles["read_btn"]}><input className={styles["button"]} type="submit" value="Add Comment" /></div>
            </form>
        </article>
    );
}