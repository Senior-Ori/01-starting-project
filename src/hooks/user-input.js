import { useState } from "react";
const [enteredValue, setEnteredValue] = useState("");
const [isTouched, setIsTouched] = useState(false);
const userInput = (validateValue) => {
  console.log("user input");
  const reset = () => {
    setEnteredValue("");
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    InputBlurHandler,
    reset,
  };
};
export default userInput;
