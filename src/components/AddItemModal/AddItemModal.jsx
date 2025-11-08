import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useEffect } from "react";

const AddItemModal = ({ isOpen, handleAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weatherType: "",
  };
  const { values, setValues, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(defaultValues);

  useEffect(() => {
    if (isOpen) {
      // reset to defaults and clear errors when modal opens
      resetForm(defaultValues);
    }
  }, [isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    // prevent submission if the form is invalid
    if (!isValid) return;

    const maybePromise = handleAddItem(values);

    // If the parent returns a promise, reset the form after success.
    if (maybePromise && typeof maybePromise.then === "function") {
      maybePromise.then(() => resetForm(defaultValues)).catch(() => {});
    } else {
      // best-effort reset when parent does not return a promise
      resetForm(defaultValues);
    }
  }

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="clothing-name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>
      <label htmlFor="imageURL" className="modal__label">
        Image{" "}
        <input
          type="url"
          name="imageUrl"
          className="modal__input"
          id="imageURL"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
        {errors.imageUrl && (
          <span className="modal__error">{errors.imageUrl}</span>
        )}
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            name="weatherType"
            value="hot"
            type="radio"
            className="modal__radio-input"
            onChange={handleChange}
            required
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            name="weatherType"
            value="warm"
            type="radio"
            className="modal__radio-input"
            onChange={handleChange}
            required
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            name="weatherType"
            value="cold"
            type="radio"
            className="modal__radio-input"
            onChange={handleChange}
            required
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
