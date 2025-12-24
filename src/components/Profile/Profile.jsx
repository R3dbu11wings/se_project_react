import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  onCardClick,
  onDeleteItem,
  onAddItemClick,
  onLogout,
  onCardLike,
}) {
  return (
    <section className="profile">
      <SideBar onLogout={onLogout} />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        onDeleteItem={onDeleteItem}
        onAddItemClick={onAddItemClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}
