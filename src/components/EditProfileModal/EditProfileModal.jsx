import { useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import CurrentUserContext from "../../utils/contexts/currentUserContext";

const EditProfileModal = ({ isOpen, onClose, onUpdateUser }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const defaultValues = {
    name: "",
    avatar: "",
  };

  const { values, setValues, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(defaultValues);

  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser, setValues]);

  useEffect(() => {
    if (!isOpen) {
      resetForm({ name: "", avatar: "" });
    }
  }, [isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!isValid) return;

    const maybePromise = onUpdateUser(values);

    if (maybePromise && typeof maybePromise.then === "function") {
      maybePromise.then(() => {}).catch(() => {});
    }
  }
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-name" className="modal__label">
        Name *{" "}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="edit-name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={30}
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>

      <label htmlFor="edit-avatar" className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="edit-avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
        />
        {errors.avatar && <span className="modal__error">{errors.avatar}</span>}
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
