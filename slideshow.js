var slides = document.querySelectorAll(".slide");
var currentSlide = 0;


function hideAllSlides() {
  slides.forEach(function (slide) {
    slide.style.display = "none";
  });
}

function showSlide(index) {
  hideAllSlides();
  slides[index].style.display = "block";
}

document.getElementById("next").addEventListener("click", function (e) {
  e.preventDefault();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("previous").addEventListener("click", function (e) {
  e.preventDefault();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);
