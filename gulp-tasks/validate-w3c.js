"use strict";

const gulp = require("gulp");
const w3c = require("gulp-w3cjs");

module.exports = () => {
  return () => {
    return gulp.src("build/*.html")
    .pipe(w3c())
    .pipe(w3c.reporter())
    .on("finish", () => {
      console.log("W3C validation succeeded")
    });
  };
};
