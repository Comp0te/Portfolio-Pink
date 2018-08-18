const [sliderCrop, sliderPink, sliderGrey]: any = [...document.querySelectorAll(".tools__slider")];
const photo = document.querySelector(".upload__photo");
const wraperPhoto = document.querySelector(".upload__wraper-photo");
const wraperLayerPink: any = document.querySelector(".upload__wraper-layer--pink");
const wraperLayerGrey: any = document.querySelector(".upload__wraper-layer--grey");
const pickFileLabel: any = document.querySelector(".upload__source-label");
const imgTuning = {
  crop: 0,
  pink: 0,
  grey: 0,
};

sliderCrop.addEventListener("input", () => {
  const scrollAmount = photo.scrollWidth - wraperPhoto.clientWidth;

  wraperPhoto.scrollLeft = scrollAmount * sliderCrop.value / 100;
  wraperLayerPink.style.left = `${wraperPhoto.scrollLeft}px`;
  wraperLayerGrey.style.left = `${wraperPhoto.scrollLeft}px`;
  pickFileLabel.style.left = `${wraperPhoto.scrollLeft + 80}px`;
  imgTuning.crop = wraperPhoto.scrollLeft;
}, false);

sliderPink.addEventListener("input", () => {
  wraperLayerPink.style.opacity = sliderPink.value;
  imgTuning.pink = sliderPink.value;
}, false);

sliderGrey.addEventListener("input", () => {
  wraperLayerGrey.style.opacity = sliderGrey.value;
  imgTuning.grey = sliderGrey.value;
}, false);

export default imgTuning;
