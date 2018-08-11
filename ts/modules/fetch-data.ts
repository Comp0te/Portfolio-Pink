export default function getData(url: string,
                                options,
                                errorContainer,
                                dataWithoutServer: string) {
  return fetch(url, {
    method: options.method,
    mode: options.mode,
    headers: options.headers,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return JSON.parse(dataWithoutServer); // Due to lack of back end.
        // throw new Error("ошибка загрузки информации");
      }
    })
    .catch((error) => {
      errorContainer.style.textAlign = "center";
      errorContainer.style.fontSize = "24px";
      errorContainer.textContent = `1) Возникла ${error.message} с сервера, попробуйте перезагрузить страницу`;
    });
}
