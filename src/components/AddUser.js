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

        <div className="">
          <label>Birthday</label>
          <input
            type="date"
            value={enteredBirthday}
            onChange={birthdayChangeHandler}
          ></input>
        </div>

        <div className="">
          <label>Date</label>
          <input
            type="text"
            value={enteredSalary}
            onChange={salaryChangeHandler}
          ></input>
        </div>
      </div>

      <div className="">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default AddUser;
