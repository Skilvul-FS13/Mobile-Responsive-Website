const AUTH_KEY = 'c5aed7e7f609d2370861f380eccb94e6';
const API_URL = 'https://651d09d644e393af2d590b6d.mockapi.io/api/v1/account';

const loginFormElement = document.getElementById('registration-form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

loginFormElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  let isValid = true;

  if (firstName.trim() === '') {
    showError(firstNameInput, firstNameError, 'Nama Depan harus diisi.');
    isValid = false;
  } else {
    hideError(firstNameInput, firstNameError);
  }

  if (lastName.trim() === '') {
    showError(lastNameInput, lastNameError, 'Nama Belakang harus diisi.');
    isValid = false;
  } else {
    hideError(lastNameInput, lastNameError);
  }

  if (email.trim() === '') {
    showError(emailInput, emailError, 'Email harus diisi.');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError(emailInput, emailError, "Email tidak valid. email harus mengandung karakter '@'.");
    isValid = false;
  } else {
    hideError(emailInput, emailError);
  }

  if (password === '') {
    showError(passwordInput, passwordError, 'Password harus diisi.');
    isValid = false;
  } else {
    hideError(passwordInput, passwordError);
  }

  if (confirmPassword === '') {
    showError(confirmPasswordInput, confirmPasswordError, 'Konfirmasi Password harus diisi.');
    isValid = false;
  } else if (password !== confirmPassword) {
    showError(confirmPasswordInput, confirmPasswordError, 'Konfirmasi Password tidak cocok.');
    isValid = false;
  } else {
    hideError(confirmPasswordInput, confirmPasswordError);
  }

  if (isValid) {
    const body = {
      firstName,
      lastName,
      email,
      username,
      password,
    };

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed. Please check your credentials.');
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        // Simpan data register ke localStorage
        const stringify = JSON.stringify(response);
        localStorage.setItem(AUTH_KEY, stringify);

        // Tampilkan modal success
        showRegisterModal();
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

// fungsi showLoginModal
function showRegisterModal() {
  const successModal = document.getElementById('successRegisterModal');
  successModal.style.display = 'block';

  // Event listener untuk tombol "Login"
  const loginButton = successModal.querySelector('.btn-primary');
  loginButton.addEventListener('click', function () {
    // Alihkan pengguna ke halaman home
    window.location.href = '../Auth/login.html';
  });
}

function showError(input, errorElement, errorMessage) {
  input.classList.add('is-invalid');
  errorElement.textContent = errorMessage;
  errorElement.style.display = 'block';
}

function hideError(input, errorElement) {
  input.classList.remove('is-invalid');
  errorElement.textContent = '';
  errorElement.style.display = 'none';
}

function isValidEmail(email) {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
}
