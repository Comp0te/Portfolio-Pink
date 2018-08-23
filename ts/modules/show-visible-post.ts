import {ScreenWidth} from "./enums";
import renderPost from "./render-post";

export default function showVisiblePost(dataPosts: any[],
                                        postParent,
                                        isPanorama = false) {
  const windowHeight: number = document.documentElement.clientHeight;

  const isPostVisible = (elem): boolean  => {
    const coords = elem.getBoundingClientRect();
    const bottomVisible: boolean = coords.bottom > -windowHeight * 0.5 &&
      coords.bottom < windowHeight * 1.5;

    return bottomVisible;
  };

  if (isPostVisible(postParent)) {
    if (!isPanorama) {
      if (window.innerWidth < ScreenWidth.Tablet) {
        renderPost(1, dataPosts, postParent, isPanorama);
      } else if (window.innerWidth < ScreenWidth.Desktop) {
        renderPost(2, dataPosts, postParent, isPanorama);
      } else if (window.innerWidth >= ScreenWidth.Desktop) {
        renderPost(3, dataPosts, postParent, isPanorama);
      }
    } else {
      renderPost(1, dataPosts, postParent, isPanorama);
    }
  }
}
