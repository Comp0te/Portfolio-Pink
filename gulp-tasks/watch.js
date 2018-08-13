"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();

module.exports = () => {
  return () => {
    gulp.watch("sass/**/*.scss", gulp.series("style"));
    gulp.watch(["*.html", "htmltemplates/*.html"], gulp.series("html"));
    gulp.watch(["fonts/**/*", "img/*"], gulp.series("assets"));
    gulp.watch("img/svg-sprite/*", gulp.series("svg-sprite"));
    gulp.watch("favicon/*.*", gulp.series("favicon"));

    browserSync.init({
      server: "build",
      ui: false,
      notify: false,
      open: true,
      cors: true
    });

    browserSync.watch("build/**/*.*").on("change", browserSync.reload);
  };
};
