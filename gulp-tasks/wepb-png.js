"use strict";

const gulp = require("gulp");
const webp = require("gulp-webp");

module.exports = () => {
  return () => {
    return gulp.src("img/**/*.png")
    .pipe(webp({
      lossless: true
    }))
    .pipe(gulp.dest("img/"));
  };
};
