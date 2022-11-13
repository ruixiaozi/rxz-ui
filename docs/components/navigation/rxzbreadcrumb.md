# RxzBreadcrumb 面包屑

<TestRxzBreadcrumb></TestRxzBreadcrumb>

```vue
<template>
  <rxz-breadcrumb :breadcrumbs="breadcrumbs"></rxz-breadcrumb>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbs: [
        {
          text: '首页',
          path: '/'
        },
        {
          text: '组件',
          path: '/components'
        },
        {
          text: '面包屑',
        },
      ]
    }
  },
}
</script>
```

## Attribute 属性

| 参数             | 类型                                | 描述                             | 可选值                             | 默认值         | 必须  |
| -------------- | --------------------------------- | ------------------------------ | ------------------------------- | ----------- | --- |
| breadcrumbs           | RxzBreadcrumbItem[]           | 面包屑数组                          | -                     | []    |     |
| router | Object | vueRouter实例；如果当前组件需要在弹出层中渲染，弹出层不会挂载vue-router，需要传入 | - | - | |

## 内置数据结构

1. RxzBreadcrumbItem

```ts
interface RxzBreadcrumbItem {
  text: string;
  path?: string;
}
```
