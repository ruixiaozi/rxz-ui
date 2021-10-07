# RxzDialog 对话框

```
<template>
  <div>
    <rxz-button type="primary" @click="visible = true">打开对话框</rxz-button>
    <rxz-dialog :visible.sync="visible">
      <template v-slot:title>
        消息
      </template>
      我是一个对话框
    </rxz-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible:false
    }
  },
};
</script>
```

<test-rxz-dialog/>

## Attribute 属性

| 参数           | 类型    | 描述                     | 可选值     | 默认值   | 必须 |
| -------------- | ------- | ------------------------ | ---------- | -------- | ---- |
| visible (sync) | Boolean | 是否显示，支持sync修饰符 | true/false | false    |      |
| zIndex         | String  | 对话框层级               | -          | 3000     |      |
| width          | String  | 宽度                     | -          | 400px    |      |
| titleHeight    | String  | 标题高度                 | -          | 50px     |      |
| isShowClose    | Boolean | 是否显示关闭按钮         | true/false | true     |      |
| titleBgColor   | String  | 标题部分背景颜色         | -          | #FFFFFF  |      |
| titleColor     | String  | 标题部分文字、按钮颜色   | -          | \#000000 |      |
| bodyBgColor    | String  | body背景颜色             | -          | \#FFFFFF |      |
| padding        | String  | 内边距                   | -          | 10px     |      |
| closeFontSize  | String  | 关闭按钮字体大小         | -          | 14px     |      |

## Slot 具名插槽

| 插槽名称 | 描述       |
| -------- | ---------- |
| title    | 对话框标题 |

