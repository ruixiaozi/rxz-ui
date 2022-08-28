# $RxzLoading 全局加载

<TestRxzLoading></TestRxzLoading>

```vue
<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$RxzLoading.show();
      setTimeout(() => {
        this.$RxzLoading.hide();
      }, 1000);
    }
  }
};
</script>
```

## Function 方法

1. show(options?: RxzLoadingOptions): string  
   
   + 描述：显示loading
   
   + 参数：
     
     + options Loading选项
   
   + 返回值：void

2. hide(): void 
   
   - 描述：隐藏Loading
   
   - 参数：无
   
   - 返回值：void
  

## 内置数据结构

1. RxzLoadingOptions

``` ts
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
```

## Example 案例

### 1. loading文字

---

<TestRxzLoadingExp1></TestRxzLoadingExp1>

``` vue 
<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$RxzLoading.show({
        text: 'Loading'
      });
      setTimeout(() => {
        this.$RxzLoading.hide();
      }, 1000);
    }
  }
};
</script>
```

### 2. 自定义颜色

---

<TestRxzLoadingExp2></TestRxzLoadingExp2>

``` vue
<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$RxzLoading.show({
        bgColor: '#40e0d032',
        color: '#ff1493'
      });
      setTimeout(() => {
        this.$RxzLoading.hide();
      }, 1000);
    }
  }
};
</script>
```

### 3. 虚拟NODE内容

---

<TestRxzLoadingExp3></TestRxzLoadingExp3>

``` vue
<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>
<script>
import { h } from '@vue/runtime-core';
export default {
  methods: {
    handleClick() {
      this.$RxzLoading.show({
        content: h('div', 'Loading...')
      });
      setTimeout(() => {
        this.$RxzLoading.hide();
      }, 1000);
    }
  }
};
</script>
```