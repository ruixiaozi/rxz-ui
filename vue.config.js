const webpackConfig = require('./webpack.config');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: webpackConfig.chainWebpack,
})
