import React, { useState } from "react";
import { validateForm } from "./helpers";
import "./NewUserForm.css";

export default function NewUserForm(props: any) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredNameLengthShort, SetEnteredNameLengthShort] = useState(true);
  const [enteredNameLengthLong, SetEnteredNameLengthLong] = useState(true);
  const [enteredRegex, setEnteredRegex] = useState(true);
  const [enteredBirthday, setBirthday] = useState("");
  const [enteredBirthdayIsValid, setEnteredBirthdayIsValid] = useState(true);
  const [enteredSalary, setSalary] = useState("");
  const [enteredSalaryIsValid, setEnteredSalaryIsValid] = useState(true);
  const [enteredGender, setGender] = useState("");
  const [enteredGenderIsValid, setEnteredGenderIsValid] = useState(true);
  const [validationError, setValidationError] = useState<string | null>(null);

  //Stores value in state
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
    const errors = validateForm(event.target.value);
    setValidationError(errors);
    console.log(errors);
  };

  const birthdayChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBirthday(event.target.value);
  };

  const salaryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(event.target.value);
  };

  const genderChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (enteredName.trim() == "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    if (enteredName.length < 2) {
      SetEnteredNameLengthShort(false);
      return;
    }

    SetEnteredNameLengthShort(true);

    if (enteredName.length > 20) {
      SetEnteredNameLengthLong(false);
      return;
    }

    SetEnteredNameLengthLong(true);

    const nameRegex = new RegExp("/^[a-z ,.'-]+$/i");

    if (enteredName.match(nameRegex)) {
      setEnteredRegex(false);
      return;
    }

    setEnteredRegex(true);

    if (enteredBirthday.trim() == "") {
      setEnteredBirthdayIsValid(false);
    }

    setEnteredBirthdayIsValid(true);

    const male = "male";
    const female = "female";

    //investigate how we check for either male or female
    /*     if (!enteredGender.match() === male && female) {
      setEnteredGenderIsValid(false);
    } */

    setEnteredGenderIsValid(true);

    const userData = {
      fullName: enteredName,
      birthday: enteredBirthday,
      salary: enteredSalary,
      gender: enteredGender,
    };

    props.onSaveUserData(userData);
    setEnteredName("");
    setBirthday("");
    setSalary("");
    setGender("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__container">
        <div className="new-user">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} value={enteredName} />
          {validationError && validationError !== null && (
            <p className="error-text">{validationError}</p>
          )}
        </div>
        <div className="new-user">
          <label>Birthday</label>
          <input
            type="date"
            min="2022-06-09"
            onChange={birthdayChangeHandler}
            value={enteredBirthday}
          />
          {!enteredBirthdayIsValid && (
            <p className="error-text">Birthday invalid</p>
          )}
        </div>
        <div className="new-user">
          <label>Salary</label>
          <input
            type="number"
            min="100"
            onChange={salaryChangeHandler}
            value={enteredSalary}
          />
        </div>
        <div className="new-user">
          <label>Gender</label>
          <input
            type="text"
            onChange={genderChangeHandler}
            value={enteredGender}
          />
          {!enteredGenderIsValid && (
            <p className="error-text">
              Please select either male or female as gender
            </p>
          )}
        </div>
      </div>
      <div className="submit-btn__container">
        <button name="btn" id="btn" className="btn" type="submit">
          Add User
        </button>
      </div>
    </form>
  );
}
