import {showUploadResponse} from "./contest-dialog";

export default function postContestForm(formData) {
  return fetch("/server/contest/", {
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
      showUploadResponse(error.name, error.message, false);
      return false;
    });
}
