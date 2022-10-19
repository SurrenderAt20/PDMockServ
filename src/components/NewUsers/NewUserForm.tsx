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
  const [validationErrors, setValidationError] = useState<any>({});

  const [userInput, setUserInput] = useState({
    fullName: editUser?.fullName ?? "",
    birthday: editUser?.birthday ?? "",
    salary: editUser?.salary ?? 0,
    gender: editUser?.gender ?? "male",
    id: editUser?.id ?? Math.random(),
  });


  //Stores value in state
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    console.log({inputName, inputValue});

    setUserInput((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateForm(userInput);
    setValidationError(errors);

    if (Object.keys(errors).length !== 0) {
      return;
    }

    console.log({userInput});

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
                    name="fullName"
                    className="nameFieldInput"
                    type="text"
                    onChange={changeHandler}
                    value={userInput.fullName}
                  />

                  {validationErrors.fullName && <h1>{validationErrors.fullName}</h1>}
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
                    name="birthday"
                    className="nameFieldInput"
                    type="date"
                    min="2022-06-09"
                    onChange={changeHandler}
                    value={userInput.birthday}
                  />

                  {validationErrors.birthdya && <h1>{validationErrors.birthdya}</h1>}
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
                name="salary"
                className="nameFieldInput"
                type="number"
                min={0}
                onChange={changeHandler}
                value={userInput.salary}
              />

              {validationErrors.salary && <h1>{validationErrors.salary}</h1>}

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
                checked={userInput.gender == "female"}
                onChange={changeHandler}
              />
              <label htmlFor="radio-one">Female</label>
              <input
                type="radio"
                id="radio-two"
                name="gender"
                value="male"
                checked={userInput.gender == "male"}
                onChange={changeHandler}
              />
              <label htmlFor="radio-two">Male</label>
            </div>

            {validationErrors.gender && <h1>{validationErrors.gender}</h1>}

          </div>
        </div>

        {/* <div className="error__container"></div> */}

        {/* <div className="error__container">
          {validationError && validationError !== null && (
            <p className="error-text">{validationError}</p>
          )}
        </div> */}
      </form>
    </Modal>
  );
}
