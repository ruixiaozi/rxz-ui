# RxzCountDownButton 倒计时按钮

```
<template>
  <rxz-count-down-button v-model="isStart" :seconds="10">
    <template v-slot:countdownValue>等待中</template>
    按钮
  </rxz-count-down-button>
</template>
<script>
export default {
  data () {
    return {
      isStart:true
    }
  },

};
</script>
```
<test-rxz-count-down-button />

## Attribute 属性

| 参数              | 类型    | 描述       | 可选值      | 默认值  | 必须 |
| ----------------- | ------- | ---------- | ----------- | ------- | ---- |
| isStart / v-model | Boolean | 是否开始   | true/false  | false   |      |
| seconds           | Number  | 倒计时秒数 | -           | 60      |      |
| type              | String  | 按钮类型   | 同RxzButton | primary |      |

## Event 事件

| 事件名称 | 描述         | 回调参数列表 |
| -------- | ------------ | ------------ |
| click    | 按钮点击事件 | 点击事件对象 |

## Slot 具名插槽

| 插槽名称       | 描述                       |
| -------------- | -------------------------- |
| countdownValue | 倒计时过程中按钮显示的文字 |

