"use strict";

import Carousel from "./carousel";

const options = {
  bullets: document.querySelectorAll(".review__toggle"),
  slides: document.querySelectorAll(".review__item"),
  slidesActiveStateSelector: "review__item--active",
  bulletsActiveStateSelector: "bullets__btn--active",
};

const reviewCarousel = new Carousel(options);

export default reviewCarousel;
