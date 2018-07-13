"use strict";

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";
const path = require("path");

module.exports = {
  context: __dirname + "/ts/",
  entry: {
    index: "./index.ts",
    photo: "./photo.ts",
    contest: "./contest.ts"
  },

  output: {
    path: __dirname + "/build/js/",
    filename: "[name].js",
    library: "app",
    pathinfo: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  watch: isDevelopment,

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },

  devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,

  mode: "none",

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3
        }
      }
    },
    namedModules: isDevelopment,
    namedChunks: isDevelopment,
    minimize: !isDevelopment
  }
};
