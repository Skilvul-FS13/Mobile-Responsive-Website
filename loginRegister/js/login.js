document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    // Event listener untuk tombol "Login"
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validasi form menggunakan fungsi dari modul validation.js
        if (validateLoginForm()) {
            // Jika semua validasi berhasil, tampilkan modal
            showLoginModal(form);
        }
    });
});