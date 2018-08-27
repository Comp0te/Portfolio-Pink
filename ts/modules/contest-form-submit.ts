import {showfillFieldsError} from "./contest-dialog";
import postContestForm from "./post-contest-form";

const contestForm: any = document.querySelector(".contest__form");
const userName: any = document.querySelector("#name");
const userSurname: any = document.querySelector("#surname");
const userEmail: any = document.querySelector("#email");
const submitButton: any = document.querySelector(".contest__submit-button");

contestForm.addEventListener("submit", onSubmit, false);

function onSubmit(evt) {
  evt.preventDefault();

  if (userName.validity.valueMissing ||
    userSurname.validity.valueMissing ||
    userEmail.validity.valueMissing) {
    showfillFieldsError();
    return;
  } else {
    const formData = new FormData(contestForm);

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
