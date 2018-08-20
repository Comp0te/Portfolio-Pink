import {toggleFormState} from "./upload-photo-handling";

const buttonBack = document.querySelector(".comment__reset");
const uploadForm = document.querySelector("upload__form");

buttonBack.addEventListener("click", () => {
  toggleFormState();
}, false);
