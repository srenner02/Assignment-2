function validateForm() {
  //pulls username value from page3 form and assigns it to z
  let z = document.forms["page3Form"]["username"].value;
  //assigns required values in prompt to array usernames
  const usernames = ["Harry", "Elizabeth", "Shana"]
  //checks username vs each item of the array and returns false if a match is found
  for(const a of usernames){
    if (a == z) {
    alert("Username already exists");
    return false;
    }
  }
  
  //pulls password and password2 value from page3 form and assigns to x and y
  let x = document.forms["page3Form"]["password"].value;
  let y = document.forms["page3Form"]["password2"].value;
  //if x does not match y display alert
  if (x != y) {
    alert("Passwords must match");
    return false;
  }
}