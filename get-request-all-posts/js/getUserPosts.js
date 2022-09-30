import moment from "moment";
import {GET_USER_POSTS_URL} from "./settings/api";
import {getToken} from "./utils/storage";

console.log("GET_USER_POSTS_URL: ", GET_USER_POSTS_URL);
let now = moment(new Date()); //today's date

const postsContainer = document.querySelector("#postsContainer");
const accessToken = getToken();

console.log(postsContainer);
console.log("accessToken: ", accessToken);


(async function getUserPosts() {
  const response = await fetch(GET_USER_POSTS_URL, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  })
  console.log("get users posts response: ", response)
  if (response.ok) {
    const jsonResponse = await response.json();
    console.log("GET MY POSTS SUCCEEDED!!  🥳 🤗🤗");
    console.log("jsonResponse: ", jsonResponse);
    console.log("jsonResponse posts: ", jsonResponse.posts);
    const {banner, avatar, posts} = jsonResponse;
    postsContainer.innerHTML = `url="${banner}"`
    console.log("posts: ", posts);
    const numberOfPosts = posts.length;
    for (let i = 0; i < numberOfPosts; i++) {
      console.log("posts: ", posts[i].body);
      const {created, title, owner, body, tags} = posts[i]; // for moment data
      const createdDate = now.diff(created, "hours");
      postsContainer.innerHTML += `
            <li class="relative px-4 py-5 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50">
                <div class="flex justify-between space-x-3">
                    <div class="flex-1 min-w-0">
                        <a href="#" class="block focus:outline-none">
                            <span class="absolute inset-0" aria-hidden="true"></span>
                            <p class="text-sm font-medium text-gray-900 truncate">${owner}</p>
                            <p class="text-sm text-gray-500 truncate">${title}</p>                          
                        </a>
                    </div>
                    <time datetime="2021-01-27T16:35" class="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap">
                        ${createdDate} h ago
                    </time>
                </div>
                <div class="mt-1">
                    <p class="text-sm text-gray-600 line-clamp-2">${body}</p>
                     <span>Tags: ${tags[0]}, ${tags[1]}</span>
                </div>
            </li>
            `
    }

  } else {
    const err = await response.json();
    console.log(err);
    console.log("GET MY POSTS FAILED!!  😥😥😥");
  }

})();