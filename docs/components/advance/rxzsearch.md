# RxzSearch 搜索

<TestRxzSearch></TestRxzSearch>

```vue
<template>
  <rxz-search @search="handleSearch"></rxz-search>
</template>

<script setup lang="ts">
defineProps<{

}>();
defineEmits<{

}>();
const handleSearch = (value: string) => {
  console.log(value);
}
</script>

<style lang="scss" scoped>

</style>

```

## Event 事件

| 事件名称             | 描述         | 回调参数列表 |
| -------------------- | ------------ | ------------ |
| search                | 搜索事件，回车触发 | 搜索值   |


## API

1. search(): void 主动触发搜索事件

## Example 案例

### 1. 主动触发

---

<TestRxzSearchExp1></TestRxzSearchExp1>

```vue
<template>
  <rxz-search @search="handleSearch" ref="search"></rxz-search>
  <rxz-button @click="handleClick">搜索</rxz-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RxzSearch } from '@/components/advance'

defineProps<{

}>();
defineEmits<{

}>();
const handleSearch = (value: string) => {
  console.log(value);
}

const search = ref<InstanceType<typeof RxzSearch>>();

const handleClick = () => {
  search.value?.search();
}
</script>

<style lang="scss" scoped>

</style>

```
