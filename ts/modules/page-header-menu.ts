"use strict";

export default class PageHeaderMenu {
  public pageHeader;
  public mainNav;
  public toggleButton;
  public menuItems;

  public constructor(options) {
    this.pageHeader = options.pageHeader;
    this.mainNav = options.mainNav;
    this.toggleButton = options.toggleButton;
    this.menuItems = options.menuLinks;

    const onClickToggleButton = (evt) => {
      let target = evt.target;

      while (target !== evt.currentTarget) {
        if (target === this.toggleButton) {
          this.toggleMenu();
          return;
        }

        target = target.parentNode;
      }
    };

    this.pageHeader.addEventListener("click", onClickToggleButton, false);

    if (this.mainNav.classList.contains("main-navigation--nojs")) {
      this.mainNav.classList.remove("main-navigation--nojs");
      this.toggleMenu();
    }
  }

  public toggleMenu() {
    this.pageHeader.classList.toggle("page-header--menu-open");
    this.mainNav.classList.toggle("main-navigation--open");
  }

  public set menuItemActive(elem: number) {
    this.menuItems[elem].classList.toggle("main-navigation__link--active");
    this.menuItems[elem].removeAttribute("href");
  }
}
