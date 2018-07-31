import CarouselOfTable from "./carousel-of-table";

const options = {
  slides: document.querySelectorAll(".price__colhead"),
  slidesActiveStateSelector: "price__colhead--active",
  bullets: document.querySelectorAll(".price__toggle"),
  bulletsActiveStateSelector: "bullets__btn--active",
};
const tableCells = document.querySelectorAll(".price__cell");
const priceCarousel = new CarouselOfTable(options, tableCells);

export default priceCarousel;
