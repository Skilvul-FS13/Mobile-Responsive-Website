// news card slider
const newsList = document.querySelector('.news-list');
const newsListWidth = newsList.querySelector('.news-card').offsetWidth;
const arrowButton = document.querySelectorAll('.carousel #left,#right');

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
