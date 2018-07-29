"use strict";

import * as svg4everybody from "svg4everybody";
import {headerMenu, Page} from "./modules/page-header";
import reviewCarousel from "./modules/review-carousel";

svg4everybody({
  nosvg: true,
  polyfill: true,
});

headerMenu.menuItemActive = Page.Index;

const headerLogo = document.querySelector(".page-header__logo-link");
const footerLogo = document.querySelector(".page-footer__logo-link");

headerLogo.removeAttribute("href");
footerLogo.removeAttribute("href");

reviewCarousel.activeSlide(0);
reviewCarousel.activeBullet(0);
