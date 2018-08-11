import {jsonPosts} from "./json-data";
import launchPost from "./launch-post";

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

export default dataPost;
