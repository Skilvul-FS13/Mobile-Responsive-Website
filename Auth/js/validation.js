// fungsi validateRegistration
function validateRegistrationForm() {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    let isValid = true;

    if (firstNameInput.value.trim() === "") {
        showError(firstNameInput, firstNameError, "Nama Depan harus diisi.");
        isValid = false;
    } else {
        hideError(firstNameInput, firstNameError);
    }

    if (lastNameInput.value.trim() === "") {
        showError(lastNameInput, lastNameError, "Nama Belakang harus diisi.");
        isValid = false;
    } else {
        hideError(lastNameInput, lastNameError);
    }

    if (emailInput.value.trim() === "") {
        showError(emailInput, emailError, "Email harus diisi.");
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, emailError, "Email tidak valid. email harus mengandung karakter '@'.");
        isValid = false;
    } else {
        hideError(emailInput, emailError);
    }

    if (passwordInput.value === "") {
        showError(passwordInput, passwordError, "Password harus diisi.");
        isValid = false;
    } else {
        hideError(passwordInput, passwordError);
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, confirmPasswordError, "Konfirmasi Password tidak cocok.");
        isValid = false;
    } else {
        hideError(confirmPasswordInput, confirmPasswordError);
    }

    return isValid;
}


// fungsi validateLogin
function validateLoginForm() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    if (emailInput.value.trim() === "") {
        showError(emailInput, emailError, "Email harus diisi.");
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, emailError, "Email tidak valid. email harus mengandung karakter '@'.");
        isValid = false;
    } else {
        hideError(emailInput, emailError);
    }

    if (passwordInput.value === "") {
        showError(passwordInput, passwordError, "Password harus diisi.");
        isValid = false;
    } else {
        hideError(passwordInput, passwordError);
    }

    return isValid;
}

// Fungsi untuk menampilkan register modal yang akan di export ke register.js
function showRegisterModal() {
    const successModal = document.getElementById("successRegisterModal");
    successModal.style.display = "block";

    // Event listener untuk tombol "Login"
    const loginButton = successModal.querySelector('.btn-primary');
    loginButton.addEventListener('click', function () {
        // Alihkan pengguna ke halaman home
        window.location.href = 'login.html';
    });

    // Event listener untuk tombol "Close"
    const closeButton = successModal.querySelector('.btn-secondary');
    closeButton.addEventListener('click', function () {
        // Alihkan pengguna ke halaman home
        window.location.href = '';
    });
}

// Fungsi untuk menampilkan login modal yang akan di export ke login.js
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

// Fungsi untuk menampilkan error saat validasi gagal
function showError(input, error, message) {
    error.textContent = message;
    error.style.display = "block";
}

function hideError(input, error) {
    error.textContent = "";
    error.style.display = "none";
}

function isValidEmail(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}