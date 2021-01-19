/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require("./base.config.js");
const { merge } = require("webpack-merge");

const config = merge(baseConfig, {
  mode: "production",
});
module.exports = config;
