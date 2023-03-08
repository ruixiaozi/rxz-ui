# useRxzPopover 弹出框

## 介绍

其他弹出窗的最基础封装，包括创建、打开、显示、隐藏、移除。

引入use：

```ts
import { useRxzPopover } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzPopover();
```

## API

### 1. createPopover

  方法签名：

  ```ts
  enum RXZ_POPOVER_POS_E {
    topleft='topleft',
    top='top',
    topright='topright',
    lefttop='lefttop',
    left='left',
    leftbottom='leftbottom',
    bottomleft='bottomleft',
    bottom='bottom',
    bottomright='bottomright',
    righttop='righttop',
    right='right',
    rightbottom='rightbottom',
  }
  enum RXZ_POPOVER_TYPE_E {
    WHITE='white',
    BLACK='black',
  }
  interface RxzPopoverOptions {
    // 唯一标识（建议用UUID，或者第一次创建不传入）
    key?: string;
    // 与宿主元素的距离，默认4
    gap?: number;
    // 默认为RXZ_POPOVER_TYPE_E.WHITE
    type?: RXZ_POPOVER_TYPE_E;
    // 是否显示箭头，默认为true
    showArrow?: boolean;
    // 是否显示圆角，默认true
    radius?: boolean;
    // 是否开启内边距，默认true
    padding?: boolean;
    // 内容，可以是字符串、组件、虚拟NODE、虚拟dom数组
    content?: string | Component | VNode | VNode[];
    // 组件的props（事件用onXxx）
    contentCntProps?: any;
    // 是否允许点击外部关闭，默认true
    allowOuterClose?: boolean;
    // 允许自动回收，默认false
    allowAutoRemove?: boolean;
    // 事件处理器
    events?: { [key: string]: (...args: any[]) => any };
  }

  /**
   * 创建一个弹出框，但不显示，需要手动显示
   * @param sourceEl 宿主元素
   * @param pos 相对于宿主元素的位置
   * @param options 选项
   * @returns
   */
  function createPopover(sourceEl: Element | ComponentPublicInstance, pos: RXZ_POPOVER_POS_E, options?: RxzPopoverOptions): string | undefined;
  ```

### 2. openPopover

  方法签名：

  ```ts
  /**
   * 创建并显示一个弹出框
   * @param sourceEl 宿主元素
   * @param pos 相对于宿主元素的位置
   * @param options 选项
   * @returns
   */
  function openPopover(sourceEl: Element | ComponentPublicInstance, pos: RXZ_POPOVER_POS_E, options?: RxzPopoverOptions): string | undefined;
  ```

### 3. showPopover

  方法签名：

  ```ts
  /**
   * 显示弹出框
   * @param key 弹出框唯一key
   * @returns
   */
  function showPopover(key: string): void;
  ```


### 4. hiddenPopover

  方法签名：

  ```ts
  /**
   * 隐藏弹出框
   * @param key 弹出框唯一key
   * @returns
   */
  function hiddenPopover(key: string): void;
  ```

### 5. removePopover

  方法签名：

  ```ts
  /**
   * 移除弹出框
   * @param key 弹出框唯一key
   * @returns
   */
  function removePopover(key: string): void;
  ```

### 6. getPopoverVNode

  方法签名：

  ```ts
  /**
   * 根据key获取popover的虚拟node
   * @param key 唯一标识
   * @returns
   */
  function getPopoverVNode(key: string): VNode;
  ```

## 使用案例

<TestRxzPopover></TestRxzPopover>

---

```vue
<template>
  <rxz-button ref="bt" @click="open()">打开Popover</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components';
import { RXZ_POPOVER_POS_E } from '@/components/template';
import { useRxzPopover } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const bt = ref<InstanceType<typeof RxzButton>>();
const content = ref(1);
const open = () => {
  useRxzPopover().openPopover(bt.value!, RXZ_POPOVER_POS_E.bottomright, {
    content: String(content.value++),
    showArrow: false,
    gap: 0,
    key: 'rxz-test-1',
    allowOuterClose: true,
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 1. 虚拟dom

<TestRxzPopoverExp1></TestRxzPopoverExp1>

---

```vue
<template>
  <rxz-button ref="bt" @click="open()">打开Popover</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components';
import { RXZ_POPOVER_POS_E } from '@/components/template';
import { useRxzPopover } from '@/use';
import { ref, h } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const bt = ref<InstanceType<typeof RxzButton>>();
let key: string | undefined = '';
const open = () => {
  key = useRxzPopover().openPopover(bt.value!, RXZ_POPOVER_POS_E.bottomright, {
    content: h(RxzButton as any, {
    type: 'primary',
    onClick: () => {
      console.log('click button');
    }
  }, '点击'),
  showArrow: false,
  key,
  allowOuterClose: true,
  })
}
</script>

<style lang="scss" scoped>

</style>

```