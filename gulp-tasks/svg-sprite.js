"use strict";

const gulp = require("gulp");
const svgstore = require("gulp-svgstore");
const rename = require("gulp-rename");

module.exports = () => {
  return () => {
    return gulp.src("img/svg-sprite/**/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
  };
};
