import { useContext } from "react";
import "./ItemModal.css";
import CurrentUserContext from "../../utils/contexts/currentUserContext";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isOwner = card.owner === currentUser?._id;

  const handleDelete = () => {
    onDelete(card._id);
  };

  const handleCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${activeModal === "preview" && "modal_opened"}`}
      onClick={handleCloseClick}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_image"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <span className="modal__span">
            <h2 className="modal__caption">{card.name}</h2>
            {isOwner && (
              <button
                type="button"
                className="modal__delete"
                onClick={handleDelete}
              >
                Delete item
              </button>
            )}
          </span>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
