
import {jsonPanorama} from "./json-data";
import launchPost from "./launch-post";

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

export default dataPanorama;
