import {getUserName} from "../utils/storage";

function createHeaderBar() {
  const {pathname} = document.location;
  const navBar = document.getElementById('nav-bar');

  const userName = getUserName();
  console.log("userName: ", userName);

  let authLink = `<a href="/login.html" class="${pathname === "/login.html" ? "text-blue-600" : ""}">
                    LogIn
                    </a>`;
  if (userName) {
    authLink = `<span>Hello 👋  ${userName}</span>`
  }

  navBar.innerHTML = `
    <ul class="flex">
        <li class="p-8">
            <a href="/index.html" class="${pathname === "/" ? "text-blue-600" : ""}">
            Home
            </a>
        </li>
        <li class="p-8">
        ${authLink}
        </li>
    </ul>`
}

export default createHeaderBar;