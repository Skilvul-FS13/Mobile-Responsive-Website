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

dropdownSidebar.addEventListener('click', () => {
  dropdownSidebarList.classList.toggle('active');
});

// sponsored carousel
const arrowButton = document.querySelectorAll('.carousel #left,#right');
const sponsored = document.querySelector('.sponsor-list');
const sponsorList = sponsored.querySelectorAll('.sponsor');
const sponsorListWidth = sponsored.querySelectorAll('.sponsor')[0].offsetWidth;

let currentIndex = 0;

arrowButton.forEach((button) => {
  button.addEventListener('click', () => {
    currentIndex += button.id === 'left' ? -1 : 1;
    scrollToCurrentSponsorIndex();
  });
});

function scrollToCurrentSponsorIndex() {
  const maxIndex = sponsorList.length + 2;

  if (currentIndex <= 0) {
    currentIndex = maxIndex;
  } else if (currentIndex >= maxIndex) {
    currentIndex = 0;
  }

  const scrollAmount = currentIndex * sponsorListWidth;
  sponsored.scrollTo({
    left: scrollAmount,
    behavior: 'smooth',
  });
}

setInterval(() => {
  currentIndex++;
  scrollToCurrentSponsorIndex();
}, 3000);

// news card slider
const newsList = document.querySelector('.news-list');
const newsListWidth = newsList.querySelector('.news-card').offsetWidth;

arrowButton.forEach((button) => {
  button.addEventListener('click', () => {
    newsList.scrollLeft += button.id === 'left' ? -newsListWidth : newsListWidth;
  });
});

const berita = [
  {
    img: 'news1.jpeg',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    img: 'news1.jpeg',
    title: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi doloremque deleniti nequ ',
  },
  {
    img: 'news1.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi doloremque deleniti neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi.',
  },
  {
    img: 'news1.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi doloremque deleniti neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi.',
  },
  {
    img: 'news1.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi doloremque deleniti neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi.',
  },
  {
    img: 'news1.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi doloremque deleniti neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi.',
  },
  {
    img: 'news1.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi doloremque deleniti neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia sint maxime natus a esse vitae accusantium, consequatur rerum quia laboriosam saepe tempore quasi sed ullam. Nesciunt modi.',
  },
];

const listBerita = berita.map((item) => showNews(item)).join('');
newsList.innerHTML = listBerita;

function showNews(item) {
  return `
  <div class="news-card">
    <div class="news-image">
      <img src="./img/${item.img}" alt="" loading="lazy" />
    </div>
    <div class="news-card-content">
      <p>Senin, 28 Agu 2023 18:30 WIB</p>
      <h4>${item.title}</h4>
      <a href="/">Baca Selengkapnya</a>
    </div>
  </div>`;
}

const btnSubmit = document.getElementById('submit-form');
const showResult = document.getElementById('result');
const form = document.getElementById('form');

function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

  const formData = {
    name,
    city,
    email,
    zipCode,
    status,
  };

  return formData;
}

function isNumber(string) {
  return !isNaN(string);
}

function checkboxIsChecked() {
  const status = document.getElementById('status').checked;
  return status ? true : false;
}

function validateFormData(formData) {
  if (formData.name !== '' && formData.city !== '' && formData.email !== '' && isNumber(formData.zipCode) && checkboxIsChecked()) {
    console.log('form terisi');
    return true;
  } else {
    console.log('tidak terisi');
    return false;
  }
}

form.addEventListener('submit', submit);

function submit(e) {
  e.preventDefault();
  const data = handleGetFormData();
  const warning = document.getElementById('warning');
  if (validateFormData(data) === false) {
    warning.textContent = 'Periksa form anda sekali lagi';
  } else {
    warning.textContent = '';
  }
}

const auth = localStorage.getItem('isLoggedIn');
if (!auth) {
  window.location.replace('login.html');
  document.body.innerHTML = '';
}
