# RxzPagination 分页

<TestRxzPagination></TestRxzPagination>

```vue
<template>
  <rxz-pagination v-model="pagination"></rxz-pagination>
</template>

<script setup lang="ts">import { RxzPaginations } from '@/components';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();

const pagination = ref<RxzPaginations>({
  page: 6,
  pageSize: 10,
  total: 101,
})

</script>

<style lang="scss" scoped>

</style>

```

## v-model

| 名称                  | 类型     | 描述     | 可选值 | 必须  |
| ------------------- | ------ | ------ | --- | --- |
| modelValue(default) | RxzPaginations | 分页信息 | -   |  是   |

## Attribute 属性

| 参数           | 类型             | 描述                      | 可选值 | 默认值 | 必须  |
| ------------ | -------------- | ----------------------- | --- | --- | --- |
| pageStart    | Number         | 页码起始数字                  | -   | 0   |     |
| displayStart | Number         | 页码显示的起始数字（与pageStart对应） | -   | 1   |     |
| modelValue   | RxzPaginations | 分页信息                    | -   | -   | 是   |

## 内置数据结构

1. RxzPaginations 

```ts
interface RxzPaginations {
  page: number;
  pageSize: number;
  total: number;
}
```

## Event 事件

| 事件名称              | 描述           | 回调参数列表 |
| ----------------- | ------------ | ------ |
| update:modelValue | v-model绑定的事件 | -      |

## Example 案例

### 1. 起始页和实际显示页相同

---

<TestRxzPaginationExp1></TestRxzPaginationExp1>

```vue
<template>
  <rxz-pagination v-model="pagination" :pageStart="1"></rxz-pagination>
</template>

<script setup lang="ts">import { RxzPaginations } from '@/components';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();

const pagination = ref<RxzPaginations>({
  page: 2,
  pageSize: 10,
  total: 100,
})

</script>

<style lang="scss" scoped>

</style>

```
