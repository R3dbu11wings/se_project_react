import { useCallback, useState } from "react";

export function useFormWithValidation(defaultValues = {}) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value, validationMessage, form } = evt.target;

    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: validationMessage }));

    const currentForm = form || evt.target.closest("form");
    if (currentForm) setIsValid(currentForm.checkValidity());
    else
      setIsValid(
        !Object.values({ ...errors, [name]: validationMessage }).some(Boolean)
      );
  };

  const resetForm = useCallback(
    (newValues = {}) => {
      setValues(newValues);
      setErrors({});
      setIsValid(false);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    errors,
    isValid,
    handleChange,
    resetForm,
    setErrors,
  };
}

export default useFormWithValidation;
