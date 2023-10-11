document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const successModal = document.getElementById("successModal");

    // Fungsi untuk menampilkan modal
    function showModal() {
        successModal.style.display = "block";
    }

    // Fungsi untuk menutup modal
    function closeModal() {
        successModal.style.display = "none";
    }

    // Event listener untuk tombol "Daftar"
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validasi form
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

        // Fungsi untuk menampilkan pesan kesalahan
        function showError(input, error, message) {
            error.textContent = message;
            error.style.display = "block";
        }

        // Fungsi untuk menyembunyikan pesan kesalahan
        function hideError(input, error) {
            error.textContent = "";
            error.style.display = "none";
        }

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

        // Fungsi untuk memeriksa apakah alamat email valid
        function isValidEmail(email) {
            const emailPattern = /\S+@\S+\.\S+/;
            return emailPattern.test(email);
        }

        if (isValid) {
            // Jika semua validasi berhasil, tampilkan modal
            showModal();
        }
    });

    // Event listener untuk menutup modal ketika tombol close diklik
    successModal.querySelector(".close").addEventListener("click", closeModal);

    // Event listener untuk menutup modal ketika area di luar modal diklik
    window.addEventListener("click", function (e) {
        if (e.target == successModal) {
            closeModal();
        }
    });
});