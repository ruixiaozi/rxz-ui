# RxzTip 提示条

<TestRxzTip></TestRxzTip>

```vue
<template>
  <div>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.information'>information</rxz-tip>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.success'>success</rxz-tip>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.warning'>warning</rxz-tip>
    <rxz-tip :type="RXZ_TIP_TYPE_ENUM.error">error</rxz-tip>
  </div>
</template>
<script setup lang="ts">
import { RXZ_TIP_TYPE_ENUM } from '@/components/base/RxzTip'
defineProps<{

}>();
defineEmits<{

}>();
</script>
<style lang="scss" scoped>
div > * {
  margin-top: 8px;
}
</style>
```

## Attribute 属性

| 参数       | 类型                      | 描述    | 可选值                   | 默认值         | 必须  |
| -------- | ----------------------- | ----- | --------------------- | ----------- | --- |
| type     | String \| RXZ_TIP_TYPE_ENUM | 提示类型  | 参见内置数据结构RXZ_TIP_TYPE_ENUM | information |     |
| closable | Boolean                 | 是否可关闭 | true/false            | false       |     |

## 内置数据结构

1. RXZ_TIP_TYPE_ENUM 

```ts
export enum RXZ_TIP_TYPE_ENUM {
  success='success',
  information='information',
  warning='warning',
  error='error',
}
```

## Event 事件

| 事件名称   | 描述                      | 回调参数列表 |
| ------ | ----------------------- | ------ |
| show   | 调用show() api触发的事件       | -      |
| hidden | 调用show() api或者点击关闭触发的事件 | -      |

## API

1. show(): void 显示提示条
2. hidden(): void 隐藏提示条

## Example 案例

### 1. 可关闭

---

<TestRxzTipExp1></TestRxzTipExp1>

```vue
<template>
  <div>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.information' closable>information</rxz-tip>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.success' closable>success</rxz-tip>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.warning' closable>warning</rxz-tip>
    <rxz-tip :type='RXZ_TIP_TYPE_ENUM.error' closable>error</rxz-tip>
  </div>
</template>
<script setup lang="ts">
import { RXZ_TIP_TYPE_ENUM } from '@/components/base/RxzTip'
defineProps<{

}>();
defineEmits<{

}>();
</script>
<style lang="scss" scoped>
div > * {
  margin-top: 8px;
}
</style>

```

### 2. API控制显示隐藏

---

<TestRxzTipExp2></TestRxzTipExp2>

```vue
<template>
  <rxz-tip ref="tip" :type='RXZ_TIP_TYPE_ENUM.success'>success</rxz-tip>
  <br />
  <div>
    <rxz-button @click="handleShow">显示</rxz-button>
    <rxz-button @click="handleHidden">隐藏</rxz-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RxzTip, RXZ_TIP_TYPE_ENUM } from '@/components/base/RxzTip'
const tip = ref<InstanceType<typeof RxzTip>>();

const handleShow = () => {
  tip.value?.show();
}

const handleHidden = () => {
  tip.value?.hidden();
}

</script>
<style lang="scss" scoped>
</style>
```
