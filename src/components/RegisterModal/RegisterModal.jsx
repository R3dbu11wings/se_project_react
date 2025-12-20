import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useEffect } from "react";

const RegisterModal = ({ isOpen, handleRegister, onClose }) => {
  const defaultValues = {
    email: "",
    password: "",
    name: "",
    avatar: "",
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

    const maybePromise = handleRegister(values);

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
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-email" className="modal__label">
        Email*{" "}
        <input
          type="email"
          name="email"
          className="modal__input"
          id="register-email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>

      <label htmlFor="register-password" className="modal__label">
        Password*{" "}
        <input
          type="password"
          name="password"
          className="modal__input"
          id="register-password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>

      <label htmlFor="register-name" className="modal__label">
        Name*{" "}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="register-name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>

      <label htmlFor="register-avatar" className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="register-avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
          required
        />
        {errors.avatar && <span className="modal__error">{errors.avatar}</span>}
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
