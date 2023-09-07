const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validationOfInputs();
});
function validationOfInputs() {
  const userNameValue = userName.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value;
  var password2Value = password2.value;
  if (userNameValue === "") {
    errorHandler(userName, "Username must contain more than 3 letters");
  } else {
    successHandler(userName);
  }

  if (emailValue === "") {
    errorHandler(email, "Enter valid email");
  } else if (!ValidateEmail(emailValue)) {
    errorHandler(email, "Invalid email");
  } else {
    successHandler(email);
  }
  // check pass
  if (passwordValue === "") {
    errorHandler(password, "Password can't be empty");
  } else if (!CheckPassword(passwordValue)) {
    errorHandler(password, "Invalid password");
  } else if (CheckPassword(passwordValue)) {
    successHandler(password);
  }

  // Check pass2
  if(password2Value === ""){
    errorHandler(password2, "Password can't be empty");

  }else if (password2Value === passwordValue && CheckPassword(passwordValue)) {
    successHandler(password2);
    
  } else if (password2Value != passwordValue) {
    errorHandler(password2, "Passwords must match");
  }else{
    errorHandler(password2, "Invalid password");
    
  }
}
// Error Handler
function errorHandler(input, msg) {
  const formControl = input.parentElement;
  const errormsg = formControl.querySelector("p");
  errormsg.innerText = msg;
  formControl.className = "form-control error";
}
// Success Handler
function successHandler(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// Email Validation Function Regex
function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}
// Password validation regex
function CheckPassword(pass) {
  var passw =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (pass.match(passw)) {
    return true;
  } else {
    return false;
  }
}
