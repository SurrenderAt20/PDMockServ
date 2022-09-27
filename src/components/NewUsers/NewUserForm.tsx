import React, { useState } from "react";
import { Gender } from "ts/interfaces";
import { validateForm } from "./helpers";
import "./NewUserForm.css";
/* import { AiFillPlusCircle } from "react-icons/ai"; */

export default function NewUserForm(props: any) {
  const [modal, setModal] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredInitials, setEnteredInitials] = useState("");
  const [enteredBirthday, setBirthday] = useState("");
  const [enteredSalary, setSalary] = useState<number>(0);
  const [enteredGender, setGender] = useState<Gender>("male");
  const [validationError, setValidationError] = useState<string | null>(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  //Stores value in state
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const initialChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInitials(event.target.value);
  }

  const birthdayChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBirthday(event.target.value);
  };

  const salaryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(Number(event.target.value));
    console.log(event.target.value);
  };

  const genderChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value as Gender);
    /* console.log(event.target.value); */
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      fullName: enteredName,
      initials: enteredInitials,
      birthday: enteredBirthday,
      salary: enteredSalary,
      gender: enteredGender,
    };

    const errors = validateForm(userData);
    setValidationError(errors);
    console.log(errors);

    if (errors) {
      return;
    }

    props.onSaveUserData(userData);
    setEnteredName("");
    setBirthday("");
    setSalary(0);
    setGender("male" && "female");
  };

  return (
    <>
      <div className="top__container">
        <div className="top-elements">
          <h2> Registered users </h2>
          <button className="btn" onClick={toggleModal}>
            <div>Create user</div>
          </button>
        </div>
      </div>

      {modal && (
        <div className="modal__container">
          <div className="overlay">
            <div className="modal-content">
              <div className="header__container">
                <h2 className="formHeadline"> Create User </h2>
              </div>

              <form id="form" className="form" onSubmit={submitHandler}>
                <div className="formHeadline">
                  <h2>Personal Details</h2>
                </div>
                <div className="wrapper">
                  <div className="new-user__container">
                    <div className="new-user">
                      <label className="nameLabel">Name</label>
                      <br />
                      <input
                        className="nameInput"
                        type="text"
                        onChange={nameChangeHandler}
                        value={enteredName}
                      />
                    </div>
                    <div className="new-user">
                      <label className="initialsLabel">Initials</label>
                      <br />
                      <input
                        className="initialsInput"
                        type="text"
                        onChange={initialChangeHandler}
                        value={enteredInitials}
                      />
                    </div>
                    <div className="new-user">
                      <label className="bdayLabel">Birthday</label>
                      <br />
                      <input
                        className="bdayInput"
                        type="date"
                        min="2022-06-09"
                        onChange={birthdayChangeHandler}
                        value={enteredBirthday}
                      />
                    </div>
                    <div className="new-user">
                      <label className="salaryLabel">Salary</label>
                      <br />
                      <input
                        className="salaryInput"
                        type="number"
                        min={0}
                        onChange={salaryChangeHandler}
                        value={enteredSalary}
                      />
                    </div>
                    <div className="new-user radioBtn">
                      <label>Male</label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={enteredGender == "male"}
                        onChange={genderChangeHandler}
                      />
                      <label>Female</label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={enteredGender == "female"}
                        onChange={genderChangeHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-btn__container">
                  <button
                    form="form"
                    name="btn"
                    id="btn"
                    className="btn"
                    type="submit"
                  >
                    Add User
                  </button>
                  <button
                    name="btn"
                    id="btn"
                    className="btn"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                </div>
              </form>
              <div className="error__container">
                {validationError && validationError !== null && (
                  <p className="error-text">{validationError}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
