"use strict";

const gulp = require("gulp");

function lazyRequireTask(taskName, path) {
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this);

    return task(callback);
  });
}

lazyRequireTask('clean', './gulp-tasks/clean');
lazyRequireTask('assets', './gulp-tasks/assets');
lazyRequireTask('style', './gulp-tasks/style');
lazyRequireTask('html', './gulp-tasks/html');
lazyRequireTask('svg-sprite', './gulp-tasks/svg-sprite');
lazyRequireTask('webpack', './gulp-tasks/webpack');
lazyRequireTask('watch', './gulp-tasks/watch');
lazyRequireTask('imagemin', './gulp-tasks/imagemin');
lazyRequireTask('webpJpg', './gulp-tasks/webp-jpg');
lazyRequireTask('webpPng', './gulp-tasks/webp-png');
lazyRequireTask('validateW3C', './gulp-tasks/validate-w3c');

gulp.task ("build", gulp.parallel("assets", "style", "html", "svg-sprite", "webpack"));

gulp.task ("dev", gulp.series("build", "watch"));

gulp.task("webp", gulp.parallel("webpJpg", "webpPng"));
