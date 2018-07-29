"use strict";

export default class Carousel {
  public slides: any[];
  public bullets: any[];
  public arrows: any[];
  public slidesActiveStateSelector: string;
  public bulletsActiveStateSelector: string;

  public constructor(options) {
    this.slides = options.slides;
    options.bullets ? this.bullets = [...options.bullets] : this.bullets = null;
    options.arrows ? this.arrows = [...options.arrows] : this.arrows = null;
    this.slidesActiveStateSelector = options.slidesActiveStateSelector || null;
    this.bulletsActiveStateSelector = options.bulletsActiveStateSelector || null;

    if (this.bullets !== null) {
      this.bullets.forEach((elem, index) => {
        elem.addEventListener("click", () => {
          this.activeSlide(index);
          this.activeBullet(index);
        }, false);

        elem.addEventListener("keydown", (evt) => {
          enum Key {
            LeftArrow = 37,
            RightArrow = 39,
          }
          let currentIndex = index;

          if (evt.keyCode === Key.LeftArrow) {
            currentIndex--;
            this.activeSlide(currentIndex);
            this.activeBullet(currentIndex);
            this.focusBullet(currentIndex);
          }

          if (evt.keyCode === Key.RightArrow) {
            currentIndex++;
            this.activeSlide(currentIndex);
            this.activeBullet(currentIndex);
            this.focusBullet(currentIndex);
          }
        }, false);
      });
    }
  }

  public activeSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.slides.forEach((item) => {
        item.classList.remove(this.slidesActiveStateSelector);
      });
      this.slides[index].classList.add(this.slidesActiveStateSelector);
    }

    // if (elem === 0) {
    //   this.prevSlide = null;
    // } else if (elem === this.slides.length - 1) {
    //   this.nextSlide = null;
    // } else {
    //   this.prevSlide = elem - 1;
    //   this.nextSlide = elem + 1;
    // }
  }

  public activeBullet(index: number) {
    if (this.bullets !== null) {
      if (index >= 0 && index < this.bullets.length) {
        this.bullets.forEach((item) => {
          item.classList.remove(this.bulletsActiveStateSelector);
        });
        this.bullets[index].classList.add(this.bulletsActiveStateSelector);
      }
    }
  }

  private focusBullet(elem) {
    if (elem >= 0 && elem < this.bullets.length) {
      this.bullets[elem].focus();
    }
  }

  // public get activeSlide(): number {
  //   return 0;
  // }

  // private set prevSlide(elem) {
  // }

  // private set nextSlide(elem) {
  // }
}
