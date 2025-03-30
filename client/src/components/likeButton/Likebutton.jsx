import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export default function LikeButton({ likes, onLike }) {
  const [likeCount, setLikeCount] = useState(likes ?? 0);
  const [liked, setLiked] = useState(false);
  const { coffeeId } = useParams(); 


  useEffect(() => {
    if (typeof likes === "number") {
      setLikeCount(likes);
    }
  }, [likes]);

  const handleLikeToggle = async () => {
    const newLikes = liked ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikes);
    setLiked(!liked);
    onLike(newLikes);

    try {
      await fetch(`http://localhost:3030/data/coffees/${coffeeId}/like`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: newLikes }),
      });
    } catch (error) {
      console.error("Failed to update likes:", error);
    }
  };

  return (
    <button onClick={handleLikeToggle}>
      {liked ? "💔 Unlike" : "👍 Like"} {likeCount}
    </button>
  );
}
