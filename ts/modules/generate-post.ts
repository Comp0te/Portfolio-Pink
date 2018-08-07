export default function generatePost(data) {
  const template: any = document.querySelector(".post-template");
  const clone = document.importNode(template.content, true);
  const postImg = {
    mobile: template.querySelector(".post-template__mobile"),
    tablet: template.querySelector(".post-template__tablet"),
    desktop: template.querySelector(".post-template__desktop"),
    mobileWebp: template.querySelector(".post-template__webp-mobile"),
    tabletWebp: template.querySelector(".post-template__webp-tablet"),
    desktopWebp: template.querySelector(".post-template__webp-desktop"),
    fullSize: template.querySelector(".post__link-photo"),
  };
  const postAuthor = template.querySelector(".post__author");
  const postDate = template.querySelector(".post__time");
  const postContent = template.querySelector(".post__content");
  const postLike = template.querySelector(".post__like");
  const setSrcImg = (source) => {
    if (data.imgSrc[source]) {
      postImg[source].srcset = data.imgSrc[source];

      if (data.imgSrc[source + "2x"]) {
        postImg[source].srcset = data.imgSrc[source] + " " + data.imgSrc[source + "2x"];
      }
    } else {
      postImg[source].remove();
    }
  };

  postImg.mobile.src = data.imgSrc.mobile;

  if (data.imgSrc.mobile2x) {
    postImg.mobile.srcset = data.imgSrc.mobile2x;
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
