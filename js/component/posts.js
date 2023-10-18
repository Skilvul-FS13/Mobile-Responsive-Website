import { formatDate } from '../utils/context.js';

const showUserPosts = (p) => {
  // console.log('🚀 ~ file: posts.js:4 ~ showUserPosts ~ p:', p);
  return `
  <div class="post-box d-flex gap-2 align-items-start rounded-2 mb-4" data-post-id="${p.id}">
    <div class="avatar">
      <a href="./profile.html?username=${p.username}"><img class="rounded-5" src="${p.avatar}" alt="avatar" width="50" height="50" /></a>
    </div>
    <div class="post-content w-100">
      <a href="./profile.html?username=${p.username}" class="p-0 m-0 fs-5 text-dark" id="displayName">${p.firstName} ${p.lastName} <span class="fs-6 fw-light text-black-50">@${p.username}</span></a>
      <p class="text-black-50 fw-semibold" id="date">${formatDate(p.createdAt)} WIB</p>
      <p class="content" id="content">
       ${p.post}
      </p>
      <div class="action d-flex justify-content-between align-items-center">
      
        <div class="like d-flex align-items-center" id="like">
          <button class="border-0 m-0 p-0" type="button" id="like-button" role="button">
             ${p.isLiked ? '<i class="bi bi-tree-fill"></i>' : '<i class="bi bi-tree"></i>'}
          </button>
          <p class="like-count p-0 m-0 text-body-secondary">${p.likes}</p>
        </div>
        <div class="comment d-flex" id="comment">
          <button class="border-0 m-0 p-0" type="button" id="comment-button" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                d="M12.5 21C14.28 21 16.0201 20.4722 17.5001 19.4832C18.9802 18.4943 20.1337 17.0887 20.8149 15.4442C21.4961 13.7996 21.6743 11.99 21.3271 10.2442C20.9798 8.49836 20.1226 6.89472 18.864 5.63604C17.6053 4.37737 16.0016 3.5202 14.2558 3.17294C12.51 2.82567 10.7004 3.0039 9.05585 3.68509C7.41131 4.36628 6.00571 5.51983 5.01677 6.99987C4.02784 8.47991 3.5 10.22 3.5 12C3.5 13.488 3.86 14.891 4.5 16.127L3.5 21L8.373 20C9.609 20.64 11.013 21 12.5 21Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p class="text-body-secondary p-0 m-0 ">0</p>
        </div>
        <div class="share d-flex" id="share">
          <button class="border-0 m-0 p-0" type="button" id="share-button" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7.21669 10.907C6.97455 10.4714 6.59459 10.1284 6.13646 9.93202C5.67832 9.73564 5.16794 9.69695 4.68544 9.82202C4.20293 9.94709 3.77562 10.2288 3.47057 10.623C3.16552 11.0172 3 11.5016 3 12C3 12.4985 3.16552 12.9828 3.47057 13.377C3.77562 13.7712 4.20293 14.053 4.68544 14.1781C5.16794 14.3031 5.67832 14.2644 6.13646 14.0681C6.59459 13.8717 6.97455 13.5287 7.21669 13.093M7.21669 10.907C7.39669 11.231 7.49969 11.603 7.49969 12C7.49969 12.397 7.39669 12.77 7.21669 13.093M7.21669 10.907L16.7827 5.59304M7.21669 13.093L16.7827 18.407M16.7827 5.59304C16.9229 5.85718 17.1144 6.0907 17.346 6.27997C17.5776 6.46923 17.8445 6.61043 18.1313 6.69532C18.4181 6.7802 18.7189 6.80706 19.0161 6.77433C19.3134 6.7416 19.6012 6.64994 19.8626 6.5047C20.124 6.35946 20.3539 6.16356 20.5387 5.92845C20.7236 5.69334 20.8597 5.42375 20.9391 5.13542C21.0185 4.8471 21.0397 4.54583 21.0013 4.24923C20.963 3.95264 20.8659 3.66667 20.7157 3.40804C20.4198 2.89838 19.9357 2.52518 19.3675 2.36865C18.7993 2.21213 18.1924 2.28478 17.6772 2.57099C17.162 2.8572 16.7797 3.33412 16.6124 3.89923C16.4452 4.46434 16.5063 5.07252 16.7827 5.59304ZM16.7827 18.407C16.6392 18.6654 16.5479 18.9495 16.5142 19.2432C16.4804 19.5368 16.5049 19.8342 16.5861 20.1184C16.6673 20.4026 16.8037 20.668 16.9875 20.8995C17.1712 21.131 17.3988 21.324 17.6572 21.4675C17.9156 21.6111 18.1997 21.7023 18.4933 21.736C18.787 21.7698 19.0844 21.7453 19.3685 21.6641C19.6527 21.5829 19.9182 21.4465 20.1496 21.2628C20.3811 21.079 20.5742 20.8514 20.7177 20.593C21.0076 20.0712 21.0783 19.4556 20.9143 18.8817C20.7503 18.3077 20.365 17.8224 19.8432 17.5325C19.3214 17.2427 18.7058 17.1719 18.1318 17.3359C17.5579 17.4999 17.0726 17.8852 16.7827 18.407Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>`;
};

export default showUserPosts;
