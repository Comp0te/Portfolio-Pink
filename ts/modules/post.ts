import getPostData from "./fetch-posts";
import showVisiblePost from "./show-visible-post";

const postParent = document.querySelector(".photo__list");
let dataPosts = [];
const promisePost: Promise<any> = new Promise((resolve, reject) => {
  resolve(getPostData());
  reject(() => {
    throw new Error("ошибка");
  });
});

promisePost.then((data) => {
  dataPosts = data;
  const onChangeScreenWidth = () => {
    showVisiblePost(dataPosts, postParent);
  };

  showVisiblePost(dataPosts, postParent);
  window.addEventListener("scroll", onChangeScreenWidth, false);
})
.catch((err) => {
  postParent.textContent += `\n2) ${err.name} - ${err.message}`;
});
