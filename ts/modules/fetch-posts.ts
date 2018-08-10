import jsonPosts from "./json-posts";

const getPostData = () => {
  return fetch("/pink/posts/", {
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
        // throw new Error("Network response failed");
      }
    })
    .catch((error) => {
      alert(`Возникла ошибка ${error.message} при загрузке фотографий, попробуйте перезагрузить страницу`);
    });
};

export default getPostData;
