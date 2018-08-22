import {uploadResponse} from "./upload-dialog";

export default function postUploadForm(formData) {
  return fetch("/server/post/", {
    method: "POST",
    mode: "same-origin",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        uploadResponse.newTitle = "Ваш пост успешно отправлен!";
        uploadResponse.newMessage = "В ближайшее время Ваш пост будет опубликован.";
        uploadResponse.showDialog();
        return true;
      } else {
        throw new Error("При загрузке информации на сервер произошла ошибка");
      }
    })
    .catch((error) => {
      uploadResponse.newTitle = error.name;
      uploadResponse.newMessage = error.message;
      uploadResponse.showDialog();
      return false;
    });
}
