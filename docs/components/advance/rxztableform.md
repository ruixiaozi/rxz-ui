# RxzTableForm 表格表单

<TestTableForm></TestTableForm>


```vue
<template>
  <div>
    <RxzTableForm :row-config="rowConfig" v-model="data"></RxzTableForm>
  </div>
  <div><RxzButton @click="addRow">添加一行</RxzButton></div>
  <p>绑定数据：</p>
  <p>{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzInput, RxzTableFormRowConfig, RxzTextarea } from '@/components';
import { useRxzValidator } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();

const rowConfig: RxzTableFormRowConfig = {
  test: {
    label: '测试',
    validators: [useRxzValidator().required],
    slotCnt: RxzInput,
    errorTip: {},
  },
  test2: {
    label: '测试2',
    validators: [useRxzValidator().required],
    slotCnt: RxzTextarea,
    errorTip: {},
  }
}

const data = ref<any>([
  {
    test: '1',
    test2: '1',
  },
]);

let index = 2;
const addRow = () => {
  data.value.push({
    test: index,
    test2: index,
  })
}

</script>

<style lang="scss" scoped>

</style>
```

## v-model

| 名称                  | 类型     | 描述     | 可选值 | 必须  |
| ------------------- | ------ | ------ | --- | --- |
| modelValue(default) | Array | 数组表单数据对象 | -   |   是  |

## Attribute 属性

| 参数         | 类型                                | 描述              | 可选值                 | 默认值      | 必须  |
| ---------- | --------------------------------- | --------------- | ------------------- | -------- | --- |
| modelValue | Array                   | 数组表单数据对象          | -                   | -       |   是  |
| rowConfig | RxzTableFormRowConfig                   | 表格表单行配置          | -                   | -       |   是  |
| pageSize | Number                   | 表格的单页大小          | -                   | 5     |     |


## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## 内置数据结构

1. RxzTableFormRowConfig 

```ts
interface RxzTableFormRowConfig {
  [key: string]: RxzTableFormColumnConfig,
}
```

2. RxzTableFormColumnConfig 

```ts
interface RxzFormItemConfig {
  default?: any;
  validators: RxzValidator[];
}

interface RxzTableFormColumnConfig extends RxzFormItemConfig {
  // 表格列名称
  label: string;
  // formItem的默认插槽使用一个组件，如果为空，则默认显示当前formitem的值
  slotCnt?: Component,
  props?: any,
  errorTip?: RxzValidatorErrorTips,
}
```

