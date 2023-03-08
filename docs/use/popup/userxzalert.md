# useRxzAlert 提示框

## 介绍

打开4种状态的提示框。

引入use：

```ts
import { useRxzAlert } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzAlert();
```

## API

### 1. success

  方法签名：

  ```ts

  /**
   * 成功提示
   * @param content 内容
   * @param timeout 延迟时间
   */
  function success(content: string, timeout?: number): void;
  ```

### 2. information

  方法签名：

  ```ts

  /**
   * 通知提示
   * @param content 内容
   * @param timeout 延迟时间
   */
  function information(content: string, timeout?: number): void;
  ```

### 3. warning

  方法签名：

  ```ts

  /**
   * 警告提示
   * @param content 内容
   * @param timeout 延迟时间
   */
  function warning(content: string, timeout?: number): void;
  ```

### 4. error

  方法签名：

  ```ts

  /**
   * 错误提示
   * @param content 内容
   * @param timeout 延迟时间
   */
  function error(content: string, timeout?: number): void;
  ```

## 使用案例

<TestRxzAlert></TestRxzAlert>

---

```vue
<template>
  <rxz-button ref="bt" @click="show()">打开Alert</rxz-button>
</template>

<script setup lang="ts">
import { useRxzAlert } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const show = () => {
  useRxzAlert().error('参数错误');
}
</script>

<style lang="scss" scoped>

</style>
```

### 1. 不同类型

<TestRxzAlertExp1></TestRxzAlertExp1>

---

```vue
<template>
  <rxz-button ref="bt" @click="showInfo()">打开信息Alert</rxz-button>
  <rxz-button ref="bt" @click="showSuccess()">打开成功Alert</rxz-button>
  <rxz-button ref="bt" @click="showWarn()">打开警告Alert</rxz-button>
  <rxz-button ref="bt" @click="showError()">打开错误Alert</rxz-button>
</template>

<script setup lang="ts">
import { useRxzAlert } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const showInfo = () => {
  useRxzAlert().information('信息');
}
const showSuccess = () => {
  useRxzAlert().success('成功');
}
const showWarn = () => {
  useRxzAlert().warning('警告');
}
const showError = () => {
  useRxzAlert().error('错误');
}
</script>

<style lang="scss" scoped>

</style>

```

### 2. 超时时间

<TestRxzAlertExp2></TestRxzAlertExp2>

---

```vue
<template>
  <rxz-button ref="bt" @click="show()">打开Alert</rxz-button>
</template>

<script setup lang="ts">
import { useRxzAlert } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const show = () => {
  useRxzAlert().error('参数错误', 3000);
}
</script>

<style lang="scss" scoped>

</style>

```

