import {Key} from "./enums";
import {supportsPassiveListener} from "./polifils";

export default class Carousel {
  public slides: any[];
  public slidesActiveStateSelector: string;
  public bullets: any[];
  public bulletsActiveStateSelector: string;
  public arrowLeft;
  public arrowRight;
  public touchStateSelector: string;
  protected currentSlide: number;
  protected onClickBullet;
  protected onKeyDownBullet;
  protected onClickLeftArrow;
  protected onClickRightArrow;
  protected onTouchStart;
  protected onTouchMove;
  protected onTouchEnd;
  protected initTouchPositionX: number;
  protected distanсeMoveTouch: number;

  public constructor(options) {
    this.slides = [...options.slides];
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
    this.touchStateSelector = options.touchStateSelector || null;
    this.currentSlide = 0;
    this.initTouchPositionX = 0;
    this.distanсeMoveTouch = 0;

    if (this.bullets !== null) {
      this.bullets.forEach((elem, index) => {
        this.onClickBullet = () => {
          this.activeSlide(index);
          this.activeBullet(index);
          this.disableArrows();
        };

        this.onKeyDownBullet = (evt) => {
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

        elem.addEventListener("click", this.onClickBullet, false);
        elem.addEventListener("keydown", this.onKeyDownBullet, false);
      });
    }

    if (this.arrowLeft !== null && this.arrowRight !== null) {
      this.onClickLeftArrow = () => {
        this.toLeftSlide();
      };

      this.onClickRightArrow = () => {
        this.toRightSlide();
      };

      this.arrowLeft.addEventListener("click", this.onClickLeftArrow, false);
      this.arrowRight.addEventListener("click", this.onClickRightArrow, false);
    }

    this.onTouchStart = (evt) => {
      if (evt.changedTouches.length > 1) {
        return;
      }

      this.initTouchPositionX = evt.changedTouches[0].clientX;
      this.slides[this.currentSlide].classList.add(this.touchStateSelector);
    };

    this.onTouchMove = (evt) => {
      const touch = evt.changedTouches[0];
      this.distanсeMoveTouch = this.initTouchPositionX - touch.clientX;

      if (this.distanсeMoveTouch > 20 && this.distanсeMoveTouch < 40 ||
          this.distanсeMoveTouch < -20 && this.distanсeMoveTouch > -40) {
            this.slides[this.currentSlide].style.transform = `translateX(${-this.distanсeMoveTouch}px)`;
      }
    };

    this.onTouchEnd = () => {
      this.slides[this.currentSlide].classList.remove(this.touchStateSelector);
      this.slides[this.currentSlide].style.transform = "";

      if (this.distanсeMoveTouch >= 30) {
        this.toRightSlide();
      }

      if (this.distanсeMoveTouch <= -30) {
        this.toLeftSlide();
      }
    };

    this.slides.forEach((elem) => {
      elem.addEventListener("touchstart", this.onTouchStart, supportsPassiveListener ? {passive: true} : false);
      elem.addEventListener("touchmove", this.onTouchMove, supportsPassiveListener ? {passive: true} : false);
      elem.addEventListener("touchend", this.onTouchEnd, false);
    });
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

  public disableArrows() {
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

  public toRightSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
      this.activeSlide(this.currentSlide);

      if (this.bullets !== null) {
        this.activeBullet(this.currentSlide);
      }
    }

    this.disableArrows();
  }

  public toLeftSlide() {
    if (this.currentSlide >= 1) {
      this.currentSlide--;
      this.activeSlide(this.currentSlide);

      if (this.bullets !== null) {
        this.activeBullet(this.currentSlide);
      }
    }

    this.disableArrows();
  }

  private focusBullet(elem) {
    if (elem >= 0 && elem < this.bullets.length) {
      this.bullets[elem].focus();
    }
  }
}
