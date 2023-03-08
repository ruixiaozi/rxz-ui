# RxzSwitch 开关按钮

<TestRxzSwitch></TestRxzSwitch>

```vue
<template>
  <rxz-switch v-model="data"></rxz-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const data = ref(true);
</script>

<style lang="scss" scoped>

</style>
```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | Boolean | 绑定数据 | -   |     |

## Attribute 属性

| 参数         | 类型      | 描述   | 可选值        | 默认值   | 必须  |
| ---------- | ------- | ---- | ---------- | ----- | --- |
| modelValue | Boolean     | 绑定数据 | -          | false    |     |
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

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const data = ref(true);
</script>

<style lang="scss" scoped>

</style>

```

### 2. 禁用

---

<TestRxzSwitchExp2></TestRxzSwitchExp2>

```vue
<template>
  <rxz-switch v-model="data" on-text="开启" off-text="关闭" disabled></rxz-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const data = ref(true);
</script>

<style lang="scss" scoped>

</style>

```

### 3. 使用bindingValue

祖先组件通过 registerBindingValue 注册binding值，switch进行自动绑定

---

<TestRxzSwitchExp3></TestRxzSwitchExp3>

```vue
<template>
  <div>
    <rxz-switch></rxz-switch>
  </div>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const data = ref(true);
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>

```