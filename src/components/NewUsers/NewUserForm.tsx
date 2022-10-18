import React, { useState } from "react";
import { Gender } from "ts/interfaces";
import { validateForm } from "./helpers";
import Modal from "../Modal/Modal";
import "./NewUserForm.css";
import { ConvertedEmployee } from "ts/interfaces";
import {
  TopContainer,
  TopElements,
  Button,
} from "../StylingComponents/Form/Form";

interface Props {
  editUser?: ConvertedEmployee;
}

export default function NewUserForm({ editedUser }: Props) {
  const [modal, setModal] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredBirthday, setBirthday] = useState("");
  const [enteredSalary, setSalary] = useState<number>(0);
  const [enteredGender, setGender] = useState<Gender>("male");
  const [validationError, setValidationError] = useState<string | null>(null);
  /* const [fullName, setFullName] = useState(editUser.fullName ?? ""); */

  const toggleModal = () => {
    setModal(!modal);
  };

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
    setSalary(Number(event.target.value));
    console.log(event.target.value);
  };

  const genderChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value as Gender);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      fullName: enteredName,
      birthday: enteredBirthday,
      salary: enteredSalary,
      gender: enteredGender,
    };

    const errors = validateForm(userData);
    setValidationError(errors);
    console.log(errors);

    if (errors) {
      return;
    } else {
      setModal(false);
    }

    props.onSaveUserData(userData);
    setEnteredName("");
    setBirthday("");
    setSalary(0);
    setGender("male" && "female");
  };

  return (
    <>
      {/*       <TopContainer>
        <TopElements className="top-elements">
          <h2> Registered users </h2>
          <Button className="btn" onClick={toggleModal}>
            <div>Create user</div>
          </Button>
        </TopElements>
      </TopContainer> */}

      {modal && (
        <Modal
          title="Create Employee"
          onSave={submitHandler}
          onClose={() => setModal(false)}
        >
          <form id="form" onSubmit={submitHandler}>
            <div className="formHeadline">
              <h2>Personal Details</h2>
            </div>

            <div className="userContainer">
              <div className="firstLayerContainer">
                <div className="firstLayerField">
                  <div className="nameFieldSpecs">
                    <label className="formLabel">
                      <span> Name </span>
                    </label>
                    <div className="firstLayerInputWrapper">
                      <input
                        className="nameFieldInput"
                        type="text"
                        onChange={nameChangeHandler}
                        value={enteredName}
                      />
                    </div>
                  </div>
                </div>

                <div className="firstLayerField">
                  <div className="nameFieldSpecs">
                    <label className="formLabel">
                      <span>Birthday</span>
                    </label>
                    <div className="firstLayerInputWrapper">
                      <input
                        className="nameFieldInput"
                        type="date"
                        min="2022-06-09"
                        onChange={birthdayChangeHandler}
                        value={enteredBirthday}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="firstLayerField">
                <div className="nameFieldSpecs">
                  <label className="formLabel">
                    <span>Salary</span>
                  </label>
                  <input
                    className="nameFieldInput"
                    type="number"
                    min={0}
                    onChange={salaryChangeHandler}
                    value={enteredSalary}
                  />
                </div>
              </div>

              <div className="nameFieldSpecs">
                <label htmlFor="" className="formLabel">
                  <span>Gender</span>
                  <br />
                  <br />
                </label>
                <div className="switch-field">
                  <input
                    type="radio"
                    id="radio-one"
                    name="gender"
                    value="female"
                    checked={enteredGender == "female"}
                    onChange={genderChangeHandler}
                  />
                  <label htmlFor="radio-one">Female</label>
                  <input
                    type="radio"
                    id="radio-two"
                    name="gender"
                    value="male"
                    checked={enteredGender == "male"}
                    onChange={genderChangeHandler}
                  />
                  <label htmlFor="radio-two">Male</label>
                </div>
              </div>
            </div>

            <div className="error__container"></div>

            <div className="error__container">
              {validationError && validationError !== null && (
                <p className="error-text">{validationError}</p>
              )}
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}
