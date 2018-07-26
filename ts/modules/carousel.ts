"use strict";

export default class Carousel {
  public slides: any[];
  public bullets: any[];
  public arrows: any[];

  public constructor(options) {
    this.slides = [...options.slides];
    this.bullets = [...options.bullets];
    this.arrows = [...options.arrows] || null;

    this.bullets.forEach((elem, index) => {
      elem.addEventListener("click", () => {
        this.activeSlide = index;
      }, false);
    });
  }

  public set activeSlide(elem: number) {
    this.slides.forEach((item) => {
      item.classList.remove("review__item--active");
    });
    this.slides[elem].classList.add("review__item--active");

    if (elem === 0) {
      this.prevSlide = null;
    } else if (elem === this.slides.length - 1) {
      this.nextSlide = null;
    } else {
      this.prevSlide = elem - 1;
      this.nextSlide = elem + 1;
    }
  }

  public get activeSlide(): number {
    return 0;
  }

  private set prevSlide(elem) {
  }

  private set nextSlide(elem) {
  }
}
