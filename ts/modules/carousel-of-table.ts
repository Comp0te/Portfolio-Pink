import Carousel from "./carousel";

export default class CarouselOfTable extends Carousel {
  public tableCells: any[];

  public constructor(options, tableCells) {
    super(options);
    this.tableCells = [...tableCells];
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
}
