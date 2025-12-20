import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { useEffect } from "react";

const LoginModal = ({ isOpen, handleLogin, onClose }) => {
  const defaultValues = {
    email: "",
    password: "",
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

    const maybePromise = handleLogin(values);

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
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          name="email"
          className="modal__input"
          id="login-email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>

      <label htmlFor="login-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          name="password"
          className="modal__input"
          id="login-password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
