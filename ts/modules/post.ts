import getPostData from "./fetch-posts";
import showVisiblePost from "./show-visible-post";

const postParent = document.querySelector(".photo__list");
let dataPosts = [];
const promisePost: Promise<any> = new Promise((resolve, reject) => {
  resolve(getPostData());
  reject("Ошибка загрузки постов пользователей");
});

promisePost.then((data) => {
  dataPosts = data;
  showVisiblePost(dataPosts, postParent);
})
.catch((err) => {
  alert(err.message);
});
