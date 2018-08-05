"use strict";

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";

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

  devtool: isDevelopment ? 'cheap-module-inline-source-map' : false,

  mode: "none",

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          minSize: 10
        }
      }
    },
    namedModules: isDevelopment,
    namedChunks: isDevelopment,
    minimize: !isDevelopment
  }
};
