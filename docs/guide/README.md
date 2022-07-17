# 开始使用

## npm 安装

使用 npm 的方式安装：

```
npm i rxz-ui -S
```

## 引入RxzUI

在 main.js/main.ts 中写入以下内容：

```
import { createApp } from 'vue'
import { RxzUI } from 'rxz-ui';
import 'rxz-ui/lib/rxz-ui.css';
import App from './App.vue';

const app = createApp(App);
app.use(RxzUI);
app.mount('#app');
```

## Hello World

在模板文件中使用：

---

<rxz-button type="primary" bgColor="#ffcccc" hoverBgColor="#ffffcc">Hello World</rxz-button>

```
<rxz-button type="primary" bgColor="#ffcccc" hoverBgColor="#ffffcc">Hello World</rxz-button>
```

