
import {jsonPanorama} from "./json-data";
import launchPost from "./launch-post";
import likePost from "./like-post";

const panoramaParent = document.querySelector(".photo__panorama");
const urlFetch = "/server/panorama/";
const optionsFetch = {
  method: "GET",
  mode: "same-origin",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};
const dataPanorama = launchPost(urlFetch,
                                optionsFetch,
                                panoramaParent,
                                jsonPanorama,
                                true);

dataPanorama.then((data) => {
  const onClickLike = (evt) => {
    const likeButtons = [...panoramaParent.querySelectorAll(".post__button")];
    const likeCounts = [...panoramaParent.querySelectorAll(".post__like")];
    let target = evt.target;

    while (target !== evt.currentTarget) {
      likeButtons.forEach((elem, i) => {
        if (target === elem) {
          likePost(elem, likeCounts[i], data[i], true);
          return;
        }
      });

      target = target.parentNode;
    }
  };

  panoramaParent.addEventListener("click", onClickLike, false);
});
