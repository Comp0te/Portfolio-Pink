"use strict";

const gulp = require("gulp");
const webp = require("gulp-webp");

module.exports = () => {
  return () => {
    return gulp.src("img/**/*.{jpg,jpeg}")
    .pipe(webp({
      quality: 75
    }))
    .pipe(gulp.dest("img/"));
  };
};
