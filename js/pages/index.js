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
    img: 'https://akcdn.detik.net.id/community/media/visual/2023/09/26/direktur-jenderal-pengendalian-pencemaran-dan-kerusakan-lingkungan-klhk-sigit-reliantoro-rizky-adha-detikcom_169.jpeg?w=700&q=90',
    date: 'Selasa, 26 Sep 2023 18:14 WIB',
    title: 'Bertambah, KLHK Tindak 50-an Perusahaan Cemari Lingkungan di Jabodetabek',
    link: 'https://news.detik.com/berita/d-6951901/bertambah-klhk-tindak-50-an-perusahaan-cemari-lingkungan-di-jabodetabek',
  },
  {
    img: 'https://akcdn.detik.net.id/community/media/visual/2023/08/28/waduh-aliran-sungai-cileungsi-tercemar-limbah-pabrik-1_169.jpeg?w=700&q=90',
    date: 'Senin, 28 Agu 2023 18:30 WIB',
    title: 'Waduh, Aliran Sungai Cileungsi Tercemar Limbah Pabrik',
    link: 'https://news.detik.com/foto-news/d-6899916/waduh-aliran-sungai-cileungsi-tercemar-limbah-pabrik/1',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRLEE2turJq8HiuF2aSiQbWCaLkxFKQwy_Q&usqp=CAU',
    date: 'Kamis, 27 Jul 2023 14:23 WIB',
    title: 'Protes Pencemaran Sungai, Aktivis Kirim Sampah ke Kantor Walkot Tasik',
    link: 'https://www.detik.com/jabar/berita/d-6844498/protes-pencemaran-sungai-aktivis-kirim-sampah-ke-kantor-walkot-tasik',
  },
  {
    img: 'https://akcdn.detik.net.id/community/media/visual/2023/06/26/lurah-cikoko-fitrianti-dam-perumda-pal-jaya-mengambil-sampel-limbah-kotoran-sapi-yang-dikeluhkan-warga-di-jakarta-selatan-1.jpeg?w=700&q=90',
    date: 'Senin, 10 Jul 2023 11:51 WIB',
    title: '3 Solusi untuk Pencemaran Lingkungan Kotoran Sapi di Pancoran, Jaksel',
    link: 'https://news.detik.com/berita/d-6814811/3-solusi-untuk-pencemaran-lingkungan-kotoran-sapi-di-pancoran-jaksel',
  },
  {
    img: 'https://akcdn.detik.net.id/community/media/visual/2023/07/06/para-petugas-pemprov-dki-jakarta-mengunjungi-lokasi-tercemar-limbah-kotoran-sapi-di-cikoko-pancoran-jaksel-5-juli-2023-sumber--1.jpeg?w=700&q=90',
    date: 'Kamis, 06 Jul 2023 12:28 WIB',
    title: 'Soal Limbah Peternakan Sapi Pancoran, Warga Diundang Rapat Walkot Jaksel',
    link: 'https://news.detik.com/berita/d-6808780/soal-limbah-peternakan-sapi-pancoran-warga-diundang-rapat-walkot-jaksel',
  },
];

const listBerita = berita.map((item) => showNews(item)).join('');
newsList.innerHTML = listBerita;

function showNews(item) {
  return `
  <div class="news-card">
    <div class="news-image">
      <img src="${item.img}" alt="" loading="lazy" />
    </div>
    <div class="news-card-content">
      <p>${item.date}</p>
      <h6 class="text-clamp">${item.title}</h6>
      <a href="${item.link}">Baca Selengkapnya</a>
    </div>
  </div>`;
}
