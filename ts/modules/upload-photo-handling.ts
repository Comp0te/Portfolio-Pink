const [sliderCrop, sliderPink, sliderGrey]: any = [...document.querySelectorAll(".tools__slider")];
const previewPhoto: any = document.querySelector(".upload__photo");
const defaultPhotoSrc = previewPhoto.src;
const wraperPhoto = document.querySelector(".upload__wraper-photo");
const wraperLayerPink: any = document.querySelector(".upload__wraper-layer--pink");
const wraperLayerGrey: any = document.querySelector(".upload__wraper-layer--grey");
const inputFileElem: any = document.querySelector("#pick-photo");
const pickFileLabel: any = document.querySelector(".upload__source-label");
const buttonReset: any = document.querySelector(".upload__reset");
const buttonNext: any = document.querySelector(".upload__submit");
// const form = document.querySelector(".upload__form");
const photoData = {
  crop: 0,
  pink: 0,
  grey: 0,
  pickedFile: inputFileElem.files[0],
};

sliderCrop.addEventListener("input", onCropSliderMove, false);
sliderPink.addEventListener("input", onPinkSliderMove, false);
sliderGrey.addEventListener("input", onGreySliderMove, false);
buttonReset.addEventListener("click", onClickResetButton, false);
inputFileElem.addEventListener("change", onPickFile, false);
wraperPhoto.addEventListener("dragenter", onDragEnter, false);
wraperPhoto.addEventListener("dragover", onDragOver, false);
wraperPhoto.addEventListener("dragleave", onDragLeave, false);
wraperPhoto.addEventListener("drop", onDrop, false);
buttonNext.addEventListener("click", onClickButtonNext, false);

function onCropSliderMove() {
  const scrollAmount = previewPhoto.scrollWidth - wraperPhoto.clientWidth;

  wraperPhoto.scrollLeft = scrollAmount * sliderCrop.value / 100;
  wraperLayerPink.style.left = `${wraperPhoto.scrollLeft}px`;
  wraperLayerGrey.style.left = `${wraperPhoto.scrollLeft}px`;
  pickFileLabel.style.left = `${wraperPhoto.scrollLeft + 80}px`;
  photoData.crop = wraperPhoto.scrollLeft;
  buttonReset.removeAttribute("disabled");
}

function onPinkSliderMove() {
  wraperLayerPink.style.opacity = sliderPink.value;
  photoData.pink = sliderPink.value;
  buttonReset.removeAttribute("disabled");
}

function onGreySliderMove() {
  wraperLayerGrey.style.opacity = sliderGrey.value;
  photoData.grey = sliderGrey.value;
  buttonReset.removeAttribute("disabled");
}

function onClickResetButton() {
  resetSliders();
  previewPhoto.src = defaultPhotoSrc;
  buttonReset.setAttribute("disabled", "");
}

function onPickFile() {
  photoData.pickedFile = inputFileElem.files[0];
  renderPickedFile(photoData.pickedFile);
  resetSliders();
  buttonReset.removeAttribute("disabled");
}

function onDragEnter(evt) {
  evt.preventDefault();
  evt.stopPropagation();
}

function onDragOver(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  wraperPhoto.classList.add("upload__wraper-photo--drag-over");
}

function onDragLeave(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  wraperPhoto.classList.remove("upload__wraper-photo--drag-over");
}

function onDrop(evt) {
  const dataTransfer = evt.dataTransfer;

  evt.preventDefault();
  evt.stopPropagation();

  if (!dataTransfer.files[0].type.startsWith("image/")) {
    return;
  }

  photoData.pickedFile = dataTransfer.files[0];
  renderPickedFile(photoData.pickedFile);
  resetSliders();
  buttonReset.removeAttribute("disabled");
  wraperPhoto.classList.remove("upload__wraper-photo--drag-over");
}

function renderPickedFile(file) {
  const previewPhotoWebp = document.querySelector(".upload__photo-webp");
  const urlPhoto = window.URL.createObjectURL(file);

  if (previewPhotoWebp) {
    previewPhotoWebp.remove();
    previewPhoto.removeAttribute("srcset");
  }

  previewPhoto.src = urlPhoto;
}

function resetSliders() {
  sliderCrop.value = 0;
  sliderGrey.value = 0;
  sliderPink.value = 0;
  onCropSliderMove();
  onPinkSliderMove();
  onGreySliderMove();
}

function onClickButtonNext() {

  if (!photoData.pickedFile) {
    inputFileElem.reportValidity();
  }
}

export default photoData;
