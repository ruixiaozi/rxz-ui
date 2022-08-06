# RxzTextarea 文本域

<TestRxzTextarea></TestRxzTextarea>

```vue
<template>
  <rxz-switch v-model="data"></rxz-switch>
</template>
<script>
export default {
  data () {
    return {
      data: true,
    }
  },
}
</script>
```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | any | 绑定数据（非form下必须，form下自动绑定） | -   |     |

## Attribute 属性

| 参数         | 类型      | 描述   | 可选值        | 默认值   | 必须  |
| ---------- | ------- | ---- | ---------- | ----- | --- |
| modelValue | any     | 绑定数据 | -          | ''    |     |
| disabled   | Boolean | 禁用   | true/false | false |     |
| onText     | String  | 开启文字 | -          | ''    |     |
| offText    | String  | 关闭文字 | -          | ''    |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## Example 案例

### 1. 按钮文字

---

<TestRxzSwitchExp1></TestRxzSwitchExp1>

```vue
<template>
  <rxz-switch v-model="data" on-text="开启" off-text="关闭"></rxz-switch>
</template>
<script>
export default {
  data () {
    return {
      data: true,
    }
  },
}
</script>
```

### 2. 禁用

---

<TestRxzSwitchExp2></TestRxzSwitchExp2>

```vue
<template>
  <rxz-switch v-model="data" on-text="开启" off-text="关闭" disabled></rxz-switch>
</template>
<script>
export default {
  data () {
    return {
      data: true,
    }
  },
}
</script>
```

### 3. 在form中使用

---

<TestRxzSwitchExp3></TestRxzSwitchExp3>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label：</rxz-label>
      <rxz-switch on-text="开启" off-text="关闭"></rxz-switch>
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
          default: true,
        },
      },
      data: {}
    }
  },
}
</script>

```