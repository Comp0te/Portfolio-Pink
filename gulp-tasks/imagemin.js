"use strict";

const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

module.exports = () => {
  return () => {
    return gulp.src("img/**/*.{jpg,jpeg,png,svg}")
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {cleanupIDs: false},
          {removeDimensions: false}
        ]
      })
    ]))
    .pipe(gulp.dest("img/"));
  };
};
