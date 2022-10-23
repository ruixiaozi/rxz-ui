# RxzTextarea 文本域

<TestRxzTextarea></TestRxzTextarea>

```vue
<template>
  <rxz-textarea v-model="data"></rxz-textarea>
  <p>输入：</p>
  <pre>{{ data }}</pre>
</template>
<script>
export default {
  data () {
    return {
      data: '',
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

| 参数          | 类型      | 描述   | 可选值        | 默认值     | 必须  |
| ----------- | ------- | ---- | ---------- | ------- | --- |
| modelValue  | any     | 绑定数据 | -          | ''      |     |
| disabled    | Boolean | 禁用   | true/false | false   |     |
| minRow      | Number  | 最小行数 | -          | 1       |     |
| maxRow      | Number  | 最大行数 | -          | 10      |     |
| row         | Number  | 默认行数 | -          | 2       |     |
| width       | String  | 宽度   | -          | '250px' |     |
| placeholder | String  | 提示文字 | -          | ''      |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## Example 案例

### 1. 最大最小行数

---

<TestRxzTextareaExp1></TestRxzTextareaExp1>

```vue
<template>
  <rxz-textarea v-model="data" :minRow="3" :maxRow="5" :row="3"></rxz-textarea>
  <p>输入：</p>
  <pre>{{ data }}</pre>
</template>
<script>
export default {
  data () {
    return {
      data: '',
    }
  },
}
</script>
```

### 2. 禁用

---

<TestRxzTextareaExp2></TestRxzTextareaExp2>

```vue
<template>
  <rxz-textarea v-model="data" disabled></rxz-textarea>
  <p>输入：</p>
  <pre>{{ data }}</pre>
</template>
<script>
export default {
  data () {
    return {
      data: '',
    }
  },
}
</script>
```

### 3. 在form中使用

---

<TestRxzTextareaExp3></TestRxzTextareaExp3>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-textarea></rxz-textarea>
    </rxz-form-item>
  </rxz-form>
</template>
<script>
import { RxzValidators } from '@/definition';
export default {
  data () {
    return {
      formConfig: {
        test: {
          validators: [RxzValidators.required],
          default: '',
        },
      },
      data: {}
    }
  },
}
</script>
```