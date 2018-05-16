"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require("browser-sync").create();
var cssnano = require("cssnano");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var w3c = require("gulp-w3cjs");
var htmlmin = require("gulp-htmlmin");
var sequence = require("run-sequence");
var del = require("del");

gulp.task("build", function(done) {
  sequence("clean", "copy", "style", "html", "sprite", done);
});

gulp.task("clean", function() {
  return del("build/**");
});

gulp.task("copy", function() {
  return gulp
    .src([
      "fonts/**/*.{woff,woff2}",
      "img/**",
      "js/**"
    ], {
      base: "."
    })
    .pipe(gulp.dest("build"));
});

gulp.task("style", function() {
  return gulp
    .src("sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(postcss([
      cssnano()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write("/maps"))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("html", function() {
  return gulp
    .src("*.html")
    .pipe(plumber())
    .pipe(posthtml([
    include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      preserveLineBreaks: true
    }))
    .pipe(gulp.dest("build/"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("sprite", function() {
  return gulp
    .src("img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("serve", ["build"], function() {
  browserSync.init({
    server: "build",
    ui: false,
    notify: false,
    open: true,
    cors: true
  });
  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch(["*.html", "htmltemplates/*.html"], ["html"])
});

gulp.task("image", function() {
  return gulp
    .src("img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
          ]
        })
      ]))
    .pipe(gulp.dest("img"));
});

gulp.task("webp", function() {
  return gulp
    .src("img/**/*.{jpg,png}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("img/webp"));
});

gulp.task("validate", function() {
  return gulp
    .src("build/*.html")
    .pipe(w3c())
    .pipe(w3c.reporter());
});
