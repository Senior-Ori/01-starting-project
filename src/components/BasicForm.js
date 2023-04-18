import userInput from "../hooks/user-input";
const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameHasError,
    isTouched: nameIsTouched,
    isValid: nameIsValid,
    resetValue: resetName,
  } = userInput((value) => value.trim() !== "");
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            onBlur={nameIsTouched}
            value={enteredName}
            type="text"
            id="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="email" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
