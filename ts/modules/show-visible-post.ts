import {ScreenWidth} from "./enums";
import renderPost from "./render-post";

export default function showVisiblePost(dataPosts: any[],
                                        postParent,
                                        isPanorama = false) {
  const windowHeight: number = document.documentElement.clientHeight;
  const isPostVisible = (elem): boolean  => {
    const coords = elem.getBoundingClientRect();
    const topVisible: boolean = coords.top > -windowHeight * 0.5 &&
      coords.top < windowHeight * 1.5;
    const bottomVisible: boolean = coords.bottom > 0 &&
      coords.bottom < windowHeight;

    return topVisible || bottomVisible;
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
