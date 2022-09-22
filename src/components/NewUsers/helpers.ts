export const validateForm = (name: string) => {

    if (name.trim() == "") {
        return "Name error"
      }
      return ""
}
