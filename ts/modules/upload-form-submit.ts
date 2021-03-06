import postUploadForm from "./post-upload-form";
import {showfillFieldsError} from "./upload-dialog";
import {isFormStatePhoto, onClickResetButton, photoData, toggleFormState} from "./upload-photo-handling";

const buttonBack = document.querySelector(".comment__reset");
const uploadForm: any = document.querySelector(".upload__form");
const submitButton = document.querySelector(".comment__submit");
const commetAuthorElem: any = document.querySelector(".comment__name-input");
const commentMessageElem: any = document.querySelector(".comment__textarea");
const commentData = {
  author: "",
  message: "",
};

buttonBack.addEventListener("click", onClickBackButton, false);
uploadForm.addEventListener("submit", onSubmit, false);

function onSubmit(evt) {
  evt.preventDefault();

  if (!isFormStatePhoto) {
    if (commetAuthorElem.validity.valueMissing ||
      commentMessageElem.validity.valueMissing) {
      showfillFieldsError();

      commetAuthorElem.classList.add("invalid");
      commentMessageElem.classList.add("invalid");
      return;
    } else {
      submitButton.setAttribute("disabled", "");
      commetAuthorElem.classList.remove("invalid");
      commentMessageElem.classList.remove("invalid");

      getCommentData();
      postUploadForm(generateFormData(photoData, commentData))
      .then((response) => {
        if (response) {
          resetForm();
        } else {
          setTimeout(() => {
            submitButton.removeAttribute("disabled");
          }, 5000);
        }
      });
    }
  }
}

function onClickBackButton() {
  toggleFormState();
}

function getCommentData() {
  commentData.author = commetAuthorElem.value;
  commentData.message = commentMessageElem.value;
}

function generateFormData(photo, comment) {
  const formData = new FormData();

  for (const key in photo) {
    if (photo.hasOwnProperty(key)) {
      formData.append(key, photo[key]);
    }
  }

  for (const key in comment) {
    if (comment.hasOwnProperty(key)) {
      formData.append(key, comment[key]);
    }
  }

  return formData;
}

function resetForm() {
  commetAuthorElem.value = null;
  commentMessageElem.value = null;
  submitButton.removeAttribute("disabled");
  toggleFormState();
  onClickResetButton();
}
