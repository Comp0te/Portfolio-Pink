import jsonPosts from "./json-posts";

const getPostData = () => {
  return fetch("/server/posts/", {
    method: "GET",
    mode: "same-origin",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return JSON.parse(jsonPosts); // Due to lack of back end.
        // throw new Error("ошибка загрузки информации");
      }
    })
    .catch((error) => {
      const errorContainer: any = document.querySelector(".photo__list");

      errorContainer.style.textAlign = "center";
      errorContainer.style.fontSize = "24px";
      errorContainer.textContent = `1) Возникла ${error.message} с сервера, попробуйте перезагрузить страницу`;
    });
};

export default getPostData;
