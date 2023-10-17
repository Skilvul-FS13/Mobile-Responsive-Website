import showUserPosts from '../component/posts.js';
import { USER_API, USER_POST_API } from '../utils/context.js';
import { handlePostFeatures } from '../utils/handlePostFeatures.js';
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

    // handle post if logged in or if not logged in
    handlePostFeatures();
  })
  .catch((error) => console.error(error));

// show skeleton before render data
postContainer.innerHTML = postPlaceholder().repeat(10);
