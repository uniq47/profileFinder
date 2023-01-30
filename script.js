"use strict";

const button = document.querySelector("#search-usernameBtn");
const input= document.querySelector("#search-username");
const userInfo = document.querySelector("#intro");
console.log(userInfo);
console.log(input);
const url = "https://api.github.com/users/";
const username = "uniq47";

//console.log(url);
//nsole.log(window);

//button.document.addEventListener("click", (e) => {



const displayProfile = (profile) => {
  return`<div class="user-info" id="user-info">
          <figure>
            <img
              alt="user avatar"
              src=${profile.avatar_url}
            />
          </figure>
          <div>
            <h2>
              <a href="${profile.html_url}"><strong>${profile.name}</strong></a
              >&nbsp;<strong class="username">${profile.login}</strong>
            </h2>

            <p>${profile.bio}</p>
            <p><strong class="blue">Location: </strong>${profile.location}</p>
            <p>
              <strong class="blue">Repos: </strong>${profile.public_repos}
              <strong class="blue">Followers: </strong>${profile.followers}
            <strong class="blue">Following: </strong>${profile.following}
            </p>
          </div>
        </div>
        `;
};

const fetchProfile = async () => {
  try {
    const response = await fetch(`${url}${input.value}`);
    const data = await response.json();
    console.log(data);
    if(data.bio){
    userInfo.innerHTML = displayProfile(data);
    }
    else{
        userInfo.innerText="";
        userSection.innerText=""
    }
  } catch (error) {
    Console.log(error);
  }
};


button.addEventListener("click", (e) => {
    //console.log(input.value);
    fetchProfile();
    fetchRepos();
});


    

//fetchProfile();


// const displayRepos = (repos) =>{
//     return `<h1>YOOOO this is the RePOs </hq>`
// }


// const fetchRepos = async () => {
//   try {
//     const repos = await fetch(`${url}${input.value}/repos`);
//     const data = await repos.json();
//     //userInfo.innerHTML= displayProfile(data);
//     //console.log(data);
//   } catch {
//     Console.log(error);
//   }
// };
//fetchRepos();



