import {ScreenWidth} from "./enums";
import Tab from "./tabs";

const options = {
  tabs: document.querySelectorAll(".tools__label"),
  tabActiveState: "tools__label--active",
  tabContents: document.querySelectorAll(".tools__slider"),
  tabContentActiveState: "tools__slider--active",
  tabContainers: document.querySelectorAll(".tools__item"),
  tabContainerActiveState: "tools__item--active",
  listenerEventElem: document.querySelector(".upload__tools"),
};
const tabWithSliderMobile = new Tab(options);

const onChangeScreenWidth = () => {
  if (window.innerWidth < ScreenWidth.Tablet) {
    tabWithSliderMobile.addTabEvent();
    tabWithSliderMobile.addTabindexToTab();
  } else {
    tabWithSliderMobile.removeTabEvent();
    tabWithSliderMobile.removeTabindexFromTab();
  }
};

onChangeScreenWidth();

window.addEventListener("resize", onChangeScreenWidth, false);
