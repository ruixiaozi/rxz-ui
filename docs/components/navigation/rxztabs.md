# RxzTabs 标签页

<TestRxzTabs></TestRxzTabs>

```vue
<template>
  <rxz-tabs :tabs="items" v-model="active">
    <div v-if="active?.key === items[0].key">我是tab1</div>
    <div v-if="active?.key === items[1].key">我是tab2</div>
    <div v-if="active?.key === items[2].key">我是tab3</div>
  </rxz-tabs>
</template>
<script lang="ts">
export default {
  data () {
    return {
      active: null as any,
      items: [
        {
          name: '标签1',
          key: '1',
        },
        {
          name: '标签2',
          key: '2',
        },
        {
          name: '标签3',
          key: '3',
        },
      ]
    }
  },
  created() {
    this.active = this.items[0] as any;
  }
};
</script>
```

## v-model

| 名称                | 类型        | 描述                 | 可选值 | 必须 |
| ------------------- | ----------- | -------------------- | ------ | ---- |
| modelValue(default) | RxzTabsItem | 绑定当前选中的标签页 | -      |      |

## Attribute 属性

| 参数             | 类型                                | 描述                             | 可选值                             | 默认值         | 必须  |
| -------------- | --------------------------------- | ------------------------------ | ------------------------------- | ----------- | --- |
| tabs       | RxzTabsItem[] | 标签页数组               | -                     | []    |     |
| modelValue | RxzTabsItem | 当前选中的标签页 | - | null | 是 |

## Event 事件

| 事件名称          | 描述 | 回调参数列表 |
| ----------------- | ---- | ------------ |
| update:modelValue | 更新 | 更新值       |

## 内置数据结构

1. RxzTabsItem

```ts
interface RxzTabsItem {
  name: string;
  key: string;
}
```
