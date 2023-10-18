// navbar active
const navbar = document.querySelector('header');
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
            <div class="avatar">
            
            </div>
            <a href="#" class="btn-primary" id="register">Daftar</a>
            </div>
            <div id="userLogo" class="nav-button-user" style="display: none">
                <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/Jese%20Leos.png?updatedAt=1697535830098" alt="profile" />
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

// sidebar
const sidebar = document.querySelector('.sidebar');
// render sidebar
sidebar.innerHTML = `
<div class="sidebar-link">
  <a class="nav-button" id="home" href="#">Beranda</a>
  <a class="nav-button" id="aboutus" href="#">Tentang Kami</a>
  <div class="dropdown-sidebar">
    <a class="nav-button" id="information" href="javascript:void(0);"
      >Informasi
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </a>
    <div class="dropdown-sidebar-list">
      <a href="javascript:void(0)">Berita</a>
      <a href="javascript:void(0)">Dampak</a>
      <a href="javascript:void(0)">Solusi</a>
      <a href="javascript:void(0)">Video</a>
    </div>
  </div>

  <a class="nav-button" id="quiz" href="#">Kuis</a>
  <a class="nav-button" id="community" href="#">Komunitas</a>
  <div class="login-sidebar">
    <a href="#" class="btn-primary" id="register">Daftar</a>
    <a href="#" class="btn-secondary" id="login">Masuk</a>
  </div>
</div>`;

// Ambil elemen-elemen tautan navbar
const homeLink = document.querySelectorAll('#home');
const aboutUsLink = document.querySelectorAll('#aboutus');
const informationLink = document.querySelectorAll('information');
// const quizLink = document.querySelectorAll('quiz');
const communityLink = document.querySelectorAll('#community');

// Ambil elemen-elemen tombol login dan register
const loginButton = document.querySelectorAll('#login');
const registerButton = document.querySelectorAll('#register');

// Tambahkan event listener untuk mengarahkan ke halaman yang sesuai
homeLink.forEach((btn) => {
  btn.addEventListener('click', function () {
    window.location.href = '/';
  });
});

aboutUsLink.forEach((btn) => {
  btn.addEventListener('click', function () {
    window.location.href = '/views/aboutus.html';
  });
});

// informationLink.addEventListener("click", function () {

//   alert("Tautan Informasi diklik");
// });

// quizLink.addEventListener('click', function () {
//   window.location.href = '/quiz.html';
// });

communityLink.forEach((btn) => {
  btn.addEventListener('click', function () {
    window.location.href = '/views/community.html';
  });
});

loginButton.forEach((btn) => {
  btn.addEventListener('click', function () {
    window.location.href = '/Auth/login.html';
  });
});
registerButton.forEach((btn) => {
  btn.addEventListener('click', function () {
    window.location.href = '/Auth/register.html';
  });
});

const locatePage = window.location.href;

// get active button for navbar
switch (locatePage) {
  case 'http://127.0.0.1:5501/':
    homeLink.forEach((btn) => btn.classList.add('active'));
    break;
  case 'http://127.0.0.1:5501/views/aboutus.html':
    aboutUsLink.forEach((btn) => btn.classList.add('active'));
    break;
  case 'http://127.0.0.1:5501/views/community.html':
    communityLink.forEach((btn) => btn.classList.add('active'));
    break;
  default:
    break;
}

// navbar shadow
const navbarContainer = document.querySelector('.navbar-container');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbarContainer.classList.add('navbar-shadow');
  } else {
    navbarContainer.classList.remove('navbar-shadow');
  }
});

// show dropdown
const navInformation = document.querySelector('#information');
const dropdown = document.querySelector('.dropdown');

navInformation.addEventListener('click', () => {
  navInformation.classList.toggle('active');
  dropdown.classList.toggle('show-dropdown');
});

// sidebar mobile

const burgerButton = document.querySelector('.nav-burger');
const overlay = document.querySelector('.overlay');
const dropdownSidebar = document.querySelector('.dropdown-sidebar #information');
const dropdownSidebarList = document.querySelector('.dropdown-sidebar-list');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

dropdownSidebar.addEventListener('click', () => {
  dropdownSidebarList.classList.toggle('active');
});

// navbar dynamic
const AUTH_KEY = 'isLoggedIn';
const USER_DATA = 'USER_DATA';
const auth = localStorage.getItem(AUTH_KEY);
const dataUser = JSON.parse(localStorage.getItem(USER_DATA));
// console.log('🚀 ~ file: navbar.js:193 ~ dataUser:', dataUser);
const navbarButtonLogin = document.querySelector('.nav-button-login');
const sidebarButtonLogin = document.querySelector('.login-sidebar');
const profileIconContainer = document.querySelectorAll('.avatar');

if (auth) {
  navbarButtonLogin.innerHTML = buttonLogOut();
  sidebarButtonLogin.innerHTML = buttonLogOut();
}

function buttonLogOut() {
  const { ...item } = dataUser;
  // console.log('🚀 ~ file: navbar.js:202 ~ item:', item);
  return `<a class="profile-logout" style="cursor: pointer"><img class="rounded-5 " src='${item.avatar}' alt="avatar" width="50" height="50" /></a>`;
}

// get all profile icon from navbar and sidebar
const profileIcon = document.querySelectorAll('.profile-logout');
// console.log('🚀 ~ file: navbar.js:209 ~ profileIcon:', profileIcon);

profileIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    showLoginModal();
  });
});
// Fungsi untuk menampilkan login modal
function showLoginModal() {
  const successModal = document.getElementById('successLoginModal');
  successModal.style.display = 'block';

  // Event listener untuk tombol "Close"
  const closeButton = successModal.querySelector('.close');
  closeButton.addEventListener('click', function () {
    // Alihkan pengguna ke halaman home
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_DATA);
    window.location.replace('/');
  });
  const stayButton = successModal.querySelector('.stay');
  stayButton.addEventListener('click', (e) => {
    e.preventDefault();
    successModal.style.display = 'none';
  });
}
// const setLogOut = document.querySelectorAll('#logout');

// if (setLogOut) {
//   setLogOut.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       localStorage.removeItem('isLoggedIn');
//       localStorage.removeItem('USER_LOGGED_IN');
//       window.location.replace('/');
//     });
//   });
// }
