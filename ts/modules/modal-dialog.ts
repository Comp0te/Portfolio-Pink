import {Dialog, OptionsDialog} from "./dialog";

interface OptionsModalDialog extends OptionsDialog {
  dialogWraperSelector: string;
  buttonWraperSelector: string;
  successModifier: string;
}

export default class ModalDialog extends Dialog {
  public dialogWraper;
  public dialogButtonWraper;
  public successModifier;
  public successDialog;

  public constructor(options: OptionsModalDialog) {
    super(options);
    this.dialogWraper = this.dialogContainer.querySelector(options.dialogWraperSelector);
    this.dialogButtonWraper = this.dialogContainer.querySelector(options.buttonWraperSelector);
    this.successModifier = options.successModifier;
    this.successDialog = {
      dialogWraperSelector: options.dialogWraperSelector + this.successModifier,
      buttonWraperSelector: options.buttonWraperSelector + this.successModifier,
      messageElemSelector: options.messageElemSelector + this.successModifier,
      buttonElemSelector: options.buttonSelector + this.successModifier,
    };
  }

  public makeSuccessDialog() {
    this.dialogWraper.classList.add(this.successDialog.dialogWraperSelector);
    this.dialogMessageElem.classList.add(this.successDialog.messageElemSelector);
    this.dialogButtonWraper.classList.add(this.successDialog.buttonWraperSelector);
    this.dialogButton.classList.add(this.successDialog.buttonElemSelector);
    this.dialogButton.textContent = "Закрыть окно";
  }

  public makeFailDialog() {
    this.dialogWraper.classList.remove(this.successDialog.dialogWraperSelector);
    this.dialogMessageElem.classList.remove(this.successDialog.messageElemSelector);
    this.dialogButtonWraper.classList.remove(this.successDialog.buttonWraperSelector);
    this.dialogButton.classList.remove(this.successDialog.buttonElemSelector);
    this.dialogButton.textContent = "Ок";
  }
}
