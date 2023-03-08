# RxzCountdownButton 倒计时按钮

<TestRxzCountdownButton></TestRxzCountdownButton>

``` vue
<template>
  <rxz-countdown-button v-model="isStart" :seconds="10" @click="handleClick">
    <template v-slot:countdownValue>等待中</template>
    按钮
  </rxz-countdown-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const isStart = ref(true);
const handleClick = () => {
  console.log('click');
}
</script>

<style lang="scss" scoped>

</style>

```

## v-model
| 名称    | 类型    | 描述       | 可选值      |  必须 |
| ------- | ------- | ---------- | ----------- |  ---- |
| default(modelValue) | Boolean | 是否开始   | true/false  |  是  |

## Attribute 属性

| 参数       | 类型    | 描述       | 可选值      | 默认值  | 必须 |
| ---------- | ------- | ---------- | ----------- | ------- | ---- |
| modelValue | Boolean | 是否开始   | true/false  | -   |  是  |
| seconds    | Number  | 倒计时秒数 | -           | 60      |      |
| type       | String \| RXZ_BUTTON_TYPE_ENUM  | 按钮类型   | RXZ_BUTTON_TYPE_ENUM | primary |      |

## Event 事件

| 事件名称             | 描述         | 回调参数列表 |
| -------------------- | ------------ | ------------ |
| update:modelValue    | 更新         | 更新值       |
| click                | 按钮点击事件 | 点击事件对象   |

## Slot 具名插槽

| 插槽名称       | 描述                       |
| -------------- | -------------------------- |
| countdownValue | 倒计时过程中按钮显示的内容 |
