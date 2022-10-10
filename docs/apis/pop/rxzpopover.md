# $RxzPopover 全局弹出层

<TestRxzPopover></TestRxzPopover>

```vue
<template>
  <rxz-button ref="bt" @click="open()">打开Popover</rxz-button>
</template>
<script>
import { POPOVER_POS_E } from 'rxz-ui'
export default {
  data() {
    return {
      content: 1,
    }
  },
  methods: {
    open() {
      this.$RxzPopover.open({
        sourceEl: this.$refs.bt,
        pos: POPOVER_POS_E.bottomright,
        content: String(this.content++),
        showArrow: false,
        gap: 0,
        key: 'rxz-test-1',
        allowOuterClose: true,
      });
    },
  }
}
</script>
```

## Function 方法

1. open(options: RxzPopoverOptions): string | undefined  
   
   + 描述：打开一个弹出层，多次打开相同key的弹出层将复用
   
   + 参数：
     
     + options 弹出层选项
   
   + 返回值：成功返回弹出层key；失败返回undefined

2. close(key: string): void  
   
   + 描述：关闭一个弹出层
   
   + 参数：
     
     + key 弹出层key
   
   + 返回值：void


## 内置数据结构

1. RxzPopoverOptions

```ts
interface RxzPopoverOptions {
  // 宿主元素，用于确定弹出层位置
  sourceEl: Element | ComponentPublicInstance;
  // 相对于宿主元素的位置
  pos: POPOVER_POS_E;
  // 唯一标识（建议用UUID，或者第一次创建不传入），相同的key，显示和隐藏复用
  key?: string;
  // 是否显示箭头
  showArrow?: boolean;
  // 弹出层与宿主元素的距离，默认为0
  gap?: number;
  // 弹出层类型，默认POPOVER_TYPE_E.WHITE
  type?: POPOVER_TYPE_E;
  // 是否开启圆角，默认false
  radius?: boolean;
  // 是否开启内边距，默认true
  padding?: boolean;
  // 内容，可以是字符串、组件、虚拟NODE、虚拟dom数组
  content?: string | Component | VNode | VNode[];
  // 组件的props（事件用onXxx）
  contentCntProps?: any;
  // 是否允许点击外部关闭，默认true
  allowOuterClose?: boolean;
  // 显示改变的事件
  onShowChange?: (isShow: boolean) => void;
}

```

2. POPOVER_POS_E

```ts
enum POPOVER_POS_E {
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
```

3. POPOVER_TYPE_E

```ts
enum POPOVER_TYPE_E {
  WHITE='white',
  BLACK='black',
}
```

## Example 案例

### 1. 虚拟dom

---

<TestRxzPopoverExp1></TestRxzPopoverExp1>

``` vue 
<template>
  <rxz-button ref="bt" @click="open()">打开Popover</rxz-button>
</template>
<script>
import { POPOVER_POS_E, RxzButton } from 'rxz-ui'
import { h } from '@vue/runtime-core';

export default {
  methods: {
    data() {
      return {
        key: '',
      }
    },
    open() {
      this.key = this.$RxzPopover.open({
        sourceEl: this.$refs.bt,
        pos: POPOVER_POS_E.bottomright,
        content: h(RxzButton, {
          type: 'primary',
          onClick: () => {
            console.log('click button');
          }
        }, '点击'),
        showArrow: false,
        key: this.key,
        allowOuterClose: true,
      });
    },
  }
}
</script>
```
