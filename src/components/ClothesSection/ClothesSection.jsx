import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  onAddItemClick,
}) {
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
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}
