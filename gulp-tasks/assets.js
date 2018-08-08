"use strict";

const gulp = require("gulp");

module.exports = () => {
  return () => {
    return gulp.src([
      "fonts/**/*.{woff,woff2}",
      "img/*.{jpg,png,svg,webp}"
    ], {
        since: gulp.lastRun("assets"),
        base: "."
      })
      .pipe(gulp.dest("build/"))
  };
};
