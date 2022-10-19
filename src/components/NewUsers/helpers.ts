import { ConvertedEmployee } from "ts/interfaces"

export const validateForm = (data: ConvertedEmployee) => {
  const errors: any = {};

  const nameRegex = new RegExp("/^[a-z ,.'-]+$/i");

  if (data.fullName.match(nameRegex)) {
    errors.fullName = "Invalid characters";
  }

  if (data.fullName.length > 20) {
    errors.fullName = "Name too long"
  }

  if (data.fullName.length < 2){
    errors.fullName = "Name not long enough"
  }
  
  if (data.fullName.trim() === "") {
    errors.fullName = "Name error";
  }

  if (data.gender !== "female" && data.gender !== "male"){
    errors.gender = "Please select either male or female"
  }

  if (data.salary < 1){
    errors.salary = "The user must have a salary!"
  }

  return errors;
}
