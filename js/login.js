// login page

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const error = document.getElementById('error');

const auth = localStorage.getItem('isLoggedIn');

if (auth) {
  window.location.replace('/');
  document.body.innerHTML = 'loading';
}

window.addEventListener('load', () => {
  fetch('https://651d09d644e393af2d590b6d.mockapi.io/api/v1/account')
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      findUserAccount(users);
    });

  function findUserAccount(users) {
    form.addEventListener('submit', (e) => {
      console.log('🚀 ~ file: login.js:14 ~ .then ~ users:', users);
      e.preventDefault();
      const usernameInput = username.value;
      const passwordInput = password.value;

      const user = users.find((user) => user.username === usernameInput && user.password === passwordInput);

      if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('USER_LOGGED_IN', JSON.stringify(user));

        window.location.href = 'index.html';
      } else {
        error.innerHTML = `<div>invalid username or password</div>`;
      }
    });
  }
});
