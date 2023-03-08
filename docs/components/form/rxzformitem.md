# RxzFormItem 表单项

> `RxzFormItem` 组件使用 [useRxzBindingWithinSetup](../../use/setup/userxzbindingwithinsetup.html) 的 `registerBindingValue` 注册了当前表单项的数据  
> 基础组件中实现了 `bindingValue` 的控件，都可直接用于表单项中，将自动实现数据绑定  
> 通过 `mixinModelValueClosedBindingValue` 混入，可自定义实现与表单项绑定的组件  


<TestRxzFormItem></TestRxzFormItem>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { useRxzValidator } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const formConfig = {
  test: {
    validators: [useRxzValidator().required],
    default: '',
  },
};
const data = ref({
  test: ''
})
</script>

<style lang="scss" scoped>

</style>
```

## Attribute 属性

| 参数       | 类型               | 描述                 | 可选值 | 默认值 | 必须  |
| -------- | ---------------- | ------------------ | --- | --- | --- |
| name     | String \| Number | 表单项对应的字段名称，可以是数组下标 | -   | ''  |     |
| errorTip | RxzValidatorErrorTips      | 表单项的错误提示信息，内部使用 [useRxzValidator](../../use/base/userxzvalidator.html) 的 `checkError` 实现         | -   | {}  |     |

## Slot 具名插槽

| 插槽名称    | 描述   | 作用域对象           |
| ------- | ---- | --------------- |
| default | 表单内容 | {itemData: any} |

## 内置数据结构

1. RxzValidatorErrorTips 

  ```ts
  type RxzValidatorErrorTip = string | { isI18N: boolean; label: string; };
  type RxzValidatorErrorTips = { [key: string]: RxzValidatorErrorTip };
  ```

   其中key匹配校验器返回的错误key，[useRxzValidator](../../use/base/userxzvalidator.html) 的 `checkError` 自带了错误提示，自定义RxzValidatorErrorTips可以覆盖内置错误提示。
   
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


## Example 案例

### 1. 动态表单项

---

<TestRxzFormItemExp1></TestRxzFormItemExp1>

``` vue
<template>
  <rxz-button @click="add()" style="margin-bottom: 8px">add</rxz-button>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item>
      <rxz-label>sub</rxz-label>
      <rxz-form name="arrayTest" v-slot:default="{formData}">
        <rxz-form-item :name="key" v-for="(item, key) in formData" :key="key">
          <rxz-input></rxz-input>
        </rxz-form-item>
      </rxz-form>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzFormItemConfig } from '@/components';
import { RxzFormConfig } from '@/components/form/RxzForm';
import { useRxzValidator } from '@/use';
import { reactive, ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const formConfig: RxzFormConfig = reactive({
  arrayTest: [
    {
      validators: [useRxzValidator().required],
      default: '',
    }
  ],
});
const data = ref();
const add = () => {
  (formConfig.arrayTest as RxzFormItemConfig[]).push({
    validators: [useRxzValidator().required],
    default: (formConfig.arrayTest as RxzFormItemConfig[]).length,
  })
}
</script>

<style lang="scss" scoped>

</style>

```

### 2. 自定义错误信息&校验器

---

<TestRxzFormItemExp2></TestRxzFormItemExp2>

1. 引入国际化

``` ts
...
app.use(RxzUI, {
  i18n: {
    zh: {
      max_custom: '最大值为{0}',
      custom_validator: '最小值为{min}'
    },
    en: {
      max_custom: 'max value is {0}',
      custom_validator: 'min value is {min}'
    },
  }
} as RxzOption);
...
```

2. 自定义错误信息

``` vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="errorTips">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzValidator, useRxzValidator } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const customValidator = (min: number): RxzValidator => {
  return (value: any) => {
    if (value < min) {
      return {
        customValidator: {
          min: min
        }
      }
    }
    return null;
  };
}

const formConfig = {
  test: {
    validators: [useRxzValidator().required, useRxzValidator().max(10), customValidator(1)],
    default: '',
  },
};
const data = ref({
  test: ''
});
const errorTips = {
  required: '不能为空',
  max: {
    isI18N: true,
    label: 'max_custom'
  },
  customValidator: {
    isI18N: true,
    label: 'custom_validator'
  }
}
</script>

<style lang="scss" scoped>

</style>

```