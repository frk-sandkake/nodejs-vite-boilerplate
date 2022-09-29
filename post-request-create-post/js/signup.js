import {USER_SIGNUP_URL} from "./settings/api";
import {validatePassword, validateEmail} from "./utils/validation";

const contactForm = document.querySelector("#signup-form");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailErrorNotValid = document.querySelector("#emailErrorNotValid");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

const confirmPassword = document.querySelector("#confirm_password");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

const confirmPasswordErrorNotMatching = document.querySelector("#confirmPasswordErrorNotMatching");
const generalErrorMessage = document.querySelector("#generalErrorMessage");


contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isFirstName = false;
    if (firstName.value.trim().length > 0) {
      firstNameError.classList.add("hidden");
      isFirstName = true;
    } else {
      firstNameError.classList.remove("hidden");
    }

    let isEmail = false;
    if (email.value.trim().length > 0) {
      emailError.classList.add("hidden");
      isEmail = true;
    } else {
      emailError.classList.remove("hidden");
    }

    let isValidEmail = false;
    if (email.value.trim().length && validateEmail(email.value) === true) {
      emailErrorNotValid.classList.add("hidden");
      isValidEmail = true;
    } else if (email.value.trim().length && validateEmail(email.value) !== true) {
      emailErrorNotValid.classList.remove("hidden");
    }

    let isPassword = false;

    if (password.value.trim().length >= 8) {
      passwordError.classList.add("hidden");
      isPassword = true;
    } else {
      passwordError.classList.remove("hidden");
    }

    let isConfirmPassword = false;
    if (confirmPassword.value.trim().length >= 8) {
      confirmPasswordError.classList.add("hidden");
      isConfirmPassword = true;
    } else {
      confirmPasswordError.classList.remove("hidden");
    }

    let isValidPasswordMatch = false;
    isValidPasswordMatch = validatePassword(password.value, confirmPassword.value); // true // false
    if (isValidPasswordMatch) {
      confirmPasswordErrorNotMatching.classList.add("hidden");
      isValidPasswordMatch = true
    } else {
      confirmPasswordErrorNotMatching.classList.remove("hidden");
    }
    let isFormValid = isFirstName &&
      isEmail &&
      isValidEmail &&
      isPassword &&
      isConfirmPassword &&
      isValidPasswordMatch;

    if (isFormValid) {
      console.log("Validation SUCCEEDED!!  🥳");
      const userData = {
        "name": firstName.value,
        "email": email.value,
        "password": password.value
      }

      const REGISTER_USER_URL_ENDPOINT = USER_SIGNUP_URL;

      (async function signUpUser() {
        try {
          const response = await fetch(REGISTER_USER_URL_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
          });

          const data = await response.json();

          if (response.ok) {
            console.log("POST REQUEST SUCCEEDED!!  🥳 🤗🤗");
          } else {
            generalErrorMessage.innerHTML = `Sorry !! ${data.message}`
          }
        } catch (e) {
          console.log(e);
        }
      })();

    } else {
      console.log("Validation FAILED!! 💩");
    }
});
