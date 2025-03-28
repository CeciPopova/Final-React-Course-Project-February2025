import { useState, useEffect } from "react";

export default function LikeButton({
  likes,  // Receiving likes as a prop
}) {
  console.log("Initial likes:", likes);

  // Initialize state with the likes prop
  const [like, setLike] = useState(likes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Sync the like state with the initial likes prop on mount
    setLike(likes);
  }, [likes]); // This will update the state if the likes prop changes

  const handleLike = () => {
    if (!liked) {
      setLike(like + 1);  // Increment like count
      setLiked(true);  // Mark as liked
    }
  };

  return (
    <div className="details-btn">
      <div className="read_btn">
        {/* Use `like` state to show updated like count */}
        <button onClick={handleLike} disabled={liked}>
          {liked ? "❤️ Liked" : "👍 Like"} {like} {/* Updated like count */}
        </button>
      </div>
    </div>
  );
}
