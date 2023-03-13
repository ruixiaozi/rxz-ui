# RxzButtonGroup 按钮组

<TestButtonGroup></TestButtonGroup>

```vue
<template>
  <rxz-button-group :buttons="buttons"></rxz-button-group>
</template>

<script setup lang="ts">import { RxzButtonGroupItem } from '@/components/advance';
import { RXZ_BUTTON_TYPE_ENUM } from '@/components/base/RxzButton';

defineProps<{

}>();
defineEmits<{

}>();
const buttons: RxzButtonGroupItem[] = [
  {
    text: '新建',
    type: RXZ_BUTTON_TYPE_ENUM.primary,
  },
  {
    text: '编辑',
    onClick: () => {
      console.log('编辑');
    }
  },
  {
    text: '批量删除'
  },
  {
    text: '关闭',
    onClick: () => {
      console.log('关闭');
    }
  },
];
</script>

<style lang="scss" scoped>

</style>


```

## Attribute 属性

| 参数             | 类型                                | 描述                             | 可选值                             | 默认值         | 必须  |
| -------------- | --------------------------------- | ------------------------------ | ------------------------------- | ----------- | --- |
| buttons           | RxzButtonGroupItem[]           | 按钮数组                          | -                     | []    |     |
| max    | Number                     | 最大显示按钮数                      | -                      | 3      |     |
| link    | Boolean                           | 是否为链接              | true/false                      | false       |     |
| data    | Object                           | onClick时，第二个参数传入此值              | -                      | -       |     |

## 内置数据结构

1. RxzButtonGroupItem

```ts
interface RxzButtonGroupItem {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  type?: BUTTON_TYPE_ENUM;
  width?: string;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  onClick?: (...args: any[]) => any;
}
```

## Example 案例

### 1. 链接形式

---

<TestButtonGroupExp1></TestButtonGroupExp1>

```vue
<template>
  <rxz-button-group :buttons="buttons" :link="true"></rxz-button-group>
</template>

<script setup lang="ts">import { RxzButtonGroupItem } from '@/components/advance';
import { RXZ_BUTTON_TYPE_ENUM } from '@/components/base/RxzButton';

defineProps<{

}>();
defineEmits<{

}>();
const buttons: RxzButtonGroupItem[] = [
  {
    text: '新建',
    type: RXZ_BUTTON_TYPE_ENUM.primary,
  },
  {
    text: '编辑',
    onClick: () => {
      console.log('编辑');
    }
  },
  {
    text: '批量删除'
  },
  {
    text: '关闭',
    onClick: () => {
      console.log('关闭');
    }
  },
];
</script>

<style lang="scss" scoped>

</style>

```
