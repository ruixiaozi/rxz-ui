import path from 'path';

export default {
  chainWebpack: (config: any) => {
    // 新增一个 @ 指向 packages 目录, 方便示例代码中使用
    config.resolve.alias.set('@', path.resolve('packages'));
    const iconsDir = path.resolve('packages/icons');
    // 内置的svg处理排除指定目录下的文件
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
      .before('svg-sprite-loader')
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [
          {
            name: 'removeAttrs',
            params: { attrs: ['fill', 'stroke'] },
          },
          'removeDesc',
          'removeDoctype',
          'cleanupAttrs',
          'removeComments',
          'removeXMLProcInst',
          'removeUselessDefs',
          'removeEmptyContainers',
        ],
      })
      .end();

    return {
      devtool: 'cheap-module-source-map',
    };
  },
};
