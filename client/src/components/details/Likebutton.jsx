import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);


    const handleLike = () => {

        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
        }
    }

    return (
        <div className="details-btn">
            <div className="read_btn"><button onClick={handleLike} disabled={liked}>{liked ? "Liked" : "Like"} {likes}</button></div>
        </div>

    )
}
