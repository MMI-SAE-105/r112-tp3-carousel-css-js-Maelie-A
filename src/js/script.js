// *** CAROUSEL ***
// TODO

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel) {
 
  const scrollAmount = 260;

  prevButton.addEventListener("click", function () {
    carousel.scrollLeft -= scrollAmount; 
  });
  nextButton.addEventListener("click", function () {
    carousel.scrollLeft += scrollAmount; 
  });
}
