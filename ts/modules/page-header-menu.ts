export default class PageHeaderMenu {
  public pageHeader;
  public mainNav;
  public toggleButton;
  public menuLinks: any[];
  protected onClickToggleButton;

  public constructor(options) {
    this.pageHeader = options.pageHeader;
    this.mainNav = options.mainNav;
    this.toggleButton = options.toggleButton;
    this.menuLinks = [...options.menuLinks];

    this.onClickToggleButton = (evt) => {
      let target = evt.target;

      while (target !== evt.currentTarget) {
        if (target === this.toggleButton) {
          this.toggleMenu();
          return;
        }

        target = target.parentNode;
      }
    };

    this.pageHeader.addEventListener("click", this.onClickToggleButton, false);
    this.mainNav.classList.remove("main-navigation--nojs");
    this.toggleMenu();
  }

  public toggleMenu() {
    this.pageHeader.classList.toggle("page-header--menu-open");
    this.mainNav.classList.toggle("main-navigation--open");
  }

  public set menuItemActive(elem: number) {
    this.menuLinks[elem].classList.toggle("main-navigation__link--active");
    this.menuLinks[elem].removeAttribute("href");
  }
}
