"use strict";

import * as svg4everybody from "svg4everybody";
import Carousel from "./modules/carousel";
import {headerMenu, Page} from "./modules/page-header";

svg4everybody({
  nosvg: true,
  polyfill: true,
});

headerMenu.menuItemActive = Page.Index;

const headerLogo = document.querySelector(".page-header__logo-link");
const footerLogo = document.querySelector(".page-footer__logo-link");

headerLogo.removeAttribute("href");
footerLogo.removeAttribute("href");

const options = {
  arrows: 0,
  bullets: document.querySelectorAll(".review__toggle"),
  slides: document.querySelectorAll(".review__item"),
};

const bullets = new Carousel(options);
