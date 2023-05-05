import { useState } from "react";

const useEnteredInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    // isTouched,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useEnteredInput;
