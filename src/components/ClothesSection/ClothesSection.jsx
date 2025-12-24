import { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../utils/contexts/currentUserContext";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  onAddItemClick,
  onCardLike,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__row_text">Your items</p>
        <button
          className="clothes-section__row_btn"
          type="button"
          onClick={onAddItemClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {userItems.length === 0 ? (
          <p className="clothes-section__empty">
            No items yet. Add your first item!
          </p>
        ) : (
          userItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
            />
          ))
        )}
      </ul>
    </div>
  );
}
