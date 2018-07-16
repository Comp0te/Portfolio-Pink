"use strict";

import {headerMenu, Page} from "./modules/page-header";
import * as svg4everybody from "svg4everybody";

headerMenu.menuItemActive = Page.Index;

const headerLogo = document.querySelector(".page-header__logo-link");
const footerLogo = document.querySelector(".page-footer__logo-link");

headerLogo.removeAttribute("href");
footerLogo.removeAttribute("href");

svg4everybody({
  nosvg: true,
  polyfill: true
});


