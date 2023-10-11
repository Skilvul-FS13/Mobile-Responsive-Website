// navbar shadow
const navbar = document.querySelector('.navbar-container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-shadow');
  } else {
    navbar.classList.remove('navbar-shadow');
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
const sidebar = document.querySelector('.sidebar');
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
const navbarButtonLogin = document.querySelector('.nav-button-login');
const auth = localStorage.getItem('isLoggedIn');
const sidebarButtonLogin = document.querySelector('.login-sidebar');

if (auth) {
  navbarButtonLogin.innerHTML = buttonLogOut();
  sidebarButtonLogin.innerHTML = buttonLogOut();
}

function buttonLogOut() {
  return `<a class="btn-primary" id="logout">Log Out</a>`;
}

const setLogOut = document.querySelectorAll('#logout');

if (setLogOut) {
  setLogOut.forEach((btn) => {
    btn.addEventListener('click', () => {
      localStorage.removeItem('isLoggedIn');
      window.location.replace('/');
    });
  });
}
