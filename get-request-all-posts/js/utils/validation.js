function validateEmail(email) {
  const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;
  return !!email.match(regEx);
  // is the same as: return email.match(regEx) ? true : false;
}


function validatePassword(password, confirmPassword) {
  console.log(password)
  console.log(confirmPassword)
  if (!password) {
    return false;
  }
  if (!confirmPassword) {
    return false;
  }
  return password === confirmPassword;
  /* last return is the same as;

  if (password !== confirmPassword) {
    return false;
  } else {
    return true;
  }*/
}

export {validateEmail, validatePassword}