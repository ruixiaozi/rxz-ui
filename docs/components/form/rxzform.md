# RxzForm 表单

<TestRxzForm></TestRxzForm>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data" ref="form">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label：</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label1：</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <rxz-button type="primary" @click="handleCheck()">Check</rxz-button>
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
        test1: {
          validators: [RxzValidators.required],
          default: 'test1',
        },
      },
      data: {
        test: 'test'
      }
    }
  },
  methods: {
    handleCheck() {
      console.log(this.$refs.form.check());
    }
  }
}
</script>
```

## v-model

| 名称                  | 类型     | 描述     | 可选值 | 必须  |
| ------------------- | ------ | ------ | --- | --- |
| modelValue(default) | Object | 表单数据对象 | -   |     |

## Attribute 属性

| 参数         | 类型                                | 描述              | 可选值                 | 默认值      | 必须  |
| ---------- | --------------------------------- | --------------- | ------------------- | -------- | --- |
| modelValue | Object                            | 表单数据对象          | -                   | {}       |     |
| formConfig | RxzFormConfig                     | 表单的配置对象         | -                   | {}       |     |
| labelWidth | String \| 'auto' \| 'fit-contnet' | 表单下面的labelwidth | -                   | ''       |     |
| name       | String                            | 子表单对应的字段名称      | -                   | ''       |     |
| direction  | String                            | 表单内item的排列方向    | vertical/horizontal | vertical |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## 内置数据结构

1. RxzCheckRes = { tip: RxzErrorTip; param: any; } | null | { [key: string]:RxzCheckRes};

2. RxzFormConfig = { [key: string ]: RxzFormItemConfig | RxzFormConfig; };

3. RxzFormItemConfig = { default?: any; validators: Validator[];};  （内置校验器：[RxzValidators](./rxzvalidators.html)）

4. Validator = (value: any) => { [key: string]: any | null } | null;

5. RxzLabelWidth = string | 'auto' | 'fit-content';

## API

1. check(): RxzCheckRes 表单校验

## Example 案例

### 1. 排列方向

---

<TestRxzFormExp1></TestRxzFormExp1>


```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label：</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label1：</rxz-label>
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
        test1: {
          validators: [RxzValidators.required],
          default: 'test1',
        },
      },
      data: {}
    }
  },
}
</script>
```

<TestRxzFormExp2></TestRxzFormExp2>

``` vue
<template>
  <rxz-form :form-config="formConfig" v-model="data" direction="horizontal" labelWidth="fit-content">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label：</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label1：</rxz-label>
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
        test1: {
          validators: [RxzValidators.required],
          default: 'test1',
        },
      },
      data: {}
    }
  },
}
</script>
```