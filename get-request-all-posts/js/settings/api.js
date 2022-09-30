import {getUserName} from '../utils/storage';

const userName = getUserName();
console.log("userName: ", userName);

// The base of the API
const API_BASE_URL = "https://nf-api.onrender.com/"
// AUTH
const USER_LOGIN_URL = API_BASE_URL + "api/v1/social/auth/login"
const USER_SIGNUP_URL = API_BASE_URL + "api/v1/social/auth/register"

//POSTS
const CREATE_POST_URL = API_BASE_URL + "api/v1/social/posts"
const GET_POSTS_URL = API_BASE_URL + "api/v1/social/posts"
const GET_USER_POSTS_URL = API_BASE_URL + `api/v1/social/profiles/${userName}?_posts=true`

export {API_BASE_URL, USER_LOGIN_URL, USER_SIGNUP_URL, CREATE_POST_URL, GET_POSTS_URL, GET_USER_POSTS_URL};
