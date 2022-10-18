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
  onClose: () => void;
  onSave: (data: any) => void;
}

export default function NewUserForm({ editUser, onClose, onSave }: Props) {
  const [modal, setModal] = useState(false);
  /*   const [enteredName, setEnteredName] = useState(editUser?.fullName ?? "");
  const [enteredBirthday, setBirthday] = useState(editUser?.birthday ?? "");
  const [enteredSalary, setSalary] = useState<number>(editUser?.salary ?? 0);
  const [enteredGender, setGender] = useState<Gender>(
    editUser?.gender ?? "male"
  ); */
  const [validationError, setValidationError] = useState<string | null>(null);

  const [userInput, setUserInput] = useState({
    fullName: editUser?.fullName ?? "",
    birthday: editUser?.birthday ?? "",
    salary: editUser?.salary ?? 0,
    enteredGender: editUser?.gender ?? "male",
    id: editUser?.id ?? Math.random(),
  });

  //Stores value in state
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
  };

  const birthdayChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredBirthday: event.target.value };
    });
  };

  const salaryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(Number(event.target.value));
  };

  const genderChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredGender: event.target.value as Gender };
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*     const userData = {
      fullName: enteredName,
      birthday: enteredBirthday,
      salary: enteredSalary,
      gender: enteredGender,
      id: editUser?.id ?? Math.random(),
    }; */

    const errors = validateForm(userInput);
    setValidationError(errors);
    console.log(errors);

    if (errors) {
      return;
    } else {
      setModal(false);
    }

    onSave(userInput);
    onClose();
  };

  const modalTitle = editUser ? `Edit User` : "Create User";

  return (
    <Modal title={modalTitle} onSave={submitHandler} onClose={onClose}>
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
                    value={userInput.fullName}
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
                    value={userInput.birthday}
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
                value={userInput.salary}
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
                checked={userInput.enteredGender == "female"}
                onChange={genderChangeHandler}
              />
              <label htmlFor="radio-one">Female</label>
              <input
                type="radio"
                id="radio-two"
                name="gender"
                value="male"
                checked={userInput.enteredGender == "male"}
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
  );
}
