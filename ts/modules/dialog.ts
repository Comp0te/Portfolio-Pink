import {Key} from "./enums";

export default class Dialog {
  public dialogContainer;
  public dialogContainerShowState: string;
  public dialogTitleElem;
  public dialogTitle: string;
  public dialogMessageElem;
  public dialogMessage: string;
  public dialogButton;
  protected onClickDialogButton;
  protected onKeyDownEscDialog;

  public constructor(options) {
    this.dialogContainer = options.dialogContainer;
    this.dialogContainerShowState = options.dialogContainerShowState;
    this.dialogTitleElem = options.dialogTitleElem;
    this.dialogTitle = options.dialogTitle || null;
    this.dialogMessageElem = options.dialogMessageElem;
    this.dialogMessage = options.dialogMessage || null;
    this.dialogButton = options.dialogButton;

    this.onClickDialogButton = () => {
      this.hideDialog();
    };

    this.onKeyDownEscDialog = (evt) => {
      if (evt.keyCode === Key.Esc) {
        this.hideDialog();
      }
    };

    if (this.dialogTitle) {
      this.dialogTitleElem.textContent = this.dialogTitle;
    }

    if (this.dialogMessage) {
      this.dialogMessageElem.textContent = this.dialogTitleElem;
    }

    this.dialogButton.addEventListener("click", this.onClickDialogButton, false);
  }

  public showDialog() {
    this.dialogContainer.classList.add(this.dialogContainerShowState);
    this.dialogButton.focus();
    document.addEventListener("keydown", this.onKeyDownEscDialog, false);
  }

  public hideDialog() {
    this.dialogContainer.classList.remove(this.dialogContainerShowState);
    document.removeEventListener("keydown", this.onKeyDownEscDialog, false);
  }

  public set newTitle(text: string) {
    this.dialogTitle = text;
  }

  public set newMessage(text: string) {
    this.dialogMessage = text;
  }
}
