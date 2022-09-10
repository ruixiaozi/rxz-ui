# $RxzTips 全局提示

<TestRxzTips></TestRxzTips>

```vue
<template>
  <rxz-button ref="bt" @click="showTip()">打开Tips</rxz-button>
</template>
<script>
export default {
  methods: {
    showTip() {
      this.$RxzTips.error('参数错误');
    },
  }
}
</script>
```

## Function 方法

1. success(content: string, timeout?: number): void  
   
   + 描述：成功提示
   
   + 参数：
     
     + content 提示内容
     + timeout 显示时长，单位毫秒（默认1000毫秒）
   
   + 返回值：void

2. information(content: string, timeout?: number): void  
   
   + 描述：通知提示
   
   + 参数：
     
     + content 提示内容
     + timeout 显示时长，单位毫秒（默认1000毫秒）
   
   + 返回值：void

3. warning(content: string, timeout?: number): void  
   
   + 描述：警告提示
   
   + 参数：
     
     + content 提示内容
     + timeout 显示时长，单位毫秒（默认1000毫秒）
   
   + 返回值：void

4. error(content: string, timeout?: number): void  
   
   + 描述：失败提示
   
   + 参数：
     
     + content 提示内容
     + timeout 显示时长，单位毫秒（默认1000毫秒）
   
   + 返回值：void


## Example 案例

### 1. 不同类型

---

<TestRxzTipsExp1></TestRxzTipsExp1>

``` vue 
<template>
  <rxz-button ref="bt" @click="showInfomationTip()">打开信息Tips</rxz-button>
  <rxz-button ref="bt" @click="showSuccessTip()">打开成功Tips</rxz-button>
  <rxz-button ref="bt" @click="showWarningTip()">打开警告Tips</rxz-button>
  <rxz-button ref="bt" @click="showErrorTip()">打开失败Tips</rxz-button>
</template>
<script>
export default {
  methods: {
    showInfomationTip() {
      this.$RxzTips.information('信息');
    },
    showSuccessTip() {
      this.$RxzTips.success('成功');
    },
    showWarningTip() {
      this.$RxzTips.warning('警告');
    },
    showErrorTip() {
      this.$RxzTips.error('失败');
    },
  }
}
</script>
```

### 2. 超时时间

---

<TestRxzTipsExp2></TestRxzTipsExp2>

``` vue
<template>
  <rxz-button ref="bt" @click="showTip()">打开Tips</rxz-button>
</template>
<script>
export default {
  methods: {
    showTip() {
      this.$RxzTips.error('参数错误', 3000);
    },
  }
}
</script>

```
