import React from "react";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredBirthday, setEnteredBirthday] = useState("");
  const [enteredSalary, setEnteredSalary] = useState("");
  const [enteredGender, setEnteredGender] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const birthdayChangeHandler = (event) => {
    setEnteredBirthday(event.target.value);
  };

  const salaryChangeHandler = (event) => {
    setEnteredSalary(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setEnteredGender(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      birthday: enteredBirthday,
      salary: enteredSalary,
      gender: enteredGender,
    };

    props.onSaveUserData(userData);
    setEnteredName("");
    setEnteredBirthday("");
    setEnteredSalary("");
    setEnteredGender("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Birthday</label>
          <input
            type="number"
            value={enteredBirthday}
            onChange={birthdayChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredSalary}
            min="2019-01-01"
            max="2024-12-31"
            onChange={salaryChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default AddUser;
