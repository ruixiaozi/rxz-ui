# RxzSelect 下拉选择器

<TestRxzSelect></TestRxzSelect>

```vue
<template>
  <rxz-select v-model="data" :options="options"></rxz-select>
</template>
<script>
export default {
  data() {
    return {
      data: 1,
      options: [
        {
          label: "Option1",
          value: 1,
          key: "1",
        },
        {
          label: "Option2",
          value: 2,
          key: "2",
        },
      ],
    };
  },
};
</script>
```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | any | 绑定数据（非form下必须，form下自动绑定） | -   |     |

## Attribute 属性

| 参数       | 类型               | 描述     | 可选值     | 默认值  | 必须 |
| ---------- | ------------------ | -------- | ---------- | ------- | ---- |
| modelValue | any                | 绑定数据 | -          | ''      |      |
| width      | String             | 宽度     | -          | '120px' |      |
| options    | RxzSelectOptions[] | 下拉选项 | -          | []      |      |
| disabled   | Boolean            | 是否禁用 | true/false | false   |      |
| isButton   | Boolean            | 是否为按钮 | true/false | true   |      |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## 内置数据结构

1. RxzSelectOptions

```ts
interface RxzSelectOptions {
  label: string;
  value: any;
  key: string | number;
}
```



## Example 案例

### 1. 禁用

---

<TestRxzSelectExp1></TestRxzSelectExp1>

```vue
<template>
  <rxz-select v-model="data" :options="options" disabled></rxz-select>
</template>
<script>
export default {
  data() {
    return {
      data: 1,
      options: [
        {
          label: "Option1",
          value: 1,
          key: "1",
        },
        {
          label: "Option2",
          value: 2,
          key: "2",
        },
      ],
    };
  },
};
</script>
```

### 2. 文本模式

---

<TestRxzSelectExp2></TestRxzSelectExp2>

```vue
<template>
  <rxz-select v-model="data" :options="options" width="fit-content" :isButton="false"></rxz-select>
</template>
<script>
export default {
  data() {
    return {
      data: null,
      options: [
        {
          label: "Option1",
          value: 1,
          key: "1",
        },
        {
          label: "Option2",
          value: 2,
          key: "2",
        },
      ],
    };
  },
  created() {
    this.data = this.options[0];
  }
};
</script>
```

### 3. 在form中使用

---

<TestRxzSelectExp3></TestRxzSelectExp3>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-select :options="options"></rxz-select>
    </rxz-form-item>
  </rxz-form>
</template>
<script>
import { RxzValidators } from 'rxz-ui';
export default {
  data () {
    return {
      options: [
        {
          label: "Option1",
          value: 1,
          key: "1",
        },
        {
          label: "Option2",
          value: 2,
          key: "2",
        },
      ],
      formConfig: {
        test: {
          validators: [RxzValidators.required],
          default: 2,
        },
      },
      data: {}
    }
  },
}
</script>
```