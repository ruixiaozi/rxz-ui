# RxzSelect 下拉选择器

<TestRxzSelect></TestRxzSelect>

```vue
<template>
  <rxz-select v-model="data" :options="options"></rxz-select>
  <p>{{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const options = [
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
];
const data = ref(options[0]);
</script>

<style lang="scss" scoped>

</style>

```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | RxzSelectOption | 绑定数据 | -   |     |

## Attribute 属性

| 参数       | 类型               | 描述     | 可选值     | 默认值  | 必须 |
| ---------- | ------------------ | -------- | ---------- | ------- | ---- |
| modelValue | RxzSelectOption                | 绑定数据 | -          | -      |      |
| width      | String             | 宽度     | -          | '120px' |      |
| options    | RxzSelectOption[] | 下拉选项 | -          | []      |      |
| disabled   | Boolean            | 是否禁用 | true/false | false   |      |
| isButton   | Boolean            | 是否为按钮 | true/false | true   |      |
| placeholder   | String            | 提示内容 | - | ''   |      |
| bindProperty   | String            | 值绑定的属性，默认绑定整个选项对象 | - | -   |      |
| clear   | Boolean            | 是否可清除 | true/false | false   |      |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## 内置数据结构

1. RxzSelectOption

```ts
interface RxzSelectOption {
  label: string;
  value: any;
  key: string | number;
  onClick?: (...args: any[]) => any;
}
```



## Example 案例

### 1. 禁用

---

<TestRxzSelectExp1></TestRxzSelectExp1>

```vue
<template>
  <rxz-select v-model="data" :options="options" disabled></rxz-select>
  <p>{{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const options = [
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
];
const data = ref(options[0]);
</script>

<style lang="scss" scoped>

</style>
```

### 2. 文本模式

---

<TestRxzSelectExp2></TestRxzSelectExp2>

```vue
<template>
  <rxz-select v-model="data" :options="options" width="fit-content" :isButton="false"></rxz-select>
  <p>{{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const options = [
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
];
const data = ref(options[0]);
</script>

<style lang="scss" scoped>

</style>
```

### 3. 使用bindingValue

祖先组件通过 registerBindingValue 注册binding值，select进行自动绑定

---

<TestRxzSelectExp3></TestRxzSelectExp3>

```vue
<template>
  <div>
    <rxz-select :options="options"></rxz-select>
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const options = [
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
];
const data = ref(options[0]);
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>
```

### 4. bindProperty绑定值

可以指定绑定选项的某个属性，例如绑定value

---

<TestRxzSelectExp4></TestRxzSelectExp4>

```vue
<template>
  <rxz-select v-model="data" bind-property="value" :options="options"></rxz-select>
  <p>{{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const options = [
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
];
const data = ref(2);
</script>

<style lang="scss" scoped>

</style>

```

### 5. 可清除

---

<TestRxzSelectExp5></TestRxzSelectExp5>

```vue
<template>
  <rxz-select v-model="data" :clear="true" :options="options"></rxz-select>
  <p>{{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const options = [
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
];
const data = ref(options[0]);
</script>

<style lang="scss" scoped>

</style>

```