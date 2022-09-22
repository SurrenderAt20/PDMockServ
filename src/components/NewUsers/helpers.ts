import { ConvertedEmployee } from "ts/interfaces"

export const validateForm = (data: ConvertedEmployee) => {

    if (data.fullName.trim() == "") {
        return "Name error"
      }

      if (data.fullName.length < 2){
        return "Name not long enough"
      }

      if (data.fullName.length > 20) {

        return "Name too long"
      }

      const nameRegex = new RegExp("/^[a-z ,.'-]+$/i");

      if (data.fullName.match(nameRegex)) {
        return "Invalid characters";
      }

      if (data.salary < 1){
        return "The user must have a salary!"
      }

      return ""
}
