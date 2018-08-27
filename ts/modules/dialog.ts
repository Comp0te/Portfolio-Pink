import {Key} from "./enums";

interface OptionsDialog {
  dialogContainer: any;
  dialogContainerShowState: string;
  titleElemSelector: string;
  messageElemSelector: string;
  buttonSelector: string;
}

class Dialog {
  public dialogContainer;
  public dialogContainerShowState: string;
  public dialogTitleElem;
  public dialogMessageElem;
  public dialogButton;
  protected onClickDialogButton;
  protected onKeyDownEscDialog;

  public constructor(options: OptionsDialog) {
    this.dialogContainer = options.dialogContainer;
    this.dialogContainerShowState = options.dialogContainerShowState;
    this.dialogTitleElem = this.dialogContainer.querySelector(options.titleElemSelector);
    this.dialogMessageElem = this.dialogContainer.querySelector(options.messageElemSelector);
    this.dialogButton = this.dialogContainer.querySelector(options.buttonSelector);

    this.onClickDialogButton = () => {
      this.hideDialog();
    };

    this.onKeyDownEscDialog = (evt) => {
      if (evt.keyCode === Key.Esc) {
        this.hideDialog();
      }
    };

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
    this.dialogTitleElem.textContent = text;
  }

  public set newMessage(text: string) {
    this.dialogMessageElem.textContent = text;
  }
}

export {Dialog, OptionsDialog};
