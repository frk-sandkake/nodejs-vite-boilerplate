const tokenKey = "token";
const userKey = "user";

function saveToken(token) {
  console.log("token: ", token);
  console.log("tokenKey: ", tokenKey);
  saveToStorage(tokenKey, token);
}

function getToken() {
  return getFromStorage(tokenKey);
}

function saveUser(user) {
  saveToStorage(userKey, user);
}

// This is for the createHeaderBar function in creatHeaderBar.js
function getUserName() {
  const user = getFromStorage(userKey);
  if (userKey) {
    return user.name
  } else {
    return null;
  }
}


function getUserEmail() {
  const user = getFromStorage(userKey);
  if (userKey) {
    return user.email
  } else {
    return null;
  }
}

// function that saves data to local storage
function saveToStorage(key, value) {
  console.log("saveToStorage: ", key, value);
  localStorage.setItem(key, JSON.stringify(value))
}


// function which clears the Local Storage
function clearStorage() {
  localStorage.clear();
}

// Function that gets data from local storage
function getFromStorage(key) {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return []
  }
}

export {getToken, saveToken, saveUser, getUserName, getUserEmail, clearStorage}