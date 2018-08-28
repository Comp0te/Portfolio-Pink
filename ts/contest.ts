import "./modules/contest-form-submit";
import {Page, ScreenWidth} from "./modules/enums";
import headerMenu from "./modules/page-header";

const contactsTitle = document.querySelector(".form-contacts__title");
const onChangeScreenWidth = () => {
  if (window.innerWidth < ScreenWidth.Tablet) {
    contactsTitle.classList.add("visually-hidden");
  } else {
    contactsTitle.classList.remove("visually-hidden");
  }
};

headerMenu.menuItemActive = Page.Contest;

onChangeScreenWidth();
window.addEventListener("resize", onChangeScreenWidth, false);
