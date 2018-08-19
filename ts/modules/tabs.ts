import { Key } from "./enums";

export default class Tab {
  public tabs: any[];
  public tabActiveState: string;
  public tabContents: any[];
  public tabContentActiveState: string;
  public tabContainers: any[];
  public tabContainerActiveState: string;
  public listenerEventElem;
  protected onClickTab;
  protected onKeyDownTab;

  public constructor(options) {
    this.tabs = options.tabs;
    this.tabActiveState = options.tabActiveState;
    this.tabContents = options.tabContents;
    this.tabContentActiveState = options.tabContentActiveState;
    this.tabContainers = options.tabContainers;
    this.tabContainerActiveState = options.tabContainerActiveState;
    this.listenerEventElem = options.listenerEventElem || null;
    this.onClickTab = (evt) => {
      let target = evt.target;

      while (target !== evt.currentTarget) {
        this.tabs.forEach((elem, i) => {
          if (target === elem) {
            this.resetActiveState();
            this.toogleTab(i);
            this.focusTabContent(i);
            return;
          }
        });

        target = target.parentNode;
      }
    };

    this.onKeyDownTab = (evt) => {
      let target = evt.target;

      if (evt.keyCode === Key.Space) {
        while (target !== evt.currentTarget) {
          this.tabs.forEach((elem, i) => {
            if (target === elem) {
              this.resetActiveState();
              this.toogleTab(i);
              this.focusTabContent(i);
              return;
            }
          });

          target = target.parentNode;
        }
      }
    };
  }

  public toogleTab(index) {
    this.tabs[index].classList.add(this.tabActiveState);
    this.tabContents[index].classList.add(this.tabContentActiveState);
    this.tabContainers[index].classList.add(this.tabContainerActiveState);
  }

  public resetActiveState() {
    this.tabs.forEach((elem) => {
      elem.classList.remove(this.tabActiveState);
    });
    this.tabContents.forEach((elem) => {
      elem.classList.remove(this.tabContentActiveState);
    });
    this.tabContainers.forEach((elem) => {
      elem.classList.remove(this.tabContainerActiveState);
    });
  }

  public addTabEvent() {
    if (this.listenerEventElem) {
      this.listenerEventElem.addEventListener("click", this.onClickTab, false);
      this.listenerEventElem.addEventListener("keydown", this.onKeyDownTab, false);
    }
  }

  public removeTabEvent() {
    if (this.listenerEventElem) {
      this.listenerEventElem.removeEventListener("click", this.onClickTab, false);
      this.listenerEventElem.removeEventListener("keydown", this.onKeyDownTab, false);
    }
  }

  public addTabindexToTab() {
    this.tabs.forEach((elem) => {
      elem.setAttribute("tabindex", "0");
    });
  }

  public removeTabindexFromTab() {
    this.tabs.forEach((elem) => {
      elem.removeAttribute("tabindex");
    });
  }

  protected focusTabContent(index) {
    this.tabContents[index].focus();
  }
}
