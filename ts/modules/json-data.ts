const jsonPosts = `[
  {
    "postId": 0,
    "imgSrc": {
      "mobile": "img/photo-1-mobile-1x.jpg",
      "mobile2x": "img/photo-1-mobile-2x.jpg 2x",
      "tablet": "img/photo-1-tablet-1x.jpg 1x",
      "tablet2x": "img/photo-1-tablet-2x.jpg 2x",
      "desktop": "img/photo-1-desktop-1x.jpg 1x",
      "desktop2x": "img/photo-1-desktop-2x.jpg 2x",
      "mobileWebp": "img/photo-1-mobile-1x.webp 1x",
      "mobileWebp2x": "img/photo-1-mobile-2x.webp 2x",
      "tabletWebp": "img/photo-1-tablet-1x.webp 1x",
      "tabletWebp2x": "img/photo-1-tablet-2x.webp 2x",
      "desktopWebp": "img/photo-1-desktop-1x.webp 1x",
      "desktopWebp2x": "img/photo-1-desktop-2x.webp 2x",
      "fullSize": null
    },
    "authorName": "Левон",
    "postDate": "2018-01-08",
    "postContent": "Вчера он на луну летал, сегодня в руки к нам попал.",
    "likeAmount": 356
  },
  {
    "postId": 1,
    "imgSrc": {
      "mobile": "img/photo-2-mobile-1x.jpg",
      "mobile2x": "img/photo-2-mobile-2x.jpg 2x",
      "tablet": "img/photo-2-tablet-1x.jpg 1x",
      "tablet2x": "img/photo-2-tablet-2x.jpg 2x",
      "desktop": "img/photo-2-desktop-1x.jpg 1x",
      "desktop2x": "img/photo-2-desktop-2x.jpg 2x",
      "mobileWebp": "img/photo-2-mobile-1x.webp 1x",
      "mobileWebp2x": "img/photo-2-mobile-2x.webp 2x",
      "tabletWebp": "img/photo-2-tablet-1x.webp 1x",
      "tabletWebp2x": "img/photo-2-tablet-2x.webp 2x",
      "desktopWebp": "img/photo-2-desktop-1x.webp 1x",
      "desktopWebp2x": "img/photo-2-desktop-2x.webp 2x",
      "fullSize": null
    },
    "authorName": "Антон",
    "postDate": "2017-01-07",
    "postContent": "Соседи будут рады!",
    "likeAmount": 666
  },
  {
    "postId": 2,
    "imgSrc": {
      "mobile": "img/photo-3-mobile-1x.jpg",
      "mobile2x": "img/photo-3-mobile-2x.jpg 2x",
      "tablet": "img/photo-3-tablet-1x.jpg 1x",
      "tablet2x": "img/photo-3-tablet-2x.jpg 2x",
      "desktop": "img/photo-3-desktop-1x.jpg 1x",
      "desktop2x": "img/photo-3-desktop-2x.jpg 2x",
      "mobileWebp": "img/photo-3-mobile-1x.webp 1x",
      "mobileWebp2x": "img/photo-3-mobile-2x.webp 2x",
      "tabletWebp": "img/photo-3-tablet-1x.webp 1x",
      "tabletWebp2x": "img/photo-3-tablet-2x.webp 2x",
      "desktopWebp": "img/photo-3-desktop-1x.webp 1x",
      "desktopWebp2x": "img/photo-3-desktop-2x.webp 2x",
      "fullSize": null
    },
    "authorName": "Борис",
    "postDate": "2016-02-04",
    "postContent": "Здесь могла быть ваша цитата о высоком и вечном.",
    "likeAmount": 215
  },
  {
    "postId": 3,
    "imgSrc": {
      "mobile": "img/photo-4-mobile-1x.jpg",
      "mobile2x": "img/photo-4-mobile-2x.jpg 2x",
      "tablet": "img/photo-4-tablet-1x.jpg 1x",
      "tablet2x": "img/photo-4-tablet-2x.jpg 2x",
      "desktop": "img/photo-4-desktop-1x.jpg 1x",
      "desktop2x": "img/photo-4-desktop-2x.jpg 2x",
      "mobileWebp": "img/photo-4-mobile-1x.webp 1x",
      "mobileWebp2x": "img/photo-4-mobile-2x.webp 2x",
      "tabletWebp": "img/photo-4-tablet-1x.webp 1x",
      "tabletWebp2x": "img/photo-4-tablet-2x.webp 2x",
      "desktopWebp": "img/photo-4-desktop-1x.webp 1x",
      "desktopWebp2x": "img/photo-4-desktop-2x.webp 2x",
      "fullSize": null
    },
    "authorName": "Сергей",
    "postDate": "2018-07-07T18:40",
    "postContent": "Самая кубанская в мире!",
    "likeAmount": 4
  },
  {
    "postId": 4,
    "imgSrc": {
      "mobile": "img/photo-5-mobile-1x.jpg",
      "mobile2x": "img/photo-5-mobile-2x.jpg 2x",
      "tablet": "img/photo-5-tablet-1x.jpg 1x",
      "tablet2x": "img/photo-5-tablet-2x.jpg 2x",
      "desktop": "img/photo-5-desktop-1x.jpg 1x",
      "desktop2x": "img/photo-5-desktop-2x.jpg 2x",
      "mobileWebp": "img/photo-5-mobile-1x.webp 1x",
      "mobileWebp2x": "img/photo-5-mobile-2x.webp 2x",
      "tabletWebp": "img/photo-5-tablet-1x.webp 1x",
      "tabletWebp2x": "img/photo-5-tablet-2x.webp 2x",
      "desktopWebp": "img/photo-5-desktop-1x.webp 1x",
      "desktopWebp2x": "img/photo-5-desktop-2x.webp 2x",
      "fullSize": null
    },
    "authorName": "Максим",
    "postDate": "2018-08-12",
    "postContent": "Где снег-то?",
    "likeAmount": 150
  },
  {
    "postId": 5,
    "imgSrc": {
      "mobile": "img/photo-6-mobile-1x.jpg",
      "mobile2x": "img/photo-6-mobile-2x.jpg 2x",
      "tablet": "img/photo-6-tablet-1x.jpg 1x",
      "tablet2x": "img/photo-6-tablet-2x.jpg 2x",
      "desktop": "img/photo-6-desktop-1x.jpg 1x",
      "desktop2x": "img/photo-6-desktop-2x.jpg 2x",
      "mobileWebp": "img/photo-6-mobile-1x.webp 1x",
      "mobileWebp2x": "img/photo-6-mobile-2x.webp 2x",
      "tabletWebp": "img/photo-6-tablet-1x.webp 1x",
      "tabletWebp2x": "img/photo-6-tablet-2x.webp 2x",
      "desktopWebp": "img/photo-6-desktop-1x.webp 1x",
      "desktopWebp2x": "img/photo-6-desktop-2x.webp 2x",
      "fullSize": null
    },
    "authorName": "Надежда",
    "postDate": "2018-08-12T13:32",
    "postContent": "Всем GM и взаимные лайки!",
    "likeAmount": 2560
  }
]`;

const jsonPanorama = `[
  {
    "postId": 0,
    "imgSrc": {
      "mobile": "img/panorama-mobile-1x.jpg",
      "mobile2x": "img/panorama-mobile-2x.jpg 2x",
      "tablet": "img/panorama-tablet-1x.jpg 1x",
      "tablet2x": "img/panorama-tablet-2x.jpg 2x",
      "desktop": "img/panorama-desktop-1x.jpg 1x",
      "desktop2x": "img/panorama-desktop-2x.jpg 2x",
      "mobileWebp": "img/panorama-mobile-1x.webp 1x",
      "mobileWebp2x": "img/panorama-mobile-2x.webp 2x",
      "tabletWebp": "img/panorama-tablet-1x.webp 1x",
      "tabletWebp2x": "img/panorama-tablet-2x.webp 2x",
      "desktopWebp": "img/panorama-desktop-1x.webp 1x",
      "desktopWebp2x": "img/panorama-desktop-2x.webp 2x",
      "fullSize": null
    },
    "authorName": "Анна",
    "postDate": "2018-07-07",
    "postContent": [
      "Прыгать или нет? Напишите в коментарии свой совет и смотрите прямую трансляцию в перископе",
      " задавайте свои вопросы!"
    ],
    "likeAmount": 215
  }
]`;

export {jsonPosts, jsonPanorama};
