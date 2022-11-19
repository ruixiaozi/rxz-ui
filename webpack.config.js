const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    // 新增一个 @ 指向 packages 目录, 方便示例代码中使用
    config.resolve.alias.set('@', path.resolve('packages'));
    // 内置的svg处理排除指定目录下的文件
    const iconsDir = path.resolve('packages/icons');
    config.module.rule('svg').exclude.add(iconsDir).end();
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/u)
      .include.add(iconsDir)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]',
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [
          {
            name: 'removeAttrs',
            params: { attrs: 'fill' },
          },
          'removeDesc',
          'removeDoctype',
          'cleanupAttrs',
          'removeComments',
          'removeXMLProcInst',
          'removeUselessDefs',
          'removeEmptyContainers',
        ],
      });

    return {
      devtool: 'source-map',
    };
  },
};
