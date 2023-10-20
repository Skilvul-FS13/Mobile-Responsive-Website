export function handlePostFeatures(postById) {
  const likeButton = document.querySelectorAll('#like-button');
  const commentButton = document.querySelectorAll('#comment');
  const shareButton = document.querySelectorAll('#share-button');
  const postElements = document.querySelectorAll('.post-box');
  const allLikeCount = document.querySelectorAll('.like-count');
  const toastContainer = document.querySelector('.toast-container');

  const IS_LOGGED_IN_KEY = 'isLoggedIn';
  const isLoggedIn = localStorage.getItem(IS_LOGGED_IN_KEY);

  likeButton.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const postElement = postElements[index];
      const postId = postElement.getAttribute('data-post-id');
      const likeCount = allLikeCount[index];

      if (isLoggedIn) {
        if (btn.innerHTML.trim() == '<i class="bi bi-tree-fill"></i>') {
          let isLiked = false;
          handleUserUnlikes(postId, likeCount, isLiked);
          likeCount.innerHTML = parseInt(likeCount.textContent) - 1;
          btn.innerHTML = '<i class="bi bi-tree"></i>';
        } else {
          let isLiked = true;
          handleUserLikes(postId, likeCount, isLiked);
          likeCount.innerHTML = parseInt(likeCount.textContent) + 1;
          btn.innerHTML = '<i class="bi bi-tree-fill"></i>';
        }
      } else {
        toastContainer.innerHTML += getNotification();
        hideNextIndex(0);
      }
    });
  });

  commentButton.forEach((btn) => {
    btn.addEventListener('click', (event) => handleFeatureNotAvailable());
  });

  shareButton.forEach((btn) => {
    btn.addEventListener('click', (event) => handleFeatureNotAvailable());
  });

  function handleUserLikes(postId, likeCount, isLiked) {
    if (isLoggedIn) {
      fetch(`https://651d09d644e393af2d590b6d.mockapi.io/api/v1/userPost/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
          likes: parseInt(likeCount.innerHTML) + 1,
          isLiked: isLiked,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return localStorage.setItem('DATA_KEY', JSON.stringify(data));
        });
    } else {
      toastContainer.innerHTML += getNotification();
      hideNextIndex(0);
    }
  }

  function handleUserUnlikes(postId, likeCount, isLiked) {
    const IS_LOGGED_IN_KEY = 'isLoggedIn';
    const isLoggedIn = localStorage.getItem(IS_LOGGED_IN_KEY);

    if (isLoggedIn) {
      fetch(`https://651d09d644e393af2d590b6d.mockapi.io/api/v1/userPost/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
          likes: parseInt(likeCount.innerHTML) - 1,
          isLiked: isLiked,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return localStorage.setItem('DATA_KEY', JSON.stringify(data));
        });
    } else {
      const toastContainer = document.querySelector('.toast-container');
      toastContainer.innerHTML += getNotification();
      hideNextIndex(0);
    }
  }

  function handleFeatureNotAvailable(event) {
    toastContainer.innerHTML += getNotificationFeatures();
    hideNextIndex(0);
  }

  const hideNextIndex = (index) => {
    const toasts = document.querySelectorAll('.toast');
    const currentNotif = toasts[index];
    const btnClose = document.querySelectorAll('.btn-close');

    btnClose.forEach((close) => {
      close.addEventListener('click', () => {
        for (const toast of toasts) {
          toast.remove();
        }
      });
    });
    requestAnimationFrame(() => {
      currentNotif.classList.add('toast-fade-in');
    });

    if (index >= toasts.length) {
      return;
    }
    setTimeout(() => {
      currentNotif.remove();
      hideNextIndex(index + 1);
    }, 1000);
  };

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
