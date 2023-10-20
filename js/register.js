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
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInput = username.value;
    const passwordInput = password.value;
    const newAccount = {
      username: usernameInput,
      password: passwordInput,
    };

    fetch('https://651d09d644e393af2d590b6d.mockapi.io/api/v1/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAccount),
    })
      .then((response) => response.json())
      .then((data) => console.log('data has been created', data))
      .catch((error) => console.log('data failed', error));

    createNewAccount(newAccount);
  });
});
