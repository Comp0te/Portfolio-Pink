import ModalDialog from "./modal-dialog";

const options = {
  dialogContainer: document.querySelector(".contest__pop-up"),
  dialogContainerShowState: "contest__pop-up--on",
  titleElemSelector: ".form-pop-up__title",
  messageElemSelector: ".form-pop-up__text",
  buttonSelector: ".form-pop-up__button",
  dialogWraperSelector: ".contest__pop-up-wraper",
  buttonWraperSelector: ".form-pop-up__wraper",
  successModifier: "--success",
};

const contestDialog = new ModalDialog(options);

function showfillFieldsError() {
  contestDialog.newTitle = "Что-то пошло не так!";
  contestDialog.newMessage = "Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить";
  contestDialog.makeFailDialog();
  contestDialog.showDialog();
}

function showUploadResponse(title = "Ваша заявка отправлена",
                            message = `Спасибо за ваше участие, ваша заявка уже поступила к нам.
                            В ближайшее время мы рассмотрим ее и оповестим вас.`,
                            isSuccess = true) {
  contestDialog.newTitle = title;
  contestDialog.newMessage = message;

  if (isSuccess) {
    contestDialog.makeSuccessDialog();
  } else {
    contestDialog.makeFailDialog();
  }

  contestDialog.showDialog();
}

export {showfillFieldsError, showUploadResponse};
