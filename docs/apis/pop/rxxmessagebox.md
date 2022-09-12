# $RxzMessageBox 全局消息框

<TestRxzMessageBox></TestRxzMessageBox>

```vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开MessageBox</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
      this.$RxzMessageBox.success();
    },
  }
}
</script>

```

## Function 方法

1. success(options?: RxzMessageBoxOptions): string  
   
   + 描述：创建MessageBox
   
   + 参数：
     
     + options MessageBox选项
   
   + 返回值：MessageBox的key（唯一值）

2. information(options?: RxzMessageBoxOptions): string  
   
   + 描述：创建MessageBox
   
   + 参数：
     
     + options MessageBox选项
   
   + 返回值：MessageBox的key（唯一值）
3. warning(options?: RxzMessageBoxOptions): string  
   
   + 描述：创建MessageBox
   
   + 参数：
     
     + options MessageBox选项
   
   + 返回值：MessageBox的key（唯一值）
4. error(options?: RxzMessageBoxOptions): string  
   
   + 描述：创建MessageBox
   
   + 参数：
     
     + options MessageBox选项
   
   + 返回值：MessageBox的key（唯一值）

## 内置数据结构

1. RxzMessageBoxOptions

``` ts
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

```

## Example 案例

### 1. 不同类型

---

<TestRxzMessageBoxExp1></TestRxzMessageBoxExp1>

``` vue 
<template>
  <rxz-button ref="bt" @click="handleOpenSuccess()">打开Success</rxz-button>
  <rxz-button ref="bt" @click="handleOpenInfomartion()">打开Infomartion</rxz-button>
  <rxz-button ref="bt" @click="handleOpenWarning()">打开Warning</rxz-button>
  <rxz-button ref="bt" @click="handleOpenError()">打开Error</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpenSuccess() {
      this.$RxzMessageBox.success();
    },
    handleOpenInfomartion() {
      this.$RxzMessageBox.information();
    },
    handleOpenWarning() {
      this.$RxzMessageBox.warning();
    },
    handleOpenError() {
      this.$RxzMessageBox.error();
    },
  }
}
</script>
```

### 2. 异步回调

---

<TestRxzMessageBoxExp2></TestRxzMessageBoxExp2>

``` vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开MessageBox</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
      this.$RxzMessageBox.success({
        onConfirm: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 2000)
          })
        }
      });
    },
  }
}
</script>
```

### 3. 回调失败

---

<TestRxzMessageBoxExp3></TestRxzMessageBoxExp3>

``` vue
<template>
  <rxz-button ref="bt" @click="handleOpen()">打开MessageBox</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
      this.$RxzMessageBox.success({
        onConfirm: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject();
            }, 2000)
          })
        }
      });
    },
  }
}
</script>
```
