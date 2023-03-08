# RxzForm 表单

<TestRxzForm></TestRxzForm>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data" ref="form">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label1</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <rxz-button :type="RXZ_BUTTON_TYPE_ENUM.primary" @click="handleCheck()">Check</rxz-button>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzForm, RXZ_BUTTON_TYPE_ENUM } from '@/components';
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
  test1: {
    validators: [useRxzValidator().required],
    default: 'test1',
  },
}
const data = ref({
  test: ''
});
const form = ref<InstanceType<typeof RxzForm>>();
const handleCheck = () => {
  console.log(form.value?.check());
}
</script>

<style lang="scss" scoped>

</style>
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
| labelWidth | RxzLabelWidth                     | 表单下面的labelwidth | -                   | 'auto'       |     |
| name       | String                            | 子表单对应的字段名称      | -                   | ''       |     |
| direction  | RXZ_FLEX_DIRECTION_ENUM           | 表单内item的排列方向    | RXZ_FLEX_DIRECTION_ENUM | RXZ_FLEX_DIRECTION_ENUM.vertical |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## Slot 具名插槽

| 插槽名称    | 描述   | 作用域对象           |
| ------- | ---- | --------------- |
| default | 表单内容 | {formData: any} |

## 内置数据结构

1. RxzValidatorCheckRes 

  ```ts
  type RxzValidatorErrorTip = string | { isI18N: boolean; label: string; };

  type RxzValidatorCheckRes = {
    tip: RxzValidatorErrorTip;
    param: any;
  } | null | { [key: string]: RxzValidatorCheckRes };
  ```

2. RxzFormConfig

  ```ts
  type RxzValidator = (value: any) => { [key: string]: any | null } | null;

  interface RxzFormItemConfig {
    default?: any;
    validators: RxzValidator[];
  }
  interface RxzFormConfig {
    [key: string ]: RxzFormItemConfig | RxzFormConfig;
  }
  ```

3. RxzLabelWidth = string | 'auto' | 'fit-content';

4. RXZ_FLEX_DIRECTION_ENUM

  ```ts
  export enum RXZ_FLEX_DIRECTION_ENUM {
    vertical='vertical',
    horizontal='horizontal',
  }
  ```

## API

1. check(): RxzValidatorCheckRes 表单校验

## Example 案例

### 1. 排列方向

---

<TestRxzFormExp1></TestRxzFormExp1>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label1</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzForm } from '@/components';
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
  test1: {
    validators: [useRxzValidator().required],
    default: 'test1',
  },
}
const data = ref({
  test: ''
});
</script>

<style lang="scss" scoped>

</style>

```

<TestRxzFormExp2></TestRxzFormExp2>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data" :direction="RXZ_FLEX_DIRECTION_ENUM.horizontal" labelWidth="fit-content">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label1</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzForm, RXZ_FLEX_DIRECTION_ENUM } from '@/components';
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
  test1: {
    validators: [useRxzValidator().required],
    default: 'test1',
  },
}
const data = ref({
  test: ''
});
</script>

<style lang="scss" scoped>

</style>

```

### 2. 子表单

---

<TestRxzFormExp3></TestRxzFormExp3>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item>
      <rxz-label>Label1</rxz-label>
      <rxz-form name="inner">
        <rxz-form-item name="innerTest" :error-tip="{'required': 'error required'}">
          <rxz-label>innerLabel</rxz-label>
          <rxz-input></rxz-input>
        </rxz-form-item>
      </rxz-form>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzForm } from '@/components';
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
  inner: {
    innerTest: {
      validators: [useRxzValidator().required],
      default: 'test1',
    },
  }
}
const data = ref({});
</script>

<style lang="scss" scoped>

</style>

```

### 3. labelWidth

---

1. fit-content

---

<TestRxzFormExp4></TestRxzFormExp4>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data" labelWidth="fit-content">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>testLabel</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzForm } from '@/components';
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
  test1: {
    validators: [useRxzValidator().required],
    default: 'test1',
  },
}
const data = ref({
  test: ''
});
</script>

<style lang="scss" scoped>

</style>

```

2. auto

---

<TestRxzFormExp5></TestRxzFormExp5>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data" labelWidth="auto">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>testLabel</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzForm } from '@/components';
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
  test1: {
    validators: [useRxzValidator().required],
    default: 'test1',
  },
}
const data = ref({
  test: ''
});
</script>

<style lang="scss" scoped>

</style>

```

3. 实际像素

---

<TestRxzFormExp6></TestRxzFormExp6>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data" labelWidth="100px">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>testLabel1111</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzForm } from '@/components';
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
  test1: {
    validators: [useRxzValidator().required],
    default: 'test1',
  },
}
const data = ref({
  test: ''
});
</script>

<style lang="scss" scoped>

</style>

```