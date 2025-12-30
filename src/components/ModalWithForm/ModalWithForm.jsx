import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText = "Add garment",
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  redirectText,
  redirectLinkText,
  onRedirectClick,
}) {
  const handleCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_${name} ${isOpen && "modal_opened"}`}
      onClick={handleCloseClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close modal"
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__container">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            {redirectText && (
              <p className="modal__redirect">
                {redirectText}
                {""}
                <button
                  type="button"
                  className="modal__redirect-link"
                  onClick={onRedirectClick}
                >
                  {redirectLinkText}
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
