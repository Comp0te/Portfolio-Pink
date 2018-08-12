import {jsonPosts} from "./json-data";
import launchPost from "./launch-post";
import likePost from "./like-post";

const postParent = document.querySelector(".photo__list");
const urlFetch = "/server/posts/";
const optionsFetch = {
  method: "GET",
  mode: "same-origin",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};
const dataPost = launchPost(urlFetch,
                            optionsFetch,
                            postParent,
                            jsonPosts,
                            false);

dataPost.then((data) => {
  const onClickLike = (evt) => {
    const likeButtons = [...postParent.querySelectorAll(".post__button")];
    const likeCounts = [...postParent.querySelectorAll(".post__like")];
    let target = evt.target;

    while (target !== evt.currentTarget) {
      likeButtons.forEach((elem, i) => {
        if (target === elem) {
          likePost(elem, likeCounts[i], data[i], false);
          return;
        }
      });

      target = target.parentNode;
    }
  };

  postParent.addEventListener("click", onClickLike, false);
});
