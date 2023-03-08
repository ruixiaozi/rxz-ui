# useRxzLoading 全局加载

## 介绍

管理全局加载显示与隐藏。

引入use：

```ts
import { useRxzLoading } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzLoading();
```

## API

### 1. showLoading

  方法签名：

  ```ts
  interface RxzLoadingOptions {
    // loading文本
    text?: string;
    // 内容，可以是字符串、组件、虚拟NODE；替换掉默认的loading
    content?: string | Component | VNode;
    // 组件的props（事件用onXxx）
    contentCntProps?: any;
    // 遮罩背景颜色，（默认值 #00000032）
    bgColor?: string;
    // 内容文字颜色，（默认值 #ffffff）
    color?: string;
  }
  /**
   * 显示loading
   * @param options loading选项
   */
  function showLoading(options?: RxzLoadingOptions): void;
  ```

### 2. hideLoading

  方法签名：

  ```ts
  /**
   * 隐藏loading
   */
  function hideLoading(): void;
  ```

## 使用案例

<TestRxzLoading></TestRxzLoading>

---

```vue
<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>

<script setup lang="ts">
import { useRxzLoading } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const { showLoading, hideLoading } = useRxzLoading();
const handleClick = () => {
  showLoading();
  setTimeout(() => {
    hideLoading();
  }, 1000);
}
</script>

<style lang="scss" scoped>

</style>
```

### 1. loading文字


<TestRxzLoadingExp1></TestRxzLoadingExp1>

---

```vue
<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>

<script setup lang="ts">
import { useRxzLoading } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const { showLoading, hideLoading } = useRxzLoading();
const handleClick = () => {
  showLoading({
    text: 'Loading',
  });
  setTimeout(() => {
    hideLoading();
  }, 1000);
}
</script>

<style lang="scss" scoped>

</style>

```

### 2. 自定义颜色


<TestRxzLoadingExp2></TestRxzLoadingExp2>

---

```vue
<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>

<script setup lang="ts">
import { useRxzLoading } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const { showLoading, hideLoading } = useRxzLoading();
const handleClick = () => {
  showLoading({
    bgColor: '#40e0d032',
    color: '#ff1493'
  });
  setTimeout(() => {
    hideLoading();
  }, 1000);
}
</script>

<style lang="scss" scoped>

</style>

```

### 3. 虚拟NODE内容


<TestRxzLoadingExp3></TestRxzLoadingExp3>

---

```vue
<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>

<script setup lang="ts">
import { useRxzLoading } from '@/use';
import { h } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const { showLoading, hideLoading } = useRxzLoading();
const handleClick = () => {
  showLoading({
    content: h('div', 'vnode Loading...')
  });
  setTimeout(() => {
    hideLoading();
  }, 1000);
}
</script>

<style lang="scss" scoped>

</style>

```