import showUserPosts from '../component/posts.js';
import { USER_API, USER_POST_API, formatDate } from '../utils/context.js';
import { handlePostFeatures } from '../utils/handlePostFeatures.js';
import { postPlaceholder } from '../utils/placeholders.js';

// Increase textarea height
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
});

// show data to post container from mockAPI
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
    // // console.log('🚀 ~ file: community.js:35 ~ getPostByUser ~ getPostByUser:', getPostByUser);
    return getPostByUser;
  })
  .then((postById) => {
    postById.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA; // For descending order (newest first)
    });
    const getAllPost = postById.map((p) => showUserPosts(p)).join('');
    postContainer.innerHTML = getAllPost;

    // handle post if logged in or if not logged in
    handlePostFeatures(postById);
  })
  .catch((error) => console.error(error));

// post fetch for user making a post
const postButton = document.getElementById('post');
const postInput = document.querySelector('.post-input');

// console.log('🚀 ~ file: community.js:50 ~ postInput:', postInput);
// console.log('🚀 ~ file: community.js:48 ~ postButton:', postButton);

postButton.addEventListener('click', () => {
  // get all data from localStorage
  const loadingContainer = document.querySelector('.loading');
  loadingContainer.innerHTML = spinner();
  const { ...item } = dataUser;
  const post = postInput.value;
  const newPost = {
    createdAt: new Date(),
    post: post,
    likes: 0,
    isLiked: false,
    id: item.id + 1,
    userId: item.userId,
  };
  // Fetch user post data again
  fetch(USER_POST_API, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((post) => {
      // console.log('🚀 ~ file: community.js:81 ~ .then ~ post:', post);
      window.location.reload();
    });
});

function spinner() {
  return `
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <p>Memuat</p>`;
}

// show skeleton before render data
postContainer.innerHTML = postPlaceholder().repeat(10);
