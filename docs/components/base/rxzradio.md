# RxzRadio 单选按钮

<TestRxzRadio></TestRxzRadio>

```vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-radio :items="items" v-model="data"></rxz-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const items = [
  {
    label: '选项A',
    value: 1,
  },
  {
    label: '选项B',
    value: 2,
  }
];
const data = ref(items[0]);
</script>

<style lang="scss" scoped>

</style>

```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | RxzRadioItem | 绑定数据 | -   |     |

## Attribute 属性

| 参数         | 类型                       | 描述   | 可选值                 | 默认值        | 必须  |
| ---------- | ------------------------ | ---- | ------------------- | ---------- | --- |
| modelValue | RxzRadioItem                      | 绑定数据 | -                   | -         |     |
| items      | Arrary\<RxzRadioItem\>   | 选择项  | -                   | []         |     |
| direction  | String \| RXZ_FLEX_DIRECTION_ENUM | 排列方向 | vertical/horizontal | horizontal |     |
| disabled   | Boolean                  | 禁用   | true/false          | false      |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## 内置数据结构

1. RxzRadioItem 

```ts
interface RxzRadioItem {
  label: string;
  value: any;
  // 对单个选项进行禁用
  disabled?: boolean;
}
```

## Example 案例

### 1. 排列方向

---

<TestRxzRadioExp1></TestRxzRadioExp1>

``` vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-radio :items="items" v-model="data"></rxz-radio>
  <p>--垂直排列--</p>
  <rxz-radio :items="items" v-model="data" :direction="RXZ_FLEX_DIRECTION_ENUM.vertical"></rxz-radio>
</template>

<script setup lang="ts">
import { RXZ_FLEX_DIRECTION_ENUM } from '@/components/layout/RxzFlex';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const items = [
  {
    label: '选项A',
    value: 1,
  },
  {
    label: '选项B',
    value: 2,
  }
];
const data = ref(items[0]);
</script>

<style lang="scss" scoped>

</style>

```

### 2. 禁用

全禁用和局部禁用。

---

<TestRxzRadioExp2></TestRxzRadioExp2>

``` vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-radio :items="items" v-model="data" disabled></rxz-radio>
  <rxz-radio :items="items" v-model="data"></rxz-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const items = [
  {
    label: '选项A',
    value: 1,
  },
  {
    label: '选项B',
    value: 2,
  },
  {
    label: '选项C',
    value: 3,
    disabled: true,
  }
];
const data = ref(items[0]);
</script>

<style lang="scss" scoped>

</style>

```

### 3. 使用bindingValue

祖先组件通过 registerBindingValue 注册binding值，radio进行自动绑定

---

<TestRxzRadioExp3></TestRxzRadioExp3>

``` vue
<template>
  <div>
    <p>当前选择：{{ data }}</p>
    <rxz-radio :items="items"></rxz-radio>
  </div>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const items = [
  {
    label: '选项A',
    value: 1,
  },
  {
    label: '选项B',
    value: 2,
  }
];
const data = ref(items[0]);
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>

```
