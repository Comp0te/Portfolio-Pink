import generatePost from "./generate-post";

let alreadyRenderedPost = 0;
let alreadyRenderedPanorama = 0;

const renderPost = (postAmountRender: number,
                    dataPosts: any[],
                    postParent,
                    isPanorama: boolean) => {
  const fragment = document.createDocumentFragment();
  const AlreadyRender = () => {
    return isPanorama ? alreadyRenderedPanorama : alreadyRenderedPost;
  };
  const isAllRender = (i: number): boolean => {
      return i < postAmountRender + AlreadyRender() && i < dataPosts.length;
    };

  for (let i = AlreadyRender(); isAllRender(i); i++) {
      const post = generatePost(dataPosts[i], isPanorama);
      fragment.appendChild(post);
    }

  if (!isPanorama) {
    alreadyRenderedPost += postAmountRender;
  } else {
    alreadyRenderedPanorama += postAmountRender;
  }

  postParent.appendChild(fragment);
};

export default renderPost;
