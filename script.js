function validateForm() {
  //pulls status value from lab 5 form and assigns to x
  let x = document.forms["page3Form"]["password"].value;
  let y = document.forms["page3Form"]["password2"].value;
  //if x does not match y display alert
  if (x != y) {
    alert("Passwords must match");
    return false;
  }
}