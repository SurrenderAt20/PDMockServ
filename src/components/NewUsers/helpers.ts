import { ConvertedEmployee } from "ts/interfaces";
import { ValidationErrors } from "./NewUserForm";

export const validateForm = (data: ConvertedEmployee) => {
  const errors: ValidationErrors = {};

  if (data.fullName.trim() == "") {
    errors.fullName = "There was a name error";
  }

  if (data.fullName.length < 2) {
    errors.fullName = "Your name was not long enough";
  }

  if (data.fullName.length > 20) {
    errors.fullName = "Your name was too long";
  }

  const nameRegex = new RegExp("/^[a-z ,.'-]+$/i");

  if (data.fullName.match(nameRegex)) {
    errors.fullName = "Invalid Characters";
  }

  if (data.gender !== "female" && data.gender !== "male") {
    errors.gender = "Please select a gender for your employee";
  }

  if (data.salary < 1) {
    errors.salary = "You must provide a salary for your employee!";
  }

  return errors;
};
