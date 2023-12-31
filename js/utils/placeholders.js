export const postPlaceholder = () => {
  return `
  <div class="post-box d-flex gap-2 align-items-start rounded-2 mb-4">
  <div class="avatar">
    <a><img class="rounded-5 placeholder" src='' alt="avatar" width="50" height="50" /></a>
  </div>
  <div class="post-content w-100">
    <a class="p-0 m-0 fs-5 placeholder-glow text-dark" id="displayName">
      <span class="placeholder w-50"></span>
    </a>
    <p class="text-body-secondary placeholder-glow fw-semibold" id="date">
      <span class="placeholder w-25"></span>
    </p>
    <p class="content placeholder-glow" id="content">
      <span class="placeholder w-100"></span>
      <span class="placeholder w-100"></span>
      <span class="placeholder w-100"></span>
      <span class="placeholder w-100"></span>
    </p>
    <div class="action d-flex justify-content-between">
      <div class="like d-flex" id="like">
        <button class="border-0 m-0 p-0" type="button" id="like-button" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 10L14.26 9.87702C14.2421 9.98446 14.2479 10.0945 14.2769 10.1995C14.3058 10.3045 14.3573 10.4019 14.4277 10.485C14.4982 10.5681 14.5858 10.6348 14.6847 10.6806C14.7835 10.7263 14.8911 10.75 15 10.75V10ZM4 10V9.25002C3.80109 9.25002 3.61032 9.32904 3.46967 9.46969C3.32902 9.61035 3.25 9.80111 3.25 10H4ZM6 20.75H17.36V19.25H6V20.75ZM18.56 9.25002H15V10.75H18.56V9.25002ZM15.74 10.123L16.546 5.28802L15.066 5.04102L14.26 9.87702L15.74 10.123ZM14.82 3.25002H14.606V4.75002H14.819L14.82 3.25002ZM11.485 4.92002L8.97 8.69302L10.218 9.52502L12.733 5.75202L11.485 4.92002ZM7.93 9.25002H4V10.75H7.93V9.25002ZM3.25 10V18H4.75V10H3.25ZM20.057 18.54L21.257 12.54L19.787 12.245L18.587 18.245L20.057 18.539V18.54ZM8.97 8.69302C8.8559 8.86431 8.70127 9.00377 8.51985 9.10094C8.33842 9.1981 8.13581 9.24897 7.93 9.24902V10.749C8.85 10.749 9.708 10.29 10.218 9.52502L8.97 8.69302ZM16.546 5.28802C16.5877 5.03739 16.5743 4.77969 16.5067 4.53477C16.4392 4.28984 16.3191 4.06256 16.1549 3.86871C15.9906 3.67487 15.7861 3.51912 15.5556 3.41228C15.3251 3.30543 15.0741 3.25007 14.82 3.25002L14.819 4.75002C14.8552 4.75011 14.892 4.75808 14.9249 4.77338C14.9578 4.78868 14.9869 4.81094 15.0103 4.83863C15.0337 4.86631 15.0508 4.89875 15.0604 4.9337C15.07 4.96864 15.0719 5.00527 15.066 5.04102L16.546 5.28802ZM18.56 10.749C19.35 10.749 19.94 11.471 19.786 12.244L21.257 12.539C21.3366 12.1401 21.3267 11.7275 21.228 11.3329C21.1293 10.9383 20.9443 10.5705 20.6864 10.256C20.4284 9.94148 20.1039 9.68812 19.7362 9.51417C19.3685 9.34022 18.9668 9.25 18.56 9.25002V10.75V10.749ZM17.36 20.75C17.9957 20.7501 18.6118 20.529 19.1035 20.1261C19.5952 19.7232 19.9322 19.1624 20.057 18.539L18.587 18.244C18.5303 18.5276 18.377 18.7828 18.1533 18.966C17.9296 19.1493 17.6492 19.2503 17.36 19.25V20.75ZM14.606 3.25002C13.9887 3.25007 13.3809 3.40152 12.8366 3.69284C12.2923 3.98417 11.8284 4.40536 11.486 4.91902L12.733 5.75202C12.9385 5.44368 13.2171 5.18988 13.5438 5.01508C13.8706 4.84028 14.2354 4.74989 14.606 4.75002V3.25002ZM6 19.25C5.31 19.25 4.75 18.69 4.75 18H3.25C3.25 18.7294 3.53973 19.4288 4.05546 19.9446C4.57118 20.4603 5.27065 20.75 6 20.75V19.25Z"
              fill="black"
            />
            <path d="M8 10V20" stroke="black" stroke-width="1.5" />
          </svg>
        </button>
        <p class="text-body-secondary">0</p>
      </div>
      <div class="commment d-flex" id="comment">
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
        <p class="text-body-secondary">0</p>
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

export const userPlaceholder = () => {
  return `
  <div class="container-lg placeholder d-flex flex-column profile-banner">
    <img class="object-fit-cover placeholder rounded-bottom-2" src="" alt="" height="300" loading="lazy" />
  </div>

  <div class="container profile-container mt-0 pt-0 px-lg-5">
    <div class="position-relative placeholder profile-avatar">
      <img class="position-absolute placeholder rounded-pill" src="" alt="avatar" width="100" height="100" />
    </div>
    <div class="profile-detail pt-3">
      <h4 class="p-0 m-0 placeholder-glow" id="displayName">
        <span class="placeholder w-25"></span>
      </h4>
      <h5 class="text-body-secondary placeholder-glow fw-lighter" id="username">
        <span class="placeholder w-25"></span>
      </h5>
      <p class="placeholder-glow">
        <span class="placeholder w-100"></span>
        <span class="placeholder w-100"></span>
        <span class="placeholder w-100"></span>
      </p>
    </div>
  </div>
  `;
};

export const userNotFound = () => {
  return `
  <div class="container placeholder d-flex flex-column profile-banner" >
    <img class="object-fit-cover placeholder rounded-bottom-2" src="" alt="" height="300" loading="lazy" />
  </div>

  <div class="container profile-container mt-0 pt-0 px-lg-5" style="height: 100vh">
    <div class="position-relative placeholder profile-avatar">
      <img class="position-absolute placeholder rounded-pill" src="" alt="avatar" width="100" height="100" />
    </div>
    <div class="profile-detail pt-3">
      <h4 class="p-0 m-0 " id="displayName">
        <span class="">Pengguna tidak ditemukan</span>
      </h4>
      <h5 class="text-body-secondary placeholder-glow fw-lighter" id="username">
        <span class="placeholder w-25"></span>
      </h5>
      <p class="placeholder-glow">
        <span class="placeholder w-100"></span>
        <span class="placeholder w-100"></span>
        <span class="placeholder w-100"></span>
      </p>
    </div>
  </div>
  `;
};
