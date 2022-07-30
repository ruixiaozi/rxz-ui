# RxzInput 输入框

<TestRxzInput></TestRxzInput>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label：</rxz-label>
      <rxz-input></rxz-input>
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
      data: {
        test: ''
      }
    }
  },
}
</script>

```

## Attribute 属性

| 参数       | 类型               | 描述                 | 可选值 | 默认值 | 必须  |
| -------- | ---------------- | ------------------ | --- | --- | --- |
| name     | String \| Number | 表单项对应的字段名称，可以是数组下标 | -   | ''  |     |
| errorTip | RxzErrorTip      | 表单项的错误提示信息         | -   | {}  |     |

## Slot 具名插槽

| 插槽名称    | 描述   | 作用域对象           |
| ------- | ---- | --------------- |
| default | 表单内容 | {itemData: any} |

## 内置数据结构

1. RxzErrorTip = { [key: string]: string | { isI18N: boolean; label: string; } };

   其中key匹配校验器返回的错误key，[内置校验器](./rxzvalidators.html)自带了错误提示，自定义RxzErrorTip可以覆盖内置错误提示。
   
   如果是i18n的话，则会调用国际化进行转换，同时支持字符串中用`{0}`, `{1}`, `{key}`这样的占位符，校验器返回的错误对象中的值能够自动替换：
   
   ```ts
   ...
   return {
      max: [max],
   };
   // 以上返回能够替换{0}为max值
   
   return {
      custom: {
        info: '123' 
      },
   };
   // 以上返回能够替换{info}为123
   ...
   ```

## API

1. check(): RxzCheckRes 表单项校验（包括子表单）

## Example 案例
