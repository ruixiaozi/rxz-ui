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
| modelValue(default) | any | 绑定数据（非form下必须，form下自动绑定） | -   |     |


## Attribute 属性

| 参数       | 类型               | 描述                 | 可选值 | 默认值 | 必须  |
| -------- | ---------------- | ------------------ | --- | --- | --- |
| modelValue     | any | 绑定数据 | -   | ''  |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## Example 案例

### 1. form下使用

---

<TestRxzInputExp1></TestRxzInputExp1>

``` vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label：</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
</template>
<script>
import { RxzValidators } from 'rxz-ui';
export default {
  data () {
    return {
      formConfig: {
        test: {
          validators: [RxzValidators.required],
          default: '',
        },
      },
      data: {
        test: ''
      }
    }
  },
}
</script>
```