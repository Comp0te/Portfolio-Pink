"use strict";

const gulp = require("gulp");

module.exports = () => {
  return () => {
    return gulp.src([
      "favicon/*.*"
    ], {
        since: gulp.lastRun("favicon"),
        base: "favicon/"
      })
      .pipe(gulp.dest("build/"))
  };
};
