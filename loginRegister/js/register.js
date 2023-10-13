document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    // Event listener untuk tombol "Daftar"
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validasi form menggunakan fungsi dari modul validation.js
        if (validateRegistrationForm()) {
            // Jika semua validasi berhasil, tampilkan modal
            showRegisterModal();
        }
    });
});