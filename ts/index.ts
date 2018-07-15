"use strict";

import {headerMenu, Page} from "./modules/page-header";

headerMenu.menuItemActive = Page.Index;

const headerLogo = document.querySelector(".page-header__logo-link");
const footerLogo = document.querySelector(".page-footer__logo-link");

headerLogo.removeAttribute("href");
footerLogo.removeAttribute("href");
