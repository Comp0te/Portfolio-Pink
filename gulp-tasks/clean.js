"use strict";

const del = require("del");

module.exports = () => {
  return () => {
    return del("build/**");
  };
};
