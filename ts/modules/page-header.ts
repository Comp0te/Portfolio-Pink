"use strict";

import PageHeaderMenu from "./page-header-menu";

export const headerMenu = new PageHeaderMenu(
  document.querySelector(".page-header"),
  document.querySelector(".main-navigation__toggle"),
  document.querySelector(".main-navigation"),
  document.querySelector(".main-navigation__list"),
  document.querySelectorAll(".main-navigation__link")
);

headerMenu.addEventToggleButton = "click";
headerMenu.toggleMenu()();

export enum Page {
  Index = 0,
  Photo = 1,
  Contest = 2,
  Htmlacademy = 3,
}
