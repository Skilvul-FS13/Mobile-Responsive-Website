import showUserPosts from '../component/posts.js';
import { USER_API, USER_POST_API } from '../utils/context.js';
import { postPlaceholder } from '../utils/placeholders.js';

// Increase textarea height
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
});

// get data from mockAPI
const postContainer = document.querySelector('.post-list');

// Fetch user post data
const userPostData = fetch(USER_POST_API).then((response) => response.json());

// Fetch user account data
const userData = fetch(USER_API).then((response) => response.json());

// Wait for both fetch operations to complete
Promise.all([userPostData, userData])
  // merge user API and posts API
  .then(([posts, users]) => {
    const getPostByUser = posts.map((post) => {
      const user = users.find((u) => u.userId == post.userId);
      if (user == undefined) {
        postContainer.innerHTML = `<div>something went wrong</div>`;
      }
      const { avatar, username, firstName, lastName } = user;
      return { ...post, avatar, username, firstName, lastName };
    });
    return getPostByUser;
  })
  .then((postById) => {
    const getAllPost = postById.map((p) => showUserPosts(p)).join('');
    postContainer.innerHTML = getAllPost;
    // get all like buttons
    const likeButton = document.querySelectorAll('#like-button');

    // get all comment buttons
    const commentButton = document.querySelectorAll('#comment');

    // get all share buttons
    const shareButton = document.querySelectorAll('#share-button');

    likeButton.forEach((btn) => {
      btn.addEventListener('click', (event) => handleUserMustLoginBeforeLike());
    });

    commentButton.forEach((btn) => {
      btn.addEventListener('click', (event) => handleFeatureNotAvailable());
    });
    shareButton.forEach((btn) => {
      btn.addEventListener('click', (event) => handleFeatureNotAvailable());
    });
  })
  .catch((error) => console.error(error));

// show skeleton before render data
postContainer.innerHTML = postPlaceholder().repeat(10);

// handle user must login before using like feature
function handleUserMustLoginBeforeLike(event) {
  const IS_LOGGED_IN_KEY = 'isLoggedIn';
  const isLoggedIn = localStorage.getItem(IS_LOGGED_IN_KEY);

  if (isLoggedIn) {
    console.log('nice');
  } else {
    const toastContainer = document.querySelector('.toast-container');
    toastContainer.innerHTML += getNotification();
    hideNextIndex(0);
  }
}

// handle user must login before using comment feature
function handleFeatureNotAvailable(event) {
  const IS_LOGGED_IN_KEY = 'isLoggedIn';
  const isLoggedIn = localStorage.getItem(IS_LOGGED_IN_KEY);

  if (isLoggedIn) {
    console.log('nice');
  } else {
    const toastContainer = document.querySelector('.toast-container');
    toastContainer.innerHTML += getNotificationFeatures();
    hideNextIndex(0);
  }
}

const hideNextIndex = (index) => {
  const toasts = document.querySelectorAll('.toast');
  const currentNotif = toasts[index];
  const btnClose = document.querySelectorAll('.btn-close');

  btnClose.forEach((close) => {
    close.addEventListener('click', () => {
      for (const toast of toasts) {
        toast.classList.add('d-none');
      }
    });
  });
  // make animation fade-in for toast
  requestAnimationFrame(() => {
    currentNotif.classList.add('toast-fade-in');
  });

  // return nothing if toast exist
  if (index >= toasts.length) {
    return;
  }
  setTimeout(() => {
    currentNotif.classList.add('d-none');
    hideNextIndex(index + 1);
  }, 1000);
};

// Toast notification that you aren't login yet
function getNotification() {
  return `
  <div class="toast d-block" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Notifikasi</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">Kamu belum login</div>
  </div>`;
}

// Toast notification that you aren't login yet
function getNotificationFeatures() {
  return `
  <div class="toast d-block" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Notifikasi</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">Fitur ini belum tersedia</div>
  </div>`;
}
