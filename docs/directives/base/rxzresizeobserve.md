# rxz-resize-observe 尺寸改变监听指令

<rxz-textarea 
  style="position: relative" 
  v-rxz-resize-observe="(event) => this.handleResize(event)"
></rxz-textarea>

``` vue
<template>
  <rxz-textarea 
    style="position: relative" 
    v-rxz-resize-observe="(event) => this.handleResize(event)"
  ></rxz-textarea>
</template>
<script>
export default {
  methods: {
    handleResize(event) {
      console.log(event);
    }
  },
}
</script>
```

## Description 描述

+ 指令名称：v-rxz-resize-observe
+ 参数：无
+ 值：resize的回调函数，建议使用箭头函数，避免this指向错误
+ 修饰符：无
+ 注意：需要指令使用的元素的`position`不为`static`

<script>
export default {
  methods: {
    handleResize(event) {
      console.log(event);
    }
  },
}
</script>