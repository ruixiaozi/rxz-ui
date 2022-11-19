### Icon图标

<IconDisplay></IconDisplay>

### 添加自定义图标

##### 方式一：项目使用webpack

1. 制作 `svg` 格式的图标，并放在一个指定的目录下（svg的文件名将作为icon的名称），例如：

   ```
   ...
   src
     - icons
     	- test.svg
     	- test2.svg
   ...
   ```

2. 安装 `svg-sprite-loader` 与 `svgo-loader` ：

   ```bash
   npm i svg-sprite-loader svgo-loader -D
   ```

3. 修改 `webpack` 配置，以下是是 `vue-cli` 的配置方式，修改`vue.config.js` ：

   ```javascript
   const path = require('path');
   module.exports = {
     ...
     // 扩展 webpack 配置
     chainWebpack: (config) => {
       // src/icons替换成你的文件夹
       const iconsDir = path.resolve('src/icons');
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
   
     },
   };
   ```

#### 方式二：向body标签添加 `svg-sprite` 形式的svg标签：

```html
<html>
  ...
  <body>
  ...
  	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0" aria-hidden="true">
  	  <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="add">
  	  	...
  	  </symbol>
  	</svg>
  ...
  </body>
</html>
```

其中的 `symbol` 的 `id` 就算icon的名称

