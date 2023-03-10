# RxzTree 树形菜单

<TestRxzTree></TestRxzTree>

```vue
<template>
  <RxzTree v-model="data"></RxzTree>
  <p>菜单数据：</p>
  <p>{{ data }}</p>
</template>

<script setup lang="ts">import { RxzTreeItem } from '@/components/navigation/RxzTree';
import { reactive } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = reactive<RxzTreeItem[]>([
  {
    key: '1',
    label: 'tree1',
    isFold: true,
    children: [
      {
        key: '1-1',
        label: 'tree1-1',
        isFold: true,
        children: [
          {
            key: '1-1-1',
            label: 'tree1-1-1',
            isFold: true,
            fetchChildren: () => {
              return new Promise<RxzTreeItem[]>((resolve) => {
                setTimeout(() => {
                  resolve([
                    {
                      key: '1-1-1-1',
                      label: 'tree1-1-1-1',
                    },
                    {
                      key: '1-1-1-2',
                      label: 'tree1-1-1-2',
                    },
                  ])
                }, 1000);
              })
            }
          },
          {
            key: '1-1-2',
            label: 'tree1-1-2',
          },
        ]
      },
      {
        key: '1-2',
        label: 'tree1-2',
        disabled: true,
      },
      {
        key: '1-3',
        label: 'tree1-3',
      },
    ]
  },
  {
    key: '2',
    label: 'tree2',
  },
])
</script>

<style lang="scss" scoped>

</style>

```

## v-model

| 名称                | 类型        | 描述                 | 可选值 | 必须 |
| ------------------- | ----------- | -------------------- | ------ | ---- |
| modelValue(default) | RxzTreeItem[] | 绑定tree列表 | -      |   是   |

## Attribute 属性

| 参数             | 类型                                | 描述                             | 可选值                             | 默认值         | 必须  |
| -------------- | --------------------------------- | ------------------------------ | ------------------------------- | ----------- | --- |
| modelValue | RxzTreeItem[] | 绑定tree列表 | - | - | 是 |
| hiddenIcon       | Boolean | 是否隐藏图标       | -   | false    |     |
| foldIcon       | String | 折叠的图标名称       | -   | "arrow-right"    |     |
| unfoldIcon       | String | 展开的图标名称       | -   | "arrow-down"    |     |
| iconColor       | String | 图标颜色       | -   | "#a8abb2"    |     |
| indent       | String | 缩进值       | -   | "16px"    |     |

## Event 事件

| 事件名称          | 描述 | 回调参数列表 |
| ----------------- | ---- | ------------ |
| update:modelValue | 更新 | 更新值       |
| selected | 选中某个结点 | 选中项的key       |

## 内置数据结构

1. RxzTreeItem

```ts
interface RxzTreeItem {
  key: string;
  label: string;
  isFold?: boolean;
  foldIcon?: string;
  unfoldIcon?: string;
  iconColor?: string;
  disabled?: boolean;
  children?: RxzTreeItem[];
  // 和fetch绑定，一般不需要传入，由内部设定
  loading?: boolean;
  // 异步获取子树
  fetchChildren?: FetchRxzTreeItemsFunction;
}
```

2. FetchRxzTreeItemsFunction

```ts
type FetchRxzTreeItemsFunction = () => Promise<RxzTreeItem[]>;
```
