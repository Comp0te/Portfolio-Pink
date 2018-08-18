const inputFileElem: any = document.querySelector("#pick-photo");
const dropBox: any = document.querySelector(".upload__wraper-photo");
const previewPhoto: any = document.querySelector(".upload__photo");
let pickedFile = inputFileElem.files[0];

const onPickFile = () => {
  pickedFile = inputFileElem.files[0];
  renderPickedFile(pickedFile);
};

const onDragEnter = (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
};

const onDragOver = (evt) => {
  evt.preventDefault();
  evt.stopPropagation();

  dropBox.classList.add("upload__wraper-photo--drag-over");
};

const onDragLeave = (evt) => {
  evt.preventDefault();
  evt.stopPropagation();

  dropBox.classList.remove("upload__wraper-photo--drag-over");
};

const onDrop = (evt) => {
  const dataTransfer = evt.dataTransfer;

  evt.preventDefault();
  evt.stopPropagation();
  dropBox.classList.remove("upload__wraper-photo--drag-over");
  pickedFile = dataTransfer.files[0];
  renderPickedFile(pickedFile);
};

inputFileElem.addEventListener("change", onPickFile, false);
dropBox.addEventListener("dragenter", onDragEnter, false);
dropBox.addEventListener("dragover", onDragOver, false);
dropBox.addEventListener("dragleave", onDragLeave, false);
dropBox.addEventListener("drop", onDrop, false);

function renderPickedFile(file) {
  const previewPhotoWebp = document.querySelector(".upload__photo-webp");
  const urlPhoto = window.URL.createObjectURL(file);

  if (previewPhotoWebp) {
    previewPhotoWebp.remove();
    previewPhoto.removeAttribute("srcset");
  }

  previewPhoto.src = urlPhoto;
}

export default pickedFile;
