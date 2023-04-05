import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredTouched, setEnteredTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredTouched;
  const emailInputIsValid =
    enteredEmail.includes("@") && enteredEmail.includes(".");
  const emailInputIsInvalid = !emailInputIsValid && enteredTouched;

  let formIsValid = false;
  if (enteredNameIsValid && emailInputIsValid) formIsValid = true;

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredTouched(true);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredTouched(true);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredTouched(true);
    if (!(enteredNameIsValid && emailInputIsValid)) {
      return;
    }
    console.log(enteredName, enteredEmail);

    // nameInputRef.current.value = ""; >> not ideal but it works, don't manipulate the DOM.
    setEnteredName("");
    setEnteredEmail("");
    setEnteredTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {nameInputIsInvalid && emailInputIsInvalid && (
          <p className="error-text">
            Name must not be empty, and email is empty or wrong.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
