

export default function likePost(likeButton,
                                 likeCount,
                                 dataFromServer,
                                 isPanorama = false) {
  const isAlreadyLiked = !!localStorage.getItem(`isPost${dataFromServer.postId}liked`);
  const dataToSend = {
    postId: null,
    likeAmount: "",
  };
  const fetchDelay = 1000;
  const url = isPanorama ? `/server/panorama/` :
    `/server/posts/${dataFromServer.postId}`;

  if (isAlreadyLiked) {
    dataToSend.postId = dataFromServer.postId;
    dataToSend.likeAmount = "-1";
    likeButton.classList.toggle("post__button--liked");
    dataFromServer.likeAmount--;
    localStorage.removeItem(`isPost${dataFromServer.postId}liked`);
    sendLike(url, dataToSend);
  } else {
    dataToSend.postId = dataFromServer.postId;
    dataToSend.likeAmount = "+1";
    likeButton.classList.toggle("post__button--liked");
    dataFromServer.likeAmount++;
    localStorage.setItem(`isPost${dataFromServer.postId}liked`, `true`);
    sendLike(url, dataToSend);
  }

  likeCount.textContent = `Нравится: ${dataFromServer.likeAmount}`;
}

function sendLike(url, data) {
  return fetch(url, {
    method: "PUT",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
  .catch((err) => {
    alert(`Произошла ошибка ${err.message}.\nВаш лайк не был учтен`);
  });
}
