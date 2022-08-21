# $RxzModal 全局模态框

<TestRxzModal></TestRxzModal>

```vue
<template>
  <rxz-button ref="bt" @click="handleAdd()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleAdd() {
      this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容'
      });
    },
  }
}
</script>
```

## Function 方法

1. create(options?: RxzModalOptions): string  
   
   + 描述：创建Modal
   
   + 参数：
     
     + options Modal选项
   
   + 返回值：Modal的key（唯一值）

2. close(key: string): void 
   
   - 描述：关闭Modal
   
   - 参数：
     
     - key Modal的key
   
   - 返回值：void

3. closeAll(): void
   
   - 描述：关闭所有Modal
   
   - 参数：无
   
   - 返回值：void

## 内置数据结构

1. RxzModalOptions

``` ts
interface RxzModalOptions {
  // 内容宽度，（默认值'400px'）
  width?: string;
  // 是否显示关闭按钮，（默认值true）
  isShowClose?: boolean;
  // 是否允许点击遮罩关闭，（默认值true）
  allowOuterClose?: boolean;
  // 标题，可以是字符串、组件、虚拟NODE，（默认值''）
  title?: string | Component | VNode;
  // 组件的props（事件用onXxx）
  titleCntProps?: any;
  // 内容，可以是字符串、组件、虚拟NODE，（默认值'Modal'）
  content?: string | Component | VNode;
  // 组件的props（事件用onXxx）
  contentCntProps?: any;
  // 打开关闭的过度效果，（默认值opacity）
  transition?: 'opacity' | 'bounce';
  // 是否允许拖拽 (默认值为false)
  allowDrag?: boolean;
  // 窗口关闭回调
  onClose?: () => void;
}
```

## Example 案例

### 1. 宽度、不显示关闭

---

<TestRxzModalExp1></TestRxzModalExp1>

``` vue 
<template>
  <rxz-button ref="bt" @click="handleAdd()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleAdd() {
      this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        width: '300px',
        isShowClose: false
      });
    },
  }
}
</script>
```

### 2. 不允许点击遮罩关闭、关闭回调

---

<TestRxzModalExp2></TestRxzModalExp2>

``` vue
<template>
  <rxz-button ref="bt" @click="handleAdd()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleAdd() {
      this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        allowOuterClose: false,
        onClose: () => {
          console.log('close');
        }
      });
    },
  }
}
</script>
```

### 3. 过度效果

---

<TestRxzModalExp3></TestRxzModalExp3>

``` vue
<template>
  <rxz-button ref="bt" @click="handleAdd('opacity')">过度效果opacity</rxz-button>
  <rxz-button ref="bt" @click="handleAdd('bounce')">过度效果bounce</rxz-button>
</template>
<script>
export default {
  methods: {
    handleAdd(transition) {
      this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        transition
      });
    },
  }
}
</script>
```

### 4. 组件内容、嵌套Modal

---

<TestRxzModalExp4></TestRxzModalExp4>

``` vue 
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
import { RxzButton } from 'rxz-ui';
export default {
  methods: {
    handleOpen() {
      this.$RxzModal.create({
        title: '我是标题',
        content: RxzButton,
        contentCntProps: {
          onClick: () => {
            this.handleOpenSub();
          }
        }
      });
    },
    handleOpenSub() {
      this.$RxzModal.create({
        title: '我是子modal',
        content: '我是子modal内容',
        width: '300px'
      });
    }
  }
}
</script>

```

### 5. 虚拟NODE内容、嵌套Modal、关闭所有

---

<TestRxzModalExp5></TestRxzModalExp5>

``` vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
import { RxzButton } from 'rxz-ui';
import { h } from '@vue/runtime-core';
export default {
  methods: {
    handleOpen() {
      this.$RxzModal.create({
        title: '我是标题',
        content: h(RxzButton, {
          onClick: () => {
            this.handleOpenSub();
          }
        }, '打开子modal')
      });
    },
    handleOpenSub() {
      this.$RxzModal.create({
        title: '我是子modal',
        content: h(RxzButton, {
          onClick: () => {
            this.$RxzModal.closeAll();
          }
        }, '关闭所有'),
        width: '300px'
      });
    }
  }
}
</script>

```

### 6. 拖动

---

<TestRxzModalExp6></TestRxzModalExp6>

``` vue
<template>
  <rxz-button ref="bt" @click="handleAdd()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleAdd() {
      this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        allowDrag: true,
      });
    },
  }
}
</script>
```