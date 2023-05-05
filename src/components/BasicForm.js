import useEnteredInput from "../hooks/use-entered-input";
const BasicForm = (props) => {
  const {
    value: fEnteredName,
    hasError: fNameHasError,
    isTouched: fNameIsTouched,
    inputBlurHandler: fNameBlurHandler,
    valueChangeHandler: fNameChangeHandler,
    isValid: fNameIsValid,
    reset: fNameReset,
  } = useEnteredInput((value) => value.trim() !== "");

  const {
    value: lEnteredName,
    hasError: lNameHasError,
    isTouched: lNameIsTouched,
    inputBlurHandler: lNameBlurHandler,
    valueChangeHandler: lNameChangeHandler,
    isValid: lNameIsValid,
    reset: lNameReset,
  } = useEnteredInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isTouched: emailIsTouched,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    isValid: emailIsValid,
    reset: emailReset,
  } = useEnteredInput((value) => value.includes("@"));
  let formIsValid = false;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailIsValid, lNameIsValid, fNameIsValid);
    if (emailIsValid && lNameIsValid && fNameIsValid) {
      console.log(fEnteredName, lEnteredName, enteredEmail);
      lNameReset();
      fNameReset();
      emailReset();
    }
  };

  const fNameClasses = fNameHasError ? "form-control invalid" : "form-control";
  const lNameClasses = lNameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fNameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            onBlur={fNameIsTouched}
            value={fEnteredName}
            onChange={fNameChangeHandler}
            onBlurCapture={fNameBlurHandler}
            type="text"
            id="fname"
          />
          {fNameHasError && (
            <p className="error-text">Fisrt name must not be empty.</p>
          )}
        </div>
        <div className={lNameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            onBlur={lNameIsTouched}
            value={lEnteredName}
            onChange={lNameChangeHandler}
            onBlurCapture={lNameBlurHandler}
            type="text"
            id="lname"
          />
          {lNameHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onBlur={emailIsTouched}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlurCapture={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">
            Mail must not be empty and included with '@' and '.'.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
