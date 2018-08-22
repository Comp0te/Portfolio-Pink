import Dialog from "./dialog";

const options = {
dialogContainer: document.querySelector(".upload__pop-up"),
dialogContainerShowState: "upload__pop-up--on",
titleElemSelector: ".form-pop-up__title",
messageElemSelector: ".form-pop-up__text",
buttonSelector: ".form-pop-up__button",
};

const pickPhotoError = new Dialog(options, true);
const fillFieldsError = new Dialog(options);

fillFieldsError.newTitle = "Вы не заполнили обязательные поля!";
fillFieldsError.newMessage = "Пожалуйста, заполните все поля, отмеченные *";

const uploadResponse = new Dialog(options);

export {pickPhotoError, fillFieldsError, uploadResponse};
