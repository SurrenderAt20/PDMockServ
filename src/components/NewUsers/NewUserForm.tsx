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

export type ValidationErrors = {
  fullName?: string;
  birthday?: string;
  salary?: string;
  gender?: string;
};

/* type ValidationErrors = Partial<Record<keyof Omit<ConvertedEmployee, 'id'>, string>>; */

export default function NewUserForm({ editUser, onClose, onSave }: Props) {
  const [validationError, setValidationError] = useState<ValidationErrors>({});

  //oneState rather than multiple.
  const [userInput, setUserInput] = useState({
    fullName: editUser?.fullName ?? "",
    birthday: editUser?.birthday ?? "",
    salary: editUser?.salary ?? 0,
    gender: editUser?.gender ?? "male",
    id: editUser?.id ?? Math.random(),
  });

  //Collecting all handlers into one
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      const inputValue = event.target.value;
      const inputName = event.target.name;

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
                    className={validationError.fullName ? 'nameFieldInputError' : 'nameFieldInput'}
                    type="text"
                    name="fullName"
                    onChange={changeHandler}
                    value={userInput.fullName}
                  />

                  {validationError.fullName && (
                    <h1 className="errorMsg">{validationError.fullName}</h1>
                  )}
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
                    className={validationError.birthday ? 'nameFieldInputError' : 'nameFieldInput'}
                    type="date"
                    name="birthday"
                    min="2022-06-09"
                    onChange={changeHandler}
                    value={userInput.birthday}
                  />

                  {validationError.birthday && (
                    <h1 className="errorMsg">{validationError.birthday}</h1>
                  )}
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
                className={validationError.salary ? 'nameFieldInputError' : 'nameFieldInput'}
                type="number"
                name="salary"
                min={0}
                onChange={changeHandler}
                value={userInput.salary}
              />

              {validationError.salary && <h1 className="errorMsg">{validationError.salary}</h1>}
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

              {validationError.gender && <h1 className="errorMsg">{validationError.gender}</h1>}
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
          </div>
        </div>
      </form>
    </Modal>
  );
}
