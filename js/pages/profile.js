import showUserPosts from '../component/posts.js';
import { USER_POST_API, USER_API } from '../utils/context.js';
import { handlePostFeatures } from '../utils/handlePostFeatures.js';
import { postPlaceholder, userNotFound, userPlaceholder } from '../utils/placeholders.js';

// get profile
const getProfileByUsername = () => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('username');
};

// dom selector
const postContainer = document.querySelector('.post-list');
const profileContainer = document.querySelector('.profile');

// Fetch user post data
const userPostData = fetch(USER_POST_API).then((response) => response.json());

// Fetch user account data
const userData = fetch(USER_API).then((response) => response.json());

// Wait for both fetch operations to complete
Promise.all([userPostData, userData])
  .then(([posts, users]) => {
    const getPostByUser = posts.map((post) => {
      const user = users.find((u) => u.userId == post.userId);
      const { avatar, username, firstName, lastName } = user;
      return { ...post, avatar, username, firstName, lastName };
    });
    return getPostByUser;
  })
  .then((postByUsername) => {
    const profile = getProfileByUsername();

    const getPostByUsername = postByUsername.filter((postByUser) => {
      return postByUser.username == profile;
    });

    const getPostFiltered = getPostByUsername.map((p) => showUserPosts(p)).join('');

    // condition if user has made a post, render post by username
    if (getPostFiltered) {
      postContainer.innerHTML = getPostFiltered;
      // get all like buttons
      const likeButton = document.querySelectorAll('#like-button');
      console.log(likeButton);
      handlePostFeatures();
      // condition if user has not made any post yet, render post not found
    } else if (profileContainer.textContent.trim() == 'Pengguna tidak ditemukan') {
      postContainer.innerHTML = '';
    } else {
      postContainer.innerHTML = showUserPostUnavailable();
    }
  })
  .catch(() => (profileContainer.innerHTML = `<div>Something went wrong</div>`));

// get only profile detail by consuming account API
userData
  .then((profileDetail) => {
    const profile = getProfileByUsername();

    const getUserByParams = profileDetail.filter((user) => user.username == profile);

    const getUser = getUserByParams.map((user) => showUserProfileByUsername(user)).join('');

    if (getUser) {
      profileContainer.innerHTML = getUser;
    } else {
      profileContainer.innerHTML = userNotFound();
    }
  })
  .catch(() => (profileContainer.innerHTML = `<div>something went wrong</div>`));

// render placeholder first before render data
profileContainer.innerHTML = userPlaceholder();
postContainer.innerHTML = postPlaceholder().repeat(10);

const showUserProfileByUsername = (u) => {
  return `
  <div class="container-lg d-flex flex-column profile-banner">
    <img class="object-fit-cover rounded-bottom-2" src="${u.banner}" alt="" height="300" />
  </div>

  <div class="container profile-container mt-0 pt-0 px-lg-5">
    <div class="position-relative profile-avatar">
      <img class="position-absolute rounded-pill" src="${u.avatar}" alt="avatar" width="100" height="100" />
    </div>
    <div class="profile-detail pt-3">
      <h4 class="p-0 m-0" id="displayName">${u.firstName} ${u.lastName}</h4>
      <h5 class="text-body-secondary fw-lighter" id="username">@${u.username}</h5>
      <p>
        ${u.bio}
      </p>
    </div>
  </div>
  `;
};

const showUserPostUnavailable = () => {
  return `
  <div class="post-box rounded-2 my-3 container d-flex justify-content-center align-items-center ">
    <p class="p-0 m-0">Pengguna belum membuat post</p>
  </div>`;
};
