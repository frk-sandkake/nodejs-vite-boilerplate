import '../style.css'

const contactForm = document.querySelector("#contact-form");

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
const generalErrorMessage = document.querySelector("#general-error-message");


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
  isValidPasswordMatch = validatePassword(); // true // false

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

    const REGISTER_USER_URL_ENDPOINT = "https://nf-api.onrender.com/api/v1/social/auth/register";

    (async function signUpUser() {
      const response = await fetch(REGISTER_USER_URL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log("POST REQUEST SUCCEEDED!!  🥳 🤗🤗");
        return data;
      } else {
        const err = await response.json();
        const message = `An error occurred: ${err.message}`;
        console.log("POST REQUEST Failed!!  💩");
        throw new Error(message);
      }
    })().catch(err => {
      generalErrorMessage.innerHTML = `Sorry !! ${err.message}`
    });

  } else {
    console.log("Validation FAILED!! 💩");
  }
});

function validateEmail(email) {
  const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;
  if (email.match(regEx)) {
    return true;
  } else {
    return false;
  }
}

function validatePassword() {
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (!passwordValue) {
    return false;
  }
  if (!confirmPasswordValue) {
    return false;
  }
  if (passwordValue !== confirmPasswordValue) {
    confirmPasswordErrorNotMatching.classList.remove("hidden");
    return false;
  } else {
    confirmPasswordErrorNotMatching.classList.add("hidden");
    return true;
  }
}