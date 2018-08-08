"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const htmlmin = require("gulp-htmlmin");

module.exports = () => {
  return () => {
    return gulp.src("*.html")
    .pipe(plumber({
      errorHandler: notify.onError({
        title: "html",
        message: "Error: <%= error.message %>"
      })
    }))
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      preserveLineBreaks: true
    }))
    .pipe(gulp.dest("build/"))
  };
};
