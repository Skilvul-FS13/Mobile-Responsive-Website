export function handlePostFeatures(postById) {
  // // console.log('🚀 ~ file: handlePostFeatures.js:2 ~ handlePostFeatures ~ postById:', postById);
  // get all dom selectors
  const likeButton = document.querySelectorAll('#like-button');
  const commentButton = document.querySelectorAll('#comment');
  const shareButton = document.querySelectorAll('#share-button');
  const postElements = document.querySelectorAll('.post-box');
  const allLikeCount = document.querySelectorAll('.like-count');
  const toastContainer = document.querySelector('.toast-container');

  const IS_LOGGED_IN_KEY = 'isLoggedIn';
  const isLoggedIn = localStorage.getItem(IS_LOGGED_IN_KEY);

  // get each likebutton by giving btn param, and index to get each elements
  likeButton.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const postElement = postElements[index];
      const postId = postElement.getAttribute('data-post-id');
      const likeCount = allLikeCount[index];
      // // console.log('🚀 ~ file: handlePostFeatures.js:19 ~ btn.addEventListener ~ likeCount:', likeCount);

      // get each button by giving btn.innerhtml.trim() so it can detect which button like is false or true
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

  // get all comment buittons
  commentButton.forEach((btn) => {
    btn.addEventListener('click', (event) => handleFeatureNotAvailable());
  });

  // get all share buttons
  shareButton.forEach((btn) => {
    btn.addEventListener('click', (event) => handleFeatureNotAvailable());
  });

  // handle user must login before using like feature
  function handleUserLikes(postId, likeCount, isLiked) {
    // // console.log('🚀 ~ file: handlePostFeatures.js:39 ~ handleUserLikes ~ postId:', postId);

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
        // get all data api and store it to localStorage
        .then((data) => {
          // // console.log('🚀 ~ file: handlePostFeatures.js:67 ~ handleUserLikes ~ data:', data);
          return localStorage.setItem('DATA_KEY', JSON.stringify(data));
        });
    } else {
      toastContainer.innerHTML += getNotification();
      hideNextIndex(0);
    }
  }

  // handle user to unlike with condition if user is logged in
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
        // get all data api and store it to localStorage
        .then((data) => {
          // // console.log('🚀 ~ file: handlePostFeatures.js:96 ~ handleUserUnlikes ~ data:', data);
          return localStorage.setItem('DATA_KEY', JSON.stringify(data));
        });
    } else {
      const toastContainer = document.querySelector('.toast-container');
      toastContainer.innerHTML += getNotification();
      hideNextIndex(0);
    }
  }

  // handle user must login before using comment feature
  function handleFeatureNotAvailable(event) {
    toastContainer.innerHTML += getNotificationFeatures();
    hideNextIndex(0);
  }

  // handle hide next notification after 1 second
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
    // make animation fade-in for toast
    requestAnimationFrame(() => {
      currentNotif.classList.add('toast-fade-in');
    });

    // return nothing if toast exist
    if (index >= toasts.length) {
      return;
    }
    setTimeout(() => {
      currentNotif.remove();
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

  // Toast notification that features arent available yet
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
