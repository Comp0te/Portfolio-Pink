"use strict";

import PageHeaderMenu from "./page-header-menu";

const options = {
  mainNav: document.querySelector(".main-navigation"),
  menuLinks: document.querySelectorAll(".main-navigation__link"),
  pageHeader: document.querySelector(".page-header"),
  toggleButton: document.querySelector(".main-navigation__toggle"),
};

export const headerMenu = new PageHeaderMenu(options);

export enum Page {
  Index = 0,
  Photo = 1,
  Contest = 2,
  Htmlacademy = 3,
}
