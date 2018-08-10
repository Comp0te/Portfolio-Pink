export default function generatePost(data) {
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
  postDate.datetime = data.postDate;
  postContent.textContent = data.postContent;
  postLike.textContent = `Нравится: ${data.likeAmount}`;
  return clone;
}
