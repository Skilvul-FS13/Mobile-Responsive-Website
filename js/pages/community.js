import showUserPosts from '../component/posts.js';
import { USER_API, USER_POST_API } from '../utils/context.js';
import { handlePostFeatures } from '../utils/handlePostFeatures.js';
import { postPlaceholder } from '../utils/placeholders.js';

const textarea = document.querySelector('textarea');

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
});

const postContainer = document.querySelector('.post-list');

const userPostData = fetch(USER_POST_API).then((response) => response.json());

const userData = fetch(USER_API).then((response) => response.json());

Promise.all([userPostData, userData])

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
    postById.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
    const getAllPost = postById.map((p) => showUserPosts(p)).join('');
    postContainer.innerHTML = getAllPost;

    handlePostFeatures(postById);
  })
  .catch((error) => console.error(error));

const postButton = document.getElementById('post');
const postInput = document.querySelector('.post-input');

postButton.addEventListener('click', () => {
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
  fetch(USER_POST_API, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((post) => {
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

postContainer.innerHTML = postPlaceholder().repeat(10);
