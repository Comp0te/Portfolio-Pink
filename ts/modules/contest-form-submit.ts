import {showValidityError} from "./contest-dialog";
import postContestForm from "./post-contest-form";

const contestForm: any = document.querySelector(".contest__form");
const userName: any = document.querySelector("#name");
const userSurname: any = document.querySelector("#surname");
const userEmail: any = document.querySelector("#email");
const submitButton: any = document.querySelector(".contest__submit-button");
const userPhone: any = document.querySelector("#tel");
const emailError = {
  title: "Неверный формат адреса электронной почты",
  message: "Введите адрес электронной почты в формате user@example.com",
};
const phoneError = {
  title: "Неверный формат номера телефона",
  message: "Введите номер телефона в формате XXX-XX-XXXXXXX",
};

contestForm.addEventListener("submit", onSubmit, false);

function onSubmit(evt) {
  evt.preventDefault();

  if (userName.validity.valueMissing ||
    userSurname.validity.valueMissing ||
    userEmail.validity.valueMissing) {
    showValidityError();

    userName.classList.add("invalid");
    userSurname.classList.add("invalid");
    userEmail.classList.add("invalid");
    return;
  } else if (userEmail.validity.typeMismatch) {
    showValidityError(emailError.title, emailError.message);

    userEmail.classList.add("invalid");
    return;
  } else if (userPhone.validity.patternMismatch) {
    showValidityError(phoneError.title, phoneError.message);

    userPhone.classList.add("invalid");
    return;
  } else {
    const formData = new FormData(contestForm);

    userName.classList.remove("invalid");
    userSurname.classList.remove("invalid");
    userEmail.classList.remove("invalid");
    userPhone.classList.remove("invalid");
    submitButton.setAttribute("disabled", "");

    postContestForm(formData)
    .then((response) => {
      if (response) {
      submitButton.removeAttribute("disabled");
    } else {
      setTimeout(() => {
        submitButton.removeAttribute("disabled");
        }, 5000);
      }
    });
  }
}
