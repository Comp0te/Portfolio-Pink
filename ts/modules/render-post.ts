import generatePost from "./generate-post";

export default function renderPost(postAmountRender: number,
                                   dataPosts: any[],
                                   postParent) {
    let alreadyRendered = 0;
    const fragment = document.createDocumentFragment();

    return () => {
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
}
