export default class Carousel {
  public slides: any[];
  public slidesActiveStateSelector: string;
  public bullets: any[];
  public bulletsActiveStateSelector: string;
  public arrowLeft;
  public arrowRight;
  protected currentSlide: number;

  public constructor(options) {
    this.slides = options.slides;
    this.slidesActiveStateSelector = options.slidesActiveStateSelector || null;
    options.bullets ? this.bullets = [...options.bullets] : this.bullets = null;
    this.bulletsActiveStateSelector = options.bulletsActiveStateSelector || null;
    if (options.arrows) {
      this.arrowLeft = options.arrows.left;
      this.arrowRight = options.arrows.right;
    } else {
      this.arrowLeft = null;
      this.arrowRight = null;
    }

    enum Key {
      LeftArrow = 37,
      RightArrow = 39,
    }

    if (this.bullets !== null) {
      this.bullets.forEach((elem, index) => {
        const onClickBullet = () => {
          this.activeSlide(index);
          this.activeBullet(index);
          this.disableArrows();
        };

        const onKeyDownBullet = (evt) => {
          if (evt.keyCode === Key.LeftArrow) {
            if (this.currentSlide > 0) {
              this.currentSlide--;
              this.activeSlide(this.currentSlide);
              this.activeBullet(this.currentSlide);
              this.focusBullet(this.currentSlide);
              this.disableArrows();
            }
          }

          if (evt.keyCode === Key.RightArrow) {
            if (this.currentSlide < this.activeSlide.length + 1) {
              this.currentSlide++;
              this.activeSlide(this.currentSlide);
              this.activeBullet(this.currentSlide);
              this.focusBullet(this.currentSlide);
              this.disableArrows();
            }
          }
        };

        elem.addEventListener("click", onClickBullet, false);
        elem.addEventListener("keydown", onKeyDownBullet, false);
      });
    }

    if (this.arrowLeft !== null && this.arrowRight !== null) {
      const onClickLeftArrow = () => {
        if (this.currentSlide >= 1) {
          this.arrowRight.removeAttribute("disabled");
          this.currentSlide--;
          this.activeSlide(this.currentSlide);

          if (this.bullets !== null) {
            this.activeBullet(this.currentSlide);
          }
        }

        if (this.currentSlide === 0) {
          this.arrowLeft.setAttribute("disabled", "");
        }
      };

      const onClickRightArrow = () => {
        if (this.currentSlide < this.slides.length - 1) {
          this.arrowLeft.removeAttribute("disabled");
          this.currentSlide++;
          this.activeSlide(this.currentSlide);

          if (this.bullets !== null) {
            this.activeBullet(this.currentSlide);
          }
        }

        if (this.currentSlide === this.slides.length - 1) {
          this.arrowRight.setAttribute("disabled", "");
        }
      };

      this.arrowLeft.addEventListener("click", onClickLeftArrow, false);
      this.arrowRight.addEventListener("click", onClickRightArrow, false);
    }
  }

  public activeSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.slides.forEach((item) => {
        item.classList.remove(this.slidesActiveStateSelector);
      });
      this.slides[index].classList.add(this.slidesActiveStateSelector);
      this.currentSlide = index;
    }
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

  private disableArrows() {
    if (this.arrowLeft !== null && this.arrowRight !== null) {
      this.arrowRight.removeAttribute("disabled");
      this.arrowLeft.removeAttribute("disabled");

      if (this.currentSlide === 0) {
        this.arrowLeft.setAttribute("disabled", "");
      }

      if (this.currentSlide === this.slides.length - 1) {
        this.arrowRight.setAttribute("disabled", "");
      }
    }
  }
}
