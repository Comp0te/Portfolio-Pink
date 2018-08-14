const likePlus = {};
const likeMinus = {};

export default function likePost(likeButton,
                                 likeCount,
                                 dataFromServer,
                                 isPanorama = false) {
  const id = dataFromServer.postId;
  let likeAmount = dataFromServer.likeAmount;
  const isAlreadyLiked = !!localStorage.getItem(`isPost${id}liked`);
  const fetchDelay = 1000;
  const url = isPanorama ? `/server/panorama/` : `/server/posts/${id}`;
  const dataToSend = {
    postId: null,
    likeAmount: "",
  };

  if (isAlreadyLiked) {
    dataToSend.postId = id;
    dataToSend.likeAmount = "-1";
    likeButton.classList.toggle("post__button--liked");
    likeAmount--;
    localStorage.removeItem(`isPost${id}liked`);

    if (likePlus[`${id}`]) {
      clearTimeout(likePlus[`${id}`].timer);
    } else {
      Object.defineProperty(likePlus, `${id}`, {
        value: {},
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }

    if (!likePlus[`${id}`].isClicked) {
      likeMinus[`${id}`] = {
        timer: setTimeout(sendLike, fetchDelay, url, dataToSend, id),
        isClicked: true,
      };
    }
  } else {
    dataToSend.postId = id;
    dataToSend.likeAmount = "+1";
    likeButton.classList.toggle("post__button--liked");
    likeAmount++;
    localStorage.setItem(`isPost${id}liked`, `true`);

    if (likeMinus[`${id}`]) {
      clearTimeout(likeMinus[`${id}`].timer);
    } else {
      Object.defineProperty(likeMinus, `${id}`, {
        value: {},
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }

    if (!likeMinus[`${id}`].isClicked) {
      likePlus[`${id}`] = {
        timer: setTimeout(sendLike, fetchDelay, url, dataToSend, id),
        isClicked: true,
      };
    }
  }

  likeCount.textContent = `Нравится: ${likeAmount}`;
}

function sendLike(url, data, resetСountingСlick) {
  delete likePlus[`${resetСountingСlick}`];
  delete likeMinus[`${resetСountingСlick}`];
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
