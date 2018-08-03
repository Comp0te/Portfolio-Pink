import CarouselOfTable from "./carousel-of-table";

const options = {
  slides: document.querySelectorAll(".price__colhead"),
  slidesActiveStateSelector: "price__colhead--active",
  bullets: document.querySelectorAll(".price__toggle"),
  bulletsActiveStateSelector: "bullets__btn--active",
  touchStateSelector: "price__colhead--touch",
};
const table = document.querySelector(".price__table");
const tableCells = document.querySelectorAll(".price__cell");
const priceCarousel = new CarouselOfTable(options, table, tableCells);

priceCarousel.activeSlide(1);
priceCarousel.activeBullet(1);

export default priceCarousel;
