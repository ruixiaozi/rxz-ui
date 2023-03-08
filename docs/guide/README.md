# 开始使用

## npm 安装

使用 npm 的方式安装：

``` shell
npm install rxz-ui --save
```

## 引入RxzUI

在 main.js/main.ts 中写入以下内容：

``` typescript
import { createApp } from 'vue'
import { RxzUI, RxzOption } from 'rxz-ui';
import 'rxz-ui/lib/rxz-ui.css';
import App from './App.vue';

const app = createApp(App);
use(RxzUI, {
  i18n: {},
  dataMaps: {},
  isSSR: false,
} as RxzOption);
app.mount('#app');
```

RxzOption的定义：
```
interface RxzOption {
  i18n?: any;
  dataMaps?: RxzDataMap;
  // 默认false，用于兼容服务端渲染，如果为true，需要使用到dom操作的会被屏蔽
  isSSR?: boolean;
}
```

## 引入提示（Volar）

1. vscode安装Volar扩展
2. 引入类型文件(tsconfig.json)：

``` json
{
  ...
  "types": [
    "webpack-env", 
    "rxz-ui/global"
  ],
  ...
}
```

## Hello World

在模板文件中使用：

---

<rxz-button type="primary" bgColor="#ffcccc" hoverBgColor="#ffffcc">Hello World</rxz-button>

``` vue
<rxz-button type="primary" bgColor="#ffcccc" hoverBgColor="#ffffcc">Hello World</rxz-button>
```

