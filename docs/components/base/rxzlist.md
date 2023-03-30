# RxzList 列表

<TestRxzList></TestRxzList>

```vue
<template>
  <RxzList class="list" v-slot="{item}" :items="items">
    <div class="item">
      {{ item }}
    </div>
  </RxzList>
  <rxz-button @click="handleChange">改变数据</rxz-button>
</template>

<script setup lang="ts">import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
let items = ref<any[]>([]);
const handleChange = () => {
  const len = (Math.random() * 20000) + 20000;
  const newItems = [];
  for (let i = 1; i <= len; i++) {
    newItems.push({id: i, value: i + '字符内容'.repeat(Math.random() * 20) })
  }
  items.value = newItems;
}
handleChange();
</script>

<style lang="scss" scoped>
.list {
  height: 200px;
}
.item {
  height: 30px;
  width: 100%;
  border: 1px solid #000;
}
</style>

```

## Attribute 属性

| 参数          | 类型      | 描述   | 可选值        | 默认值     | 必须  |
| ----------- | ------- | ---- | ---------- | ------- | --- |
| items  | Array     | 列表数据 | -          | []      |     |
| perItemHeight    | Number | 预计列表项高度   | - | 30   |     |
| computeRealItemHeight    | Boolean | 是否开启计算列表项高度，默认关闭，使用perItemHeight   | true/false | false   |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |

## Slot 插槽

| 插槽名称 | 描述 | 作用域对象           |
| -------- | ---- | --------------- |
| default    | 正面 | { item: any; index: number } |

