const webpackConfig = require('./webpack.config');

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      // 入口
      entry: 'example/main.ts',
      // 模板
      template: 'public/index.html',
      // 输出文件
      filename: 'index.html',
    },
  },
  // 扩展 webpack 配置
  chainWebpack: webpackConfig.chainWebpack,

};
