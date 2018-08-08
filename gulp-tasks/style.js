"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const gulpif = require("gulp-if");
const notify = require("gulp-notify");

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";

module.exports = () => {
  return () => {
    return gulp.src("sass/style.scss")
    .pipe(plumber({
      errorHandler: notify.onError({
        title: "style",
        message: "Error: <%= error.message %>"
      })
    }))
    .pipe(gulpif(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(postcss([
      cssnano()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(gulpif(isDevelopment, sourcemaps.write(".")))
    .pipe(gulp.dest("build/css"))
  };
};
