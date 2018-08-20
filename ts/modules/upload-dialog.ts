import Dialog from "./dialog";

const options = {
dialogContainer: document.querySelector(".upload__pop-up"),
dialogContainerShowState: "upload__pop-up--on",
dialogTitleElem: document.querySelector(".form-pop-up__title"),
dialogTitle: null,
dialogMessageElem: document.querySelector(".form-pop-up__text"),
dialogMessage: null,
dialogButton: document.querySelector(".form-pop-up__button"),
};

const pickPhotoError = new Dialog(options);
const fillFieldsError = new Dialog(options);

fillFieldsError.newTitle = "Вы не заполнили обязательные поля!";
fillFieldsError.newMessage = "Пожалуйста, заполните все поля, отмеченные *";

const uploadSuccess = new Dialog(options);

uploadSuccess.newTitle = "Ваш пост успешно отправлен!";
uploadSuccess.newMessage = "В ближайшее время Ваш пост будет опубликован.";

export {pickPhotoError, fillFieldsError, uploadSuccess};
