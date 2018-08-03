import Carousel from "./carousel";

const options = {
  slides: document.querySelectorAll(".review__item"),
  slidesActiveStateSelector: "review__item--active",
  bullets: document.querySelectorAll(".review__toggle"),
  bulletsActiveStateSelector: "bullets__btn--active",
  arrows: {
    left: document.querySelector(".review__arrow--left"),
    right: document.querySelector(".review__arrow--right"),
  },
  touchStateSelector: "review__item--touch",
};

const reviewCarousel = new Carousel(options);

reviewCarousel.disableArrows();

export default reviewCarousel;
