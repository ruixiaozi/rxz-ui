# $dataMap 映射转换

同 [useRxzDataMap](../use/base/userxzdatamap.html) 的 `getDataMapLabel` 方法。

---

<div>{{ $dataMap('TESK_STATUS', '0') }}</div>
<div>{{ $dataMap('TESK_STATUS', '1') }}</div>

----

在引入的时候添加选项

```ts
import { createApp } from 'vue'
import { RxzUI, RxzOption } from 'rxz-ui';
import 'rxz-ui/lib/rxz-ui.css';
import App from './App.vue';

const app = createApp(App);
app.use(RxzUI, {
  dataMaps: {
    TESK_STATUS: {
      0: {
        lable: '成功',
        value: 0,
      },
      1: {
        lable: '失败',
        value: 1,
      },
    },
  },
} as RxzOption);
app.mount('#app');
```

```vue
<template>
  <div>{{ $dataMap('TESK_STATUS', '0') }}</div>
  <div>{{ $dataMap('TESK_STATUS', '1') }}</div>
</template>
```

