"use strict";

const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
const gulputil = require("gulp-util");

module.exports = () => {
  return (done) => {
    const statsLog = {
      colors: true,
      reasons: true
    };

    webpack(webpackConfig, onComplete);

    function onComplete(error, stats) {
      if (error) {
        onError(error);
      } else if (stats.hasErrors()) {
        onError(stats.toString(statsLog));
      } else {
        onSuccess(stats.toString(statsLog));
      }
    }

    function onError(error) {
      let formatedError = new gulputil.PluginError("webpack", error);
      done(formatedError);
    }

    function onSuccess(detailInfo) {
      gulputil.log("[webpack]", detailInfo);
      done();
    }
  };
};
