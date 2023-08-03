//AUTO SLIDER

const slides = document.querySelectorAll(".slides");
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
});

  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide();
}

setInterval(nextSlide, 3000);