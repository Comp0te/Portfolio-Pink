import Dialog from "./dialog";

const options = {
  dialogContainer: document.querySelector(".upload__pop-up"),
  dialogContainerShowState: "upload__pop-up--on",
  titleElemSelector: ".form-pop-up__title",
  messageElemSelector: ".form-pop-up__text",
  buttonSelector: ".form-pop-up__button",
};

const uploadDialog = new Dialog(options, true);

function showPickPhotoError() {
  uploadDialog.newTitle = "Вы не выбрали фотографию!";
  uploadDialog.newMessage = `Для того, чтобы выбрать фотографию, нажмите на
  кнопку "Выбрать фотографию" или перетащите фотографию на картинку заснеженной дороги.`;
  uploadDialog.showDialog();
}

function showfillFieldsError() {
  uploadDialog.newTitle = "Вы не заполнили обязательные поля!";
  uploadDialog.newMessage = "Пожалуйста, заполните все поля, отмеченные *";
  uploadDialog.showDialog();
}

function showUploadResponse(title = "Ваш пост успешно отправлен!",
                            message = "В ближайшее время Ваш пост будет опубликован.") {
  uploadDialog.newTitle = title;
  uploadDialog.newMessage = message;
  uploadDialog.showDialog();
}

export {showPickPhotoError, showfillFieldsError, showUploadResponse};
