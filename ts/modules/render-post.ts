import generatePost from "./generate-post";

let alreadyRendered = 0;

const renderPost = (postAmountRender: number,
                    dataPosts: any[],
                    postParent) => {
  const fragment = document.createDocumentFragment();
  const isAllRender = (i: number): boolean => {
      return i < postAmountRender + alreadyRendered && i < dataPosts.length;
    };

  for (let i = alreadyRendered; isAllRender(i); i++) {
      const post = generatePost(dataPosts[i]);
      fragment.appendChild(post);
    }

  alreadyRendered += postAmountRender;
  postParent.appendChild(fragment);
};

export default renderPost;
