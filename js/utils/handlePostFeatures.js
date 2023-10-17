export function handlePostFeatures(postById) {
  console.log('🚀 ~ file: handlePostFeatures.js:2 ~ handlePostFeatures ~ postById:', postById);
  // get all like buttons
  const likeButton = document.querySelectorAll('#like-button');

  // get all comment buttons
  const commentButton = document.querySelectorAll('#comment');

  // get all share buttons
  const shareButton = document.querySelectorAll('#share-button');
  likeButton.forEach((btn) => {
    btn.addEventListener('click', (event) => handleUserIsLoggedIn());
  });

  commentButton.forEach((btn) => {
    btn.addEventListener('click', (event) => handleFeatureNotAvailable());
  });
  shareButton.forEach((btn) => {
    btn.addEventListener('click', (event) => handleFeatureNotAvailable());
  });

  // handle user must login before using like feature
  function handleUserIsLoggedIn(event) {
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
}
