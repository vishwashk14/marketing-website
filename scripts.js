let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const totalSlides = document.querySelectorAll('.carousel img').length;
const indicator = document.getElementById('indicator');

function showSlide(index) {
  const translateValue = -index * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
  updateIndicator(index);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function updateIndicator(index) {
  const currentSlide = index + 1;
  document.getElementById('currentSlide').textContent = formatDigit(currentSlide);
  document.getElementById('totalSlides').textContent = formatDigit(totalSlides);
}

function formatDigit(number) {
  return number.toString().padStart(2, '0');
}

showSlide(currentIndex); // Initial update