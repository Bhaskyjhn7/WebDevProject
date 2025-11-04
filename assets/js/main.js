// Slideshow
const slides = document.querySelectorAll('.slide-image');
let currentSlide = 0;
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 4000);
