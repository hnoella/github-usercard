import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const entryPoint = document.querySelector(".cards");
axios.get("https://api.github.com/users/hnoella").then((res) => {
  entryPoint.appendChild(cardMaker(res.data));
});

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

followersArray.forEach((username) => {
  axios.get(`https://api.github.com/users/${username}`).then((res) => {
    entryPoint.appendChild(cardMaker(res.data));
  });
});

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

// followersArray.forEach((username) => {
//   getInfo(username);
// });
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(
  name,
  login,
  location,
  github,
  url,
  followers,
  following,
  bio,
  avatar_url,
  html_url
) {
  const card1 = document.createElement("div");
  const image = document.createElement("img");
  const information = document.createElement("div");
  const userName = document.createElement("h3");
  const username1 = document.createElement("p");
  const location1 = document.createElement("p");
  const profile1 = document.createElement("p");
  const link = document.createElement("a");
  const followers1 = document.createElement("p");
  const following1 = document.createElement("p");
  const bio1 = document.createElement("p");

  card1.classList.add("card");
  information.classList.add("card-info");
  userName.classList.add("name");
  username1.classList.add("username");

  card1.appendChild(image);
  card1.appendChild(information);
  information.appendChild(userName);
  information.appendChild(username1);
  information.appendChild(location1);
  information.appendChild(profile1);
  profile1.appendChild(link);
  information.appendChild(followers1);
  information.appendChild(following1);
  information.appendChild(bio1);

  image.setAttribute("src", avatar_url);
  image.setAttribute("alt", name);
  link.setAttribute("href", url);
  userName.textContent = name;
  username1.textContent = login;
  location1.textContent = location;
  link.textContent = html_url;
  profile1.textContent = github;
  followers1.textContent = followers;
  following1.textContent = following;
  bio1.textContent = bio;

  return card1;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
