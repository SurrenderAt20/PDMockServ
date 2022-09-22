export const validateForm = (name: string) => {

    if (name.trim() == "") {
        return "Name error"
      }

      if(name.length < 2){
        return "Name not long enough"
      }

      if (name.length > 20) {

        return "Name too long"
      }

      const nameRegex = new RegExp("/^[a-z ,.'-]+$/i");

      if (name.match(nameRegex)) {
        return "Invalid characters";
      }

      return ""
}
