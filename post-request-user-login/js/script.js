import '../style.css'

import {USER_LOGIN_URL} from './settings/api'
console.log(USER_LOGIN_URL);

import {saveToken, saveUser} from './utils/storage'
// console.log(getToken); imported just to check
console.log(saveToken);
console.log(saveUser);
// console.log(getUserName); imported just to check

import createHeaderBar from "./components/createHeaderBar";

const logInForm = document.getElementById('logInForm');
// console.log(logInForm);

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const emailErrorNotValid = document.getElementById('emailErrorNotValid');
// console.log(email);
// console.log(emailError);
// console.log(emailErrorNotValid);

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
// console.log(password);
// console.log(passwordError);

const generalErrorMessage = document.getElementById('generalErrorMessage');
// console.log(generalErrorMessage);

createHeaderBar();
if (logInForm) {
  logInForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let isEmail = false;
    if (email.value.trim().length > 0) {
      emailError.classList.add("hidden");
      isEmail = true;
     // console.log("isEmail: ", isEmail);
    } else {
      emailError.classList.remove("hidden");
     // console.log("isEmail: ", isEmail);
    }

    let isValidEmail = false;
    if (email.value.trim().length && validateEmail(email.value) === true) {
      emailErrorNotValid.classList.add("hidden");
      isValidEmail = true;
     // console.log("isValidEmail: ", isValidEmail);
    } else if (email.value.trim().length && validateEmail(email.value) !== true) {
      emailErrorNotValid.classList.remove("hidden");
     // console.log("isValidEmail: ", isValidEmail);
    }

    let isPasswordsValid = false;
    if (password.value.trim().length >= 8) {
      passwordError.classList.add("hidden");
      isPasswordsValid = true;
      // console.log("isPasswordsValid: ", isPasswordsValid);
    } else {
      passwordError.classList.remove("hidden");
     // console.log("isPasswordsValid: ", isPasswordsValid);
    }

    let isFormValid = isEmail && isValidEmail && isPasswordsValid;

    if (isFormValid) {
      console.log("isFormValid: ", isFormValid);
      const userData = {
        "email": email.value,
        "password": password.value
      }
      console.log("show user object: ", userData);

      const LOGIN_USER_URL_ENDPOINT = `${USER_LOGIN_URL}`; // imported from ./settings/api.js
      console.log("show URL: ", LOGIN_USER_URL_ENDPOINT); // will show when isFormValid === true;

      (async function logInUser() {
        const response = await fetch(LOGIN_USER_URL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        });

        if (response.ok) {
          const data = await response.json();

          console.log(data); // will show when isFormValid = true
          console.log(data.accessToken);
          // make saveToken function in storage.js
          saveToken(data.accessToken);

          // save user
          const userToSave = {
            name: data.name,
            email: data.email
          }
          console.log(userToSave);
          // make saveUser function in storage.js
          saveUser(userToSave);
          console.log("POST REQUEST LOGIN SUCCEEDED!!  🥳 🤗");
          location.href = "/welcome.html"

        } else {
          const err = await response.json();
          console.log("err: ", err);
          const message = `An error occurred: ${err.message}`;
          console.log("message: ", message);
          console.log("else: POST REQUEST LOGIN Failed!!  💩");
          throw new Error(message);
        }
      })().catch(err => {
        generalErrorMessage.innerHTML = `Sorry !! ${err.message}`;
        console.log("catch: POST REQUEST LOGIN Failed!!  💩");
      });

    } else {
      console.log("Validation FAILED!! 💩 isFormValid: ", isFormValid);
    }

  });
}

function validateEmail(email) {
  const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;
  return !!email.match(regEx);
  // is the same as: return email.match(regEx) ? true : false;
}