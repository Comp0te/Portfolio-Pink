"use strict";

export default class PageHeaderMenu {
  public pageHeader;
  public toggleButton;
  public mainNav;
  public navList;
  public menuItems;
  public constructor(header, button, nav, list, items) {
      this.pageHeader = header;
      this.toggleButton = button;
      this.mainNav = nav;
      this.navList = list;
      this.menuItems = items;
  }

  public toggleMenu() {
    return () => {
      this.pageHeader.classList.toggle("page-header--menu-open");
      this.mainNav.classList.toggle("main-navigation--open");
      this.navList.classList.toggle("main-navigation__list--open");
    }
  }

  public set menuItemActive(elem: number) {
    this.menuItems[elem].classList.toggle("main-navigation__link--active");
    this.menuItems[elem].removeAttribute("href");
  }

  public set addEventToggleButton(val: string) {
    this.toggleButton.addEventListener(val, this.toggleMenu());

    if (this.toggleButton.classList.contains("main-navigation__toggle--nojs")) {
      this.toggleButton.classList.remove("main-navigation__toggle--nojs");
    }
  }
}
