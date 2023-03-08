# RxzBreadcrumb 面包屑

<TestRxzBreadcrumb></TestRxzBreadcrumb>

```vue
<template>
  <rxz-breadcrumb :breadcrumbs="breadcrumbs" :router="router"></rxz-breadcrumb>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{

}>();
defineEmits<{

}>();
const breadcrumbs = [
  {
    text: '首页',
    path: '/'
  },
  {
    text: '组件',
    path: '/components/'
  },
  {
    text: '面包屑',
  },
];
const router = useRouter();
</script>

<style lang="scss" scoped>

</style>

```

## Attribute 属性

| 参数             | 类型                                | 描述                             | 可选值                             | 默认值         | 必须  |
| -------------- | --------------------------------- | ------------------------------ | ------------------------------- | ----------- | --- |
| breadcrumbs           | RxzBreadcrumbItem[]           | 面包屑数组                          | -                     | []    |     |
| router | Router | vueRouter实例；如果不传入router，默认走a连接跳转 | - | - | |

## 内置数据结构

1. RxzBreadcrumbItem

```ts
interface RxzBreadcrumbItem {
  text: string;
  path?: string;
}
```
