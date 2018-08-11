import getData from "./fetch-data";
import showVisiblePost from "./show-visible-post";

export default function launchPost(url: string,
                                   options,
                                   parent,
                                   dataWithoutServer,
                                   isPanorama = false) {
  return new Promise((resolve, reject) => {
    resolve(getData(url, options, parent, dataWithoutServer));
    reject(() => {
      throw new Error("ошибка");
    });
  }).then((data: any[]) => {
    const onChangeScreenWidth = () => {
      showVisiblePost(data, parent, isPanorama);
    };

    showVisiblePost(data, parent, isPanorama);
    window.addEventListener("scroll", onChangeScreenWidth, false);
    return data;
  })
    .catch((err) => {
      parent.textContent += `\n2) ${err.name} - ${err.message}`;
    });
}
