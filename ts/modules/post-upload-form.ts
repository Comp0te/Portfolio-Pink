import {showUploadResponse} from "./upload-dialog";

export default function postUploadForm(formData) {
  return fetch("/server/post/", {
    method: "POST",
    mode: "same-origin",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        showUploadResponse();
        return true;
      } else {
        throw new Error("При загрузке информации на сервер произошла ошибка.");
      }
    })
    .catch((error) => {
      showUploadResponse(error.name, error.message);
      return false;
    });
}
