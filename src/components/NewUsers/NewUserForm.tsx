import React, { useState } from "react";
import "./NewUserForm.css";

export default function NewUserForm(props: any) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredNameLength, SetEnteredNameLength] = useState(true);
  const [enteredBirthday, setBirthday] = useState("");
  const [enteredBirthdayIsValid, setEnteredBirthdayIsValid] = useState(true);
  const [enteredSalary, setSalary] = useState("");
  const [enteredGender, setGender] = useState("");

  //Stores value in state
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
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
      SetEnteredNameLength(false);
      return;
    }

    SetEnteredNameLength(true);

    if (enteredBirthday.trim() == "") {
      setEnteredBirthdayIsValid(false);
    }

    setEnteredBirthdayIsValid(true);

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
          {!enteredNameIsValid && (
            <p className="error-text">Name must not be empty</p>
          )}
          {!enteredNameLength && (
            <p className="error-text">Name must be longer</p>
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
