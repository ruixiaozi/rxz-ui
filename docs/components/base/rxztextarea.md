# RxzTextarea 文本域

<TestRxzTextarea></TestRxzTextarea>

```vue
<template>
  <rxz-textarea v-model="data"></rxz-textarea>
  <p>输入：</p>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>

```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | String | 绑定数据 | -   |     |

## Attribute 属性

| 参数          | 类型      | 描述   | 可选值        | 默认值     | 必须  |
| ----------- | ------- | ---- | ---------- | ------- | --- |
| modelValue  | String     | 绑定数据 | -          | ''      |     |
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

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>

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

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>

```

### 3. 使用bindingValue

祖先组件通过 registerBindingValue 注册binding值，textarea进行自动绑定

---

<TestRxzTextareaExp3></TestRxzTextareaExp3>

```vue
<template>
  <div>
    <rxz-textarea></rxz-textarea>
    <p>输入：</p>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>

```