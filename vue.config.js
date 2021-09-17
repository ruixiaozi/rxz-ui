module.exports = {
  publicPath:"/",
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  css: {
    extract: true,
  },

  lintOnSave: false
}
