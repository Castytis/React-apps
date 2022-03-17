import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: isValidName,
    hasError: hasNameError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: lnameValue,
    isValid: isValidLname,
    hasError: haslNameError,
    valueChangeHandler: lnameChangedHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLname,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: emailValue,
    isValid: isValidEmail,
    hasError: hasEmailError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetlEmail,
  } = useInput((value) => {
    return value.includes('@')
  });

  let isFormValid = false

  if (isValidName && isValidLname && isValidEmail) {
    isFormValid = true
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    if (!isValidName || !isValidLname || !isValidEmail){
      return
    }

    resetName()
    resetLname()
    resetlEmail()
  }

  const nameInputClasses = hasNameError
    ? "form-control invalid"
    : "form-control";

  const lnameInputClasses = haslNameError
    ? "form-control invalid"
    : "form-control";

    const emailInputClasses = hasEmailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
          {hasNameError && <p>Invalid Name</p>}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name"
          onChange={lnameChangedHandler}
          onBlur={lnameBlurHandler}
          value={lnameValue} />
          {haslNameError && <p>Invalid Last Name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" 
        onChange={emailChangedHandler}
        onBlur={emailBlurHandler}
        value={emailValue}/>
        {hasEmailError && <p>Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
