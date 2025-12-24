import { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../utils/contexts/currentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isLiked = item.likes?.some((id) => id === currentUser?._id);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    if (onCardLike) {
      onCardLike(item._id, isLiked);
    }
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && onCardLike && (
          <button
            onClick={handleLike}
            className={`card__like-btn ${
              isLiked ? "card__like-btn_active" : ""
            }`}
            aria-label={isLiked ? "Unlike item" : "Like item"}
            type="button"
          ></button>
        )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
