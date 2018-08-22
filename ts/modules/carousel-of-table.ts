import {Carousel, OptionsCarousel} from "./carousel";
import {supportsPassiveListener} from "./polifils";

export default class CarouselOfTable extends Carousel {
  public tableCells: any[];
  public table;
  protected onTouchStart;
  protected onTouchMove;
  protected onTouchEnd;

  public constructor(options: OptionsCarousel, table, tableCells) {
    super(options);
    this.table = table;
    this.tableCells = [...tableCells];

    this.slides.forEach((elem) => {
      this.removeTouchEvents(elem);
    });

    this.onTouchMove = (evt) => {
      const touch = evt.changedTouches[0];
      this.distanсeMoveTouch = this.initTouchPositionX - touch.clientX;

      if (this.distanсeMoveTouch > 20 &&
          this.distanсeMoveTouch < 40 ||
          this.distanсeMoveTouch < -20 &&
          this.distanсeMoveTouch > -40
          ) {
            this.table.style.transform = `translateX(${-this.distanсeMoveTouch}px)`;
      }
    };

    this.onTouchEnd = () => {
      this.slides[this.currentSlide].classList.remove(this.touchStateSelector);
      this.table.style.transform = "";

      if (this.distanсeMoveTouch >= 30) {
        this.toRightSlide();
      }

      if (this.distanсeMoveTouch <= -30) {
        this.toLeftSlide();
      }
    };

    this.addTouchEvents(this.table);
  }

  public activeSlide(index: number) {
    super.activeSlide(index);
    this.tableCells.forEach((item) => {
      item.classList.remove("price__cell--active");
    });

    for (let i = this.currentSlide; i < this.tableCells.length; i = i + 3) {
      this.tableCells[i].classList.add("price__cell--active");
    }
  }

  public addTouchEvents(elem) {
    elem.addEventListener("touchstart", this.onTouchStart, supportsPassiveListener ? {passive: true} : false);
    elem.addEventListener("touchmove", this.onTouchMove, supportsPassiveListener ? {passive: true} : false);
    elem.addEventListener("touchend", this.onTouchEnd, false);
  }

  public removeTouchEvents(elem) {
    elem.removeEventListener("touchstart", this.onTouchStart, supportsPassiveListener ? {passive: true} : false);
    elem.removeEventListener("touchmove", this.onTouchMove, supportsPassiveListener ? {passive: true} : false);
    elem.removeEventListener("touchend", this.onTouchEnd, false);
  }
}
