# RxzInput 输入框

<TestRxzInput></TestRxzInput>

```vue
<template>
  <rxz-input v-model="data"></rxz-input>
  <p>输入：{{ data }}</p>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
}
</script>
```

## v-model

| 名称                  | 类型     | 描述     | 可选值 | 必须  |
| ------------------- | ------ | ------ | --- | --- |
| modelValue(default) | any | 输入数据 | -   |  是   |


## Attribute 属性

| 参数       | 类型               | 描述                 | 可选值 | 默认值 | 必须  |
| -------- | ---------------- | ------------------ | --- | --- | --- |
| modelValue     | any | 输入框的值数据 | -   | -  |   是  |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |


