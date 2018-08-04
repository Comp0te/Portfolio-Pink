import * as svg4everybody from "svg4everybody";
import {Page, ScreenWidth} from "./modules/enums";
import headerMenu from "./modules/page-header";
import priceCarousel from "./modules/price-carousel";
import "./modules/review-carousel";

svg4everybody({
  nosvg: true,
  polyfill: true,
});

headerMenu.menuItemActive = Page.Index;

const headerLogo = document.querySelector(".page-header__logo-link");
const footerLogo = document.querySelector(".page-footer__logo-link");

headerLogo.removeAttribute("href");
footerLogo.removeAttribute("href");

const pageFooter = document.querySelector(".page-footer");
const onChangeScreenWidth = () => {
  if (window.innerWidth < ScreenWidth.Tablet) {
    priceCarousel.addTouchEvents(priceCarousel.table);
    pageFooter.classList.add("page-footer--off");
  } else {
    priceCarousel.removeTouchEvents(priceCarousel.table);
    pageFooter.classList.remove("page-footer--off");
  }
};

onChangeScreenWidth();

window.addEventListener("resize", onChangeScreenWidth, false);
