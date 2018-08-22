import {Key} from "./enums";

interface OptionsDialog {
  dialogContainer: any;
  dialogContainerShowState: string;
  titleElemSelector: string;
  messageElemSelector: string;
  buttonSelector: string;
}

export default class Dialog {
  public dialogContainer;
  public dialogContainerShowState: string;
  public dialogTitleElem;
  public dialogMessageElem;
  public dialogButton;
  public cloneDialog;
  public dialog;
  protected onClickDialogButton;
  protected onKeyDownEscDialog;

  public constructor(options: OptionsDialog, isDialogFromMarkup = false) {
    this.dialogContainer = options.dialogContainer;

    if (isDialogFromMarkup) {
      this.dialog = this.dialogContainer;
    } else {
      this.cloneDialog = this.dialogContainer.cloneNode(true);
      this.dialog = document.body.appendChild(this.cloneDialog);
    }

    this.dialogContainerShowState = options.dialogContainerShowState;
    this.dialogTitleElem = this.dialog.querySelector(options.titleElemSelector);
    this.dialogMessageElem = this.dialog.querySelector(options.messageElemSelector);
    this.dialogButton = this.dialog.querySelector(options.buttonSelector);

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
    this.dialog.classList.add(this.dialogContainerShowState);
    this.dialogButton.focus();
    document.addEventListener("keydown", this.onKeyDownEscDialog, false);
  }

  public hideDialog() {
    this.dialog.classList.remove(this.dialogContainerShowState);
    document.removeEventListener("keydown", this.onKeyDownEscDialog, false);
  }

  public set newTitle(text: string) {
    this.dialogTitleElem.textContent = text;
  }

  public set newMessage(text: string) {
    this.dialogMessageElem.textContent = text;
  }
}
