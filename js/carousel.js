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
