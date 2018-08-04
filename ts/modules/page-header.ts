import PageHeaderMenu from "./page-header-menu";

const options = {
  mainNav: document.querySelector(".main-navigation"),
  menuLinks: document.querySelectorAll(".main-navigation__link"),
  pageHeader: document.querySelector(".page-header"),
  toggleButton: document.querySelector(".main-navigation__toggle"),
};

const headerMenu = new PageHeaderMenu(options);

export default headerMenu;
