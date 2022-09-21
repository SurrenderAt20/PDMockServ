import React, { useState } from "react";
import "./NewUserForm.css";
import { isEmpty } from "../../validators/validators";

export default function NewUserForm(props: any) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredBirthday, setBirthday] = useState("");
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
        </div>
        <div className="new-user">
          <label>Birthday</label>
          <input
            type="date"
            min="2022-06-09"
            onChange={birthdayChangeHandler}
            value={enteredBirthday}
          />
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
        <button className="btn" type="submit">
          Add User
        </button>
      </div>
    </form>
  );
}
