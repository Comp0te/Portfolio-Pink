import getTimePassed from "./get-time-passed";

export default function generatePost(data, isPanorama = false) {
  const template: any = document.querySelector(".post-template");
  const clone = document.importNode(template.content, true);
  const postImg = {
    mobile: clone.querySelector(".post-template__mobile"),
    tablet: clone.querySelector(".post-template__tablet"),
    desktop: clone.querySelector(".post-template__desktop"),
    mobileWebp: clone.querySelector(".post-template__webp-mobile"),
    tabletWebp: clone.querySelector(".post-template__webp-tablet"),
    desktopWebp: clone.querySelector(".post-template__webp-desktop"),
    fullSize: clone.querySelector(".post__link-photo"),
  };
  const postAuthor = clone.querySelector(".post__author");
  const postDate = clone.querySelector(".post__time");
  const postContent = clone.querySelector(".post__content");
  const postButtonLike = clone.querySelector(".post__button");
  const postLike = clone.querySelector(".post__like");
  const setSrcImg = (source) => {
    if (data.imgSrc[source]) {
      postImg[source].setAttribute("srcset", data.imgSrc[source]);

      if (data.imgSrc[source + "2x"]) {
        postImg[source].setAttribute("srcset", data.imgSrc[source] + ", " + data.imgSrc[source + "2x"]);
      }
    } else {
      postImg[source].remove();
    }
  };

  postImg.mobile.src = data.imgSrc.mobile;

  if (data.imgSrc.mobile2x) {
    postImg.mobile.setAttribute("srcset", data.imgSrc.mobile2x);
  } else {
    postImg.mobile.removeAttribute("srcset");
  }

  setSrcImg("tablet");
  setSrcImg("desktop");
  setSrcImg("mobileWebp");
  setSrcImg("tabletWebp");
  setSrcImg("desktopWebp");

  if (data.imgSrc.fullSize) {
    postImg.fullSize.setAttribute("href", data.imgSrc.fullSize);
    postImg.fullSize.style.pointerEvents = "auto";
  }

  postAuthor.textContent = data.authorName;
  postContent.textContent = data.postContent;
  postLike.textContent = `Нравится: ${data.likeAmount}`;
  postDate.textContent = getTimePassed(data.postDate);
  postDate.setAttribute("datetime", data.postDate);

  if (localStorage.getItem(`isPost${data.postId}liked`)) {
    postButtonLike.classList.add("post__button--liked");
  }

  if (isPanorama) {
    const fragment = document.createDocumentFragment();
    const wraperphoto = clone.querySelector(".post__wraper-photo");
    const wraperAuthor = clone.querySelector(".post__wraper-author");
    const wraperlike = clone.querySelector(".post__wraper-like");

    wraperphoto.classList.add("post__wraper-photo--panorama");
    wraperAuthor.classList.add("post__wraper-author--panorama");
    postContent.classList.add("post__content--panorama");
    wraperlike.classList.add("post__wraper-like--panorama");
    fragment.appendChild(wraperphoto);
    fragment.appendChild(wraperAuthor);
    fragment.appendChild(postContent);
    fragment.appendChild(wraperlike);
    return fragment;
  }

  return clone;
}
