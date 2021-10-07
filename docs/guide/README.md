# 开始使用

## npm 安装

使用 npm 的方式安装：

```
npm i rxz-ui -S
```

## 引入RXZ-UI

在 main.js 中写入以下内容：

```
import Vue from 'vue';
import RxzUI from 'rxz-ui';
import 'rxz-ui/lib/rxz-ui.css';
import App from './App.vue';

Vue.use(RxzUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## Hello World

在模板文件中使用：

```
<rxz-button type="primary" bgColor="red" hoverBgColor="green">Hello World</rxz-button>
```

