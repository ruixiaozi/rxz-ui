# useRxzMessageBox 消息框

## 介绍

打开4种状态的消息框。

引入use：

```ts
import { useRxzMessageBox } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzMessageBox();
```

## API

### 1. success

  方法签名：

  ```ts
  interface RxzMessageBoxOptions {
    // 内容宽度
    width?: string;
    // 是否显示关闭按钮
    closable?: boolean;
    // 是否允许点击遮罩关闭 （默认true）
    allowOuterClose?: boolean;
    // 标题，字符串
    title?: string ;
    // 是否隐藏标题图标（默认false）
    hiddenIcon?: boolean;
    // 自定义icon名称
    icon?: string;
    iconColor?: string;
    // 内容，可以是字符串、组件、虚拟NODE
    content?: string | Component | VNode;
    // 组件的props（事件用onXxx）
    contentCntProps?: any;
    // 打开关闭的过度效果 (默认值为bounce)
    transition?: 'opacity' | 'bounce';
    // 是否允许拖拽 (默认值为false)
    allowDrag?: boolean;
    // 窗口关闭回调，返回false，则不关闭
    onClose?: () => any;
    // 确认按钮
    hiddenConfirm?: boolean;
    onConfirm?: () => void;
    confirmText?: string;
    // 取消按钮
    hiddenCancel?: boolean;
    onCancel?: () => void;
    cancelText?: string;
  }

  /**
   * 成功消息
   * @param options 消息框选项
   */
  function success(options?: RxzMessageBoxOptions): string | undefined;
  ```

### 2. information

  方法签名：

  ```ts
  /**
   * 通知消息
   * @param options 消息框选项
   */
  function information(options?: RxzMessageBoxOptions): string | undefined;
  ```

### 3. warning

  方法签名：

  ```ts
  /**
   * 警告消息
   * @param options 消息框选项
   */
  function warning(options?: RxzMessageBoxOptions): string | undefined;
  ```

### 4. error

  方法签名：

  ```ts
  /**
   * 错误消息
   * @param options 消息框选项
   */
  function error(options?: RxzMessageBoxOptions): string | undefined;
  ```

## 使用案例

<TestRxzMessageBox></TestRxzMessageBox>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开MessageBox</rxz-button>
</template>

<script setup lang="ts">
import { useRxzMessageBox } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzMessageBox().success();
}
</script>

<style lang="scss" scoped>

</style>

```

### 1. 不同类型

<TestRxzMessageBoxExp1></TestRxzMessageBoxExp1>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpenSuccess()">打开Success</rxz-button>
  <rxz-button ref="bt" @click="handleOpenInfomartion()">打开Infomartion</rxz-button>
  <rxz-button ref="bt" @click="handleOpenWarning()">打开Warning</rxz-button>
  <rxz-button ref="bt" @click="handleOpenError()">打开Error</rxz-button>
</template>

<script setup lang="ts">
import { useRxzMessageBox } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpenSuccess = () => {
  useRxzMessageBox().success();
}
const handleOpenInfomartion = () => {
  useRxzMessageBox().information();
}
const handleOpenWarning = () => {
  useRxzMessageBox().warning();
}
const handleOpenError = () => {
  useRxzMessageBox().error();
}
</script>

<style lang="scss" scoped>

</style>

```

### 2. 异步回调

<TestRxzMessageBoxExp2></TestRxzMessageBoxExp2>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开MessageBox</rxz-button>
</template>

<script setup lang="ts">
import { useRxzMessageBox } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzMessageBox().success({
    onConfirm: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(null);
        }, 1000)
      })
    }
  });
}
</script>

<style lang="scss" scoped>

</style>

```

### 3. 回调失败

<TestRxzMessageBoxExp3></TestRxzMessageBoxExp3>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开MessageBox</rxz-button>
</template>

<script setup lang="ts">
import { useRxzMessageBox } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzMessageBox().success({
    onConfirm: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(null);
        }, 1000)
      })
    }
  });
}
</script>

<style lang="scss" scoped>

</style>

```