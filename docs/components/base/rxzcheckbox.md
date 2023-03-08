# RxzCheckbox 复选按钮

<TestRxzCheckbox></TestRxzCheckbox>

```vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-checkbox :items="items" v-model="data"></rxz-checkbox>
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
const data = ref([]);
</script>

<style lang="scss" scoped>

</style>

```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | RxzCheckboxItem[] | 绑定数据 | -   |     |

## Attribute 属性

| 参数         | 类型                       | 描述   | 可选值                 | 默认值        | 必须  |
| ---------- | ------------------------ | ---- | ------------------- | ---------- | --- |
| modelValue | RxzCheckboxItem[]                      | 绑定数据 | -                   | []         |     |
| items      | Arrary\<RxzCheckboxItem\>   | 选择项  | -                   | []         |     |
| direction  | String \| DIRECTION_ENUM | 排列方向 | vertical/horizontal | horizontal |     |
| disabled   | Boolean                  | 禁用   | true/false          | false      |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## 内置数据结构

1. RxzCheckboxItem = { label: string; value: any; }

## Example 案例

### 1. 排列方向

---

<TestRxzCheckboxExp1></TestRxzCheckboxExp1>

``` vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-checkbox :items="items" v-model="data"></rxz-checkbox>
  <p>--垂直排列--</p>
  <rxz-checkbox :items="items" v-model="data" :direction="RXZ_FLEX_DIRECTION_ENUM.vertical"></rxz-checkbox>
</template>

<script setup lang="ts">
import { RXZ_FLEX_DIRECTION_ENUM } from '@/components';
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
const data = ref([]);
</script>

<style lang="scss" scoped>

</style>

```

### 2. 禁用

---

<TestRxzCheckboxExp2></TestRxzCheckboxExp2>

``` vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-checkbox :items="items" v-model="data" disabled></rxz-checkbox>
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
const data = ref([items[0]]);
</script>

<style lang="scss" scoped>

</style>

```

### 3. 使用bindingValue

祖先组件通过 registerBindingValue 注册binding值，checkbox进行自动绑定

---

<TestRxzCheckboxExp3></TestRxzCheckboxExp3>

``` vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-checkbox :items="items"></rxz-checkbox>
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
const data = ref([]);
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>

```
