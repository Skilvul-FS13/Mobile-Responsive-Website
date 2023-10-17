
const AUTH_KEY = 'c5aed7e7f609d2370861f380eccb94e6';
const API_URL = 'https://651d09d644e393af2d590b6d.mockapi.io/api/v1/account';

const loginFormElement = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    let isValid = true;

    if (email.trim() === '') {
        showError(emailInput, emailError, 'Email harus diisi.');
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

    if (isValid) {
        const body = {
            email,
            password,
        };

        fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(body),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Login failed. Please check your credentials.');
                }
                return response.json();
            })
            .then((response) => {
                // Simpan data login ke localStorage
                const stringify = JSON.stringify(response);
                localStorage.setItem(AUTH_KEY, stringify);

                // Tampilkan modal success
                showLoginModal();

            })
            .catch((error) => {
                console.error(error);
            });
    }
});

// Fungsi untuk menampilkan login modal
function showLoginModal() {
    const successModal = document.getElementById("successLoginModal");
    successModal.style.display = "block";

    // Event listener untuk tombol "Close"
    const closeButton = successModal.querySelector('.btn-secondary');
    closeButton.addEventListener('click', function () {
        // Alihkan pengguna ke halaman home
        window.location.href = '../index.html';
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