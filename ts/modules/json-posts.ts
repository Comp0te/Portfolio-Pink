const jsonPosts = `[
  {
    "postId": 0,
    "imgSrcMobile": "img/photo-1-mobile-1x.jpg",
    "imgSrcMobile2x": "img/photo-1-mobile-2x.jpg 2x",
    "imgSrcTablet": "img/photo-1-tablet-1x.jpg 1x",
    "imgSrcTablet2x": "img/photo-1-tablet-2x.jpg 2x",
    "imgSrcDesktop": "img/photo-1-desktop-1x.jpg 1x",
    "imgSrcDesktop2x": "img/photo-1-desktop-2x.jpg 2x",
    "imgSrcMobileWebp": "img/photo-1-mobile-1x.webp 1x",
    "imgSrcMobileWebp2x": "img/photo-1-mobile-2x.webp 2x",
    "imgSrcTabletWebp": "img/photo-1-tablet-1x.webp 1x",
    "imgSrcTabletWebp2x": "img/photo-1-tablet-2x.webp 2x",
    "imgSrcDesktopWebp": "img/photo-1-desktop-1x.webp 1x",
    "imgSrcDesktopWebp2x": "img/photo-1-desktop-2x.webp 2x",
    "imgSrcFullSize": null,
    "authorName": "Левон",
    "postDate": "2018-07-07",
    "postContent": "Вчера он на луну летал, сегодня в руки к нам попал.",
    "likeAmount": 356
  },
  {
    "postId": 1,
    "imgSrcMobile": "img/photo-2-mobile-1x.jpg",
    "imgSrcMobile2x": "img/photo-2-mobile-2x.jpg 2x",
    "imgSrcTablet": "img/photo-2-tablet-1x.jpg 1x",
    "imgSrcTablet2x": "img/photo-2-tablet-2x.jpg 2x",
    "imgSrcDesktop": "img/photo-2-desktop-1x.jpg 1x",
    "imgSrcDesktop2x": "img/photo-2-desktop-2x.jpg 2x",
    "imgSrcMobileWebp": "img/photo-2-mobile-1x.webp 1x",
    "imgSrcMobileWebp2x": "img/photo-2-mobile-2x.webp 2x",
    "imgSrcTabletWebp": "img/photo-2-tablet-1x.webp 1x",
    "imgSrcTabletWebp2x": "img/photo-2-tablet-2x.webp 2x",
    "imgSrcDesktopWebp": "img/photo-2-desktop-1x.webp 1x",
    "imgSrcDesktopWebp2x": "img/photo-2-desktop-2x.webp 2x",
    "imgSrcFullSize": null,
    "authorName": "Антон",
    "postDate": "2018-07-07",
    "postContent": "Соседи будут рады!",
    "likeAmount": 666
  },
  {
    "postId": 2,
    "imgSrcMobile": "img/photo-3-mobile-1x.jpg",
    "imgSrcMobile2x": "img/photo-3-mobile-2x.jpg 2x",
    "imgSrcTablet": "img/photo-3-tablet-1x.jpg 1x",
    "imgSrcTablet2x": "img/photo-3-tablet-2x.jpg 2x",
    "imgSrcDesktop": "img/photo-3-desktop-1x.jpg 1x",
    "imgSrcDesktop2x": "img/photo-3-desktop-2x.jpg 2x",
    "imgSrcMobileWebp": "img/photo-3-mobile-1x.webp 1x",
    "imgSrcMobileWebp2x": "img/photo-3-mobile-2x.webp 2x",
    "imgSrcTabletWebp": "img/photo-3-tablet-1x.webp 1x",
    "imgSrcTabletWebp2x": "img/photo-3-tablet-2x.webp 2x",
    "imgSrcDesktopWebp": "img/photo-3-desktop-1x.webp 1x",
    "imgSrcDesktopWebp2x": "img/photo-3-desktop-2x.webp 2x",
    "imgSrcFullSize": null,
    "authorName": "Борис",
    "postDate": "2018-07-07",
    "postContent": "Здесь могла быть ваша цитата о высоком и вечном.",
    "likeAmount": 215
  },
  {
    "postId": 3,
    "imgSrcMobile": "img/photo-4-mobile-1x.jpg",
    "imgSrcMobile2x": "img/photo-4-mobile-2x.jpg 2x",
    "imgSrcTablet": "img/photo-4-tablet-1x.jpg 1x",
    "imgSrcTablet2x": "img/photo-4-tablet-2x.jpg 2x",
    "imgSrcDesktop": "img/photo-4-desktop-1x.jpg 1x",
    "imgSrcDesktop2x": "img/photo-4-desktop-2x.jpg 2x",
    "imgSrcMobileWebp": "img/photo-4-mobile-1x.webp 1x",
    "imgSrcMobileWebp2x": "img/photo-4-mobile-2x.webp 2x",
    "imgSrcTabletWebp": "img/photo-4-tablet-1x.webp 1x",
    "imgSrcTabletWebp2x": "img/photo-4-tablet-2x.webp 2x",
    "imgSrcDesktopWebp": "img/photo-4-desktop-1x.webp 1x",
    "imgSrcDesktopWebp2x": "img/photo-4-desktop-2x.webp 2x",
    "imgSrcFullSize": null,
    "authorName": "Сергей",
    "postDate": "2018-07-07",
    "postContent": "Самая кубанская в мире!",
    "likeAmount": 4
  },
  {
    "postId": 4,
    "imgSrcMobile": "img/photo-5-mobile-1x.jpg",
    "imgSrcMobile2x": "img/photo-5-mobile-2x.jpg 2x",
    "imgSrcTablet": "img/photo-5-tablet-1x.jpg 1x",
    "imgSrcTablet2x": "img/photo-5-tablet-2x.jpg 2x",
    "imgSrcDesktop": "img/photo-5-desktop-1x.jpg 1x",
    "imgSrcDesktop2x": "img/photo-5-desktop-2x.jpg 2x",
    "imgSrcMobileWebp": "img/photo-5-mobile-1x.webp 1x",
    "imgSrcMobileWebp2x": "img/photo-5-mobile-2x.webp 2x",
    "imgSrcTabletWebp": "img/photo-5-tablet-1x.webp 1x",
    "imgSrcTabletWebp2x": "img/photo-5-tablet-2x.webp 2x",
    "imgSrcDesktopWebp": "img/photo-5-desktop-1x.webp 1x",
    "imgSrcDesktopWebp2x": "img/photo-5-desktop-2x.webp 2x",
    "imgSrcFullSize": null,
    "authorName": "Максим",
    "postDate": "2018-07-07",
    "postContent": "Где снег-то?",
    "likeAmount": 150
  },
  {
    "postId": 5,
    "imgSrcMobile": "img/photo-6-mobile-1x.jpg",
    "imgSrcMobile2x": "img/photo-6-mobile-2x.jpg 2x",
    "imgSrcTablet": "img/photo-6-tablet-1x.jpg 1x",
    "imgSrcTablet2x": "img/photo-6-tablet-2x.jpg 2x",
    "imgSrcDesktop": "img/photo-6-desktop-1x.jpg 1x",
    "imgSrcDesktop2x": "img/photo-6-desktop-2x.jpg 2x",
    "imgSrcMobileWebp": "img/photo-6-mobile-1x.webp 1x",
    "imgSrcMobileWebp2x": "img/photo-6-mobile-2x.webp 2x",
    "imgSrcTabletWebp": "img/photo-6-tablet-1x.webp 1x",
    "imgSrcTabletWebp2x": "img/photo-6-tablet-2x.webp 2x",
    "imgSrcDesktopWebp": "img/photo-6-desktop-1x.webp 1x",
    "imgSrcDesktopWebp2x": "img/photo-6-desktop-2x.webp 2x",
    "imgSrcFullSize": null,
    "authorName": "Надежда",
    "postDate": "2018-07-07",
    "postContent": "Всем GM и взаимные лайки!",
    "likeAmount": 2560
  }
]`;

export default jsonPosts;