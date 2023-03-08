# useRxzI18n 国际化

## 介绍

使用国际化Use，可以对字符串进行国际化处理。

引入组件时添加i18n选项，可以添加自定义国际化词条：

```ts
app.use(RxzUI, {
i18n: {
  zh: {
    ...
  },
  en: {
    ...
  },
},
} as RxzOption);
```

引入use：

```ts
import { useRxzI18n } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzI18n();
```

## API

### 1. i18n

  方法签名：

  ```ts
  /**
   * 进行国际化转换
   * @param value 原始值
   * @param params 参数，用于转换替换
   * @returns 转换后的值
   */
  function i18n(value: string, params?: Record<string | number, any> | undefined) => string;
  ```

  > 说明：参数转换用于当i18n的值中有 `{}` 包括的待替换占位符时，用参数的key对应的value去替换，例如：
  > `max_custom: '最大值为{0}'` 可以用 `[10]` 进行替换，`custom_validator: '最小值为{min}'` 可以用 `{ min: 0 }`进行替换

## 使用案例

  <TestI18n></TestI18n>

  在引入UI库时添加i18n选项：

  ```ts
  import { createApp } from 'vue'
  import { RxzUI, RxzOption } from 'rxz-ui';
  import 'rxz-ui/lib/rxz-ui.css';
  import App from './App.vue';

  const app = createApp(App);
  app.use(RxzUI, {
    i18n: {
      zh: {
        custom_message: '我是自定义中文',
        max_custom: '最大值为{0}',
        custom_validator: '最小值为{min}',
      },
      en: {
        custom_message: 'I am custom English',
        max_custom: 'max value is {0}',
        custom_validator: 'min value is {min}',
      },
    },
  } as RxzOption);
  app.mount('#app');
  ```

  ```vue
  <template>
    <div>{{ i18n('custom_message') }}</div>
    <div>{{ i18n('max_custom', [10]) }}</div>
    <div>{{ i18n('custom_validator', { min: 0 }) }}</div>
  </template>

  <script setup lang="ts">
  import { useRxzI18n } from '@/use';

  defineProps<{

  }>();
  defineEmits<{

  }>();
  const { i18n } = useRxzI18n();
  console.log(i18n('custom_message'));
  </script>

  <style lang="scss" scoped>

  </style>

  ```
