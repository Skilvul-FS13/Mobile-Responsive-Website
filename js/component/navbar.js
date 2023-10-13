const navbar = document.createElement('header');
navbar.innerHTML = `
    <div class="navbar-container">
        <div class="link-navbar">
            <div class="link-container">
                <div class="logo">
                    <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/logo3-small.png?updatedAt=1697183235949" alt="" width="40" height="40" />
                </div>
                <nav class="navbar">
                    <a class="nav-button" id="home" href="#">Beranda</a>
                    <a class="nav-button" id="aboutus" href="#">Tentang Kami</a>
                    <a class="nav-button" id="information" href="javascript:void(0);">Informasi
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                    <a class="nav-button" id="quiz" href="#">Kuis</a>
                    <a class="nav-button" id="community" href="#">Komunitas</a>
                </nav>
            </div>
            <div class="nav-button-login">
                <a href="#" class="btn-secondary" id="login">Masuk</a>
                <a href="#" class="btn-primary" id="register">Daftar</a>
            </div>
            <div class="nav-burger">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
        <div class="dropdown">
            <div class="list-dropdown" style="border-radius: 12px">
                <a href="javascript:void(0)">Berita</a>
                <a href="javascript:void(0)">Dampak</a>
                <a href="javascript:void(0)">Solusi</a>
                <a href="javascript:void(0)">Video</a>
            </div>
        </div>
    </div>
`;

document.body.appendChild(navbar);

// Ambil elemen-elemen tautan navbar
const homeLink = document.getElementById("home");
const aboutUsLink = document.getElementById("aboutus");
const informationLink = document.getElementById("information");
const quizLink = document.getElementById("quiz");
const communityLink = document.getElementById("community");

// Ambil elemen-elemen tombol login dan register
const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");

// Tambahkan event listener untuk mengarahkan ke halaman yang sesuai
homeLink.addEventListener("click", function () {
  window.location.href = "/";
});

aboutUsLink.addEventListener("click", function () {
  window.location.href = "/aboutus.html";
});

// informationLink.addEventListener("click", function () {

//   alert("Tautan Informasi diklik");
// });

quizLink.addEventListener("click", function () {
  window.location.href = "/quiz.html";
});

communityLink.addEventListener("click", function () {
  window.location.href = "/views/community.html";
});


loginButton.addEventListener("click", function () {
  window.location.href = "/Auth/login.html";
});
registerButton.addEventListener("click", function () {
  window.location.href = "/Auth/register.html";
});