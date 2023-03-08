# useRxzModal 模态框

## 介绍

管理带 `title`, `content`, `footer` 的模态框，包括创建、关闭操作。

引入use：

```ts
import { useRxzModal } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzModal();
```

## API

### 1. create

  方法签名：

  ```ts
  interface RxzModalOptions {
    // 内容宽度
    width?: string;
    // 是否显示关闭按钮
    closable?: boolean;
    // 是否允许点击遮罩关闭
    allowOuterClose?: boolean;
    // 标题，可以是字符串、组件、虚拟NODE
    title?: string | Component | VNode;
    // 组件的props（事件用onXxx）
    titleCntProps?: any;
    // 内容，可以是字符串、组件、虚拟NODE
    content?: string | Component | VNode;
    // 组件的props（事件用onXxx）
    contentCntProps?: any;
    // 底部，可以是字符串、组件、虚拟NODE
    footer?: string | Component | VNode;
    // 组件的props（事件用onXxx）
    footerCntProps?: any;
    // 打开关闭的过度效果 (默认值为bounce，仅普通弹窗有效)
    transition?: 'opacity' | 'bounce';
    // 是否允许拖拽 (默认值为false)
    allowDrag?: boolean;
    // 是否为抽屉， (默认值为false)
    drawer?: boolean;
    // 窗口关闭回调，返回false，则不关闭
    onClose?: () => any;
  }

  /**
   * 创建modal
   * @param options modal选项
   * @returns string modal的key
   */
  function create(options?: RxzModalOptions): string | undefined;
  ```

### 2. close

  方法签名：

  ```ts
  /**
   * 关闭modal
   * @param key modal的key
   */
  function close(key: string): void;
  ```

### 3. closeAll

  方法签名：

  ```ts
  /**
   * 关闭所有modal
   */
  function closeAll(): void;
  ```

## 使用案例

<TestRxzModal></TestRxzModal>

---

```vue
<template>
   <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzModal().create()
}
</script>

<style lang="scss" scoped>

</style>

```

### 1. 宽度、不显示关闭

<TestRxzModalExp1></TestRxzModalExp1>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    width: '300px',
    closable: false
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 2. 不允许点击遮罩关闭、关闭回调

<TestRxzModalExp2></TestRxzModalExp2>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    allowOuterClose: false,
    onClose: () => {
      console.log('close');
    }
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 3. 过度效果

<TestRxzModalExp3></TestRxzModalExp3>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen('opacity')">过度效果opacity</rxz-button>
  <rxz-button ref="bt" @click="handleOpen('bounce')">过度效果bounce</rxz-button>
</template>

<script setup lang="ts">
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = (transition: 'opacity' | 'bounce') => {
  useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    transition
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 4. 组件内容、嵌套Modal

<TestRxzModalExp4></TestRxzModalExp4>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components/base';
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpenSub = () => {
  useRxzModal().create({
    title: '我是子modal',
    content: '我是子modal内容',
    width: '300px'
  })
}
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: RxzButton,
    contentCntProps: {
      onClick: () => {
        handleOpenSub();
      }
    }
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 5. 虚拟NODE内容、嵌套Modal、关闭所有

<TestRxzModalExp5></TestRxzModalExp5>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components/base';
import { useRxzModal } from '@/use';
import { h } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpenSub = () => {
  useRxzModal().create({
    title: '我是子modal',
    content: h(RxzButton, {
      onClick: () => {
        useRxzModal().closeAll();
      }
    }, '关闭所有'),
    width: '300px'
  })
}
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: h(RxzButton, {
      onClick: () => {
        handleOpenSub();
      }
    }, '打开子modal')
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 6. 拖动

<TestRxzModalExp6></TestRxzModalExp6>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    allowDrag: true,
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 7. 抽屉

<TestRxzModalExp7></TestRxzModalExp7>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    drawer: true,
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 8. 多级抽屉

<TestRxzModalExp8></TestRxzModalExp8>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components/base';
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpenSub = () => {
  useRxzModal().create({
    title: '我是子modal',
    content: '我是子modal内容',
    width: '300px',
    drawer: true,
  })
}
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: RxzButton,
    drawer: true,
    contentCntProps: {
      onClick: () => {
        handleOpenSub();
      }
    }
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 9. 底部信息

<TestRxzModalExp9></TestRxzModalExp9>

---

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
  <rxz-button ref="bt" @click="handleOpenDrawer()">打开抽屉</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components/base';
import { RxzFlex } from '@/components/layout';
import { useRxzModal } from '@/use';
import { h } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpenDrawer = () => {
  const key = useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    drawer: true,
    footer: h(RxzFlex as any, {
      justify: 'center',
      gutter: '8px',
    }, [h(RxzButton, {
      onClick: () => {
        if (key) {
          useRxzModal().close(key);
        }
      }
    }, {
      default: '关闭'
    })]),
  })
}
const handleOpen = () => {
  const key = useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    footer: h(RxzFlex as any, {
      justify: 'center',
      gutter: '8px',
    }, [h(RxzButton, {
      onClick: () => {
        if (key) {
          useRxzModal().close(key);
        }
      }
    }, {
      default: '关闭'
    })]),
  })
}
</script>

<style lang="scss" scoped>

</style>

```