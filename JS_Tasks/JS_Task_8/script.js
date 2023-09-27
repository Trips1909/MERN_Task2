function validateFirstName() {
  var firstName = document.getElementById("first_name").value;
  var firstNameError = document.getElementById("first_name_error");

  if (firstName.length < 4) {
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
  }
}

function validateLastName() {
  var lastName = document.getElementById("last_name").value;
  var lastNameError = document.getElementById("last_name_error");

  if (lastName.length < 4) {
    lastNameError.style.display = "block";
  } else {
    lastNameError.style.display = "none";
  }
}

function validatePassowrd() {
  var passowrd = document.getElementById("password").value;
  var password_error = document.getElementById("password_error");

  if (passowrd.length < 4) {
    password_error.style.display = "block";
  } else {
    password_error.style.display = "none";
  }
}

function validateRePassword() {
  var password = document.getElementById("password").value;
  var re_password = document.getElementById("re_password").value;
  var rePassword_error = document.getElementById("rePassword_error");

  if (re_password !== password) {
    rePassword_error.style.display = "block";
  } else {
    rePassword_error.style.display = "none";
  }
}

function validateAge() {
  var age = parseInt(document.getElementById("age").value);
  var age_error = document.getElementById("age_error");

  if (age < 0) {
    age_error.style.display = "block";
  } else {
    age_error.style.display = "none";
  }
}

document
  .getElementById("first_name")
  .addEventListener("input", validateFirstName);
document
  .getElementById("last_name")
  .addEventListener("input", validateLastName);
document.getElementById("password").addEventListener("input", validatePassowrd);
document
  .getElementById("re_password")
  .addEventListener("input", validateRePassword);
document.getElementById("age").addEventListener("input", validateAge);
