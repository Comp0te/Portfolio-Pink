"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const w3c = require("gulp-w3cjs");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const gulpif = require("gulp-if");
const notify = require("gulp-notify");
const webpack = require("webpack-stream");
const named = require('vinyl-named');
const path = require('path');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";

gulp.task("clean", function() {
  return del("build/**");
});

gulp.task("assets", function() {
  return gulp
  .src([
    "fonts/**/*.{woff,woff2}",
    "img/*.{jpg,png,svg,webp}"
  ], {
    since: gulp.lastRun("assets"),
    base: "."
  })
  .pipe(gulp.dest("build"))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task("style", function() {
  return gulp
  .src("sass/style.scss")
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
  .pipe(gulpif(isDevelopment, gulp.dest("build/css")))
  .pipe(postcss([
    cssnano()
  ]))
  .pipe(rename("style.min.css"))
  .pipe(gulpif(isDevelopment, sourcemaps.write(".")))
  .pipe(gulp.dest("build/css"))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task("html", function() {
  return gulp
  .src("*.html")
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
  .pipe(browserSync.reload({stream: true}));
});

gulp.task("sprite", function() {
  return gulp
  .src("img/svg-sprite/**/*.svg")
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task("webpack", function(callback) {
  let options = {
    watch:   isDevelopment,
    devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module:  {
      loaders: [{
        test: /\.tsx?$/,
        include: path.join(__dirname, "ts"),
        loader: "ts-loader"
      }]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
  };

  if (!isDevelopment) {
    options.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unsafe: true
      }
    }));
  };

  let firstBuildReady = false;

  function done(err, stats) {
    firstBuildReady = true;

    if(err) {
      return;
    }

    gulplog[stats.hasErrors() ? "error" : "info"](stats.toString({
      colors: true
    }));
  }

  return gulp.src("ts/*.ts")
    .pipe(plumber({
      errorHandler: notify.onError({
        title: "webpack",
        message: "Error: <%= error.message %>"
      })
    }))
    .pipe(named())
    .pipe(webpack(options, null, done))
    .pipe(gulp.dest("build/"))
    .on("data", function() {
      if (firstBuildReady) {
        callback();
      }
    });
});

gulp.task("watch", function() {
  gulp.watch("sass/**/*.scss", gulp.series("style"));
  gulp.watch(["*.html", "htmltemplates/*.html"], gulp.series("html"));
  gulp.watch(["fonts/**/*", "img/*"], gulp.series("assets"));
  gulp.watch("img/svg-sprite/*", gulp.series("sprite"));
  browserSync.init({
    server: "build",
    ui: false,
    notify: false,
    open: true,
    cors: true
  });
});

gulp.task ("build", gulp.series("clean", gulp.parallel("assets", "style", "html", "sprite", "webpack")));

gulp.task ("dev", gulp.series("build", "watch"));

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
  .pipe(gulp.dest("img"));
});

gulp.task("validate", function() {
  return gulp
  .src("build/*.html")
  .pipe(w3c())
  .pipe(w3c.reporter());
});
