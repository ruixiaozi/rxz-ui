# $RxzModal 全局模态框

<TestRxzModal></TestRxzModal>

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
      this.$RxzModal.create();
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
```

## Example 案例

### 1. 宽度、不显示关闭

---

<TestRxzModalExp1></TestRxzModalExp1>

``` vue 
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
      this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        width: '300px',
        closable: false
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
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
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
  <rxz-button ref="bt" @click="handleOpen('opacity')">过度效果opacity</rxz-button>
  <rxz-button ref="bt" @click="handleOpen('bounce')">过度效果bounce</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen(transition) {
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
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
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

### 7. 抽屉

---

<TestRxzModalExp7></TestRxzModalExp7>

``` vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
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

### 8. 多级抽屉

---

<TestRxzModalExp8></TestRxzModalExp8>

``` vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
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

### 9. 底部信息

---

<TestRxzModalExp9></TestRxzModalExp9>

``` vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
  <rxz-button ref="bt" @click="handleOpenDrawer()">打开抽屉</rxz-button>
</template>
<script>
import { RxzButton, RxzFlex } from 'rxz-ui';
import { h } from '@vue/runtime-core';
export default {
  methods: {
    handleOpen() {
      const key = this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        footer: h(RxzFlex, {
          justify: 'center',
          gutter: '8px',
        }, [h(RxzButton, {
          onClick: () => {
            this.$RxzModal.close(key);
          }
        }, {
          default: '关闭'
        })]),
      });
    },
    handleOpenDrawer() {
      const key = this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        drawer: true,
        footer: h(RxzFlex, {
          justify: 'center',
          gutter: '8px',
        }, [h(RxzButton, {
          onClick: () => {
            this.$RxzModal.close(key);
          }
        }, {
          default: '关闭'
        })]),
      });
    }
  }
}
</script>
```