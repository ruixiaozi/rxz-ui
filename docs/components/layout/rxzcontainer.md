# RxzContainer 容器

<TestRxzContainer></TestRxzContainer>

```vue
<template>
  <rxz-container class="container">
    test-container
  </rxz-container>
</template>

<script setup lang="ts">
defineProps<{

}>();
defineEmits<{

}>();

</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>
```

## Attribute 属性

| 参数            | 类型                   | 描述                     | 可选值                     | 默认值                         | 必须  |
| ------------- | -------------------- | ---------------------- | ----------------------- | --------------------------- | --- |
| position      | RXZ_CONTAINER_POSITION_E | 默认插槽内容位置               | 见RXZ_CONTAINER_POSITION_E枚举 | RXZ_CONTAINER_POSITION_E.CENTER |     |
| offsetX       | Number               | 默认插槽内容相对于position的X轴偏移 | -                       | 0                           |     |
| offsetY       | Number               | 默认插槽内容相对于position的Y轴偏移 | -                       | 0                           |     |
| width      | String               | 默认插槽内容宽度，默认自适应插槽内容宽度，最大容器大小                  | -                       | undefined                   |     |
| height      | String               | 默认插槽内容高度，默认自适应插槽内容高度，最大容器大小                   | -                       | undefined                   |     |
| allowOverflow | Boolean              | 默认插槽是否允许内容溢出边界         | true/false              | false                       |     |

## Event 事件

| 事件名称   | 描述         | 回调参数列表 |
| ------ | ---------- | ------ |
| resize | 容器或者内容大小变化 | event  |
| overflow | allowOverflow为false有效，offset与实际可偏移的出现差值时 | {diffX: number, diffY: number}  |

## Slot 具名插槽

| 插槽名称         | 描述     | 作用域对象 |
| ------------ | ------ | ----- |
| default      | 默认插槽内容 | -     |
| topleft      | 左上角    | -     |
| topcenter    | 顶部居中   | -     |
| topright     | 右上角    | -     |
| centerleft   | 左侧居中   | -     |
| center       | 居中     | -     |
| centerright  | 右侧居中   | -     |
| bottomleft   | 左下角    | -     |
| bottomcenter | 底部居中   | -     |
| bottomright  | 右下角    | -     |

## 内置数据结构

1. RXZ_CONTAINER_POSITION_E 
   
   ```ts
   enum RXZ_CONTAINER_POSITION_E = {
    TOP_LEFT='TOP_LEFT',
    TOP_CENTER='TOP_CENTER',
    TOP_RIGHT='TOP_RIGHT',
    CENTER_LEFT='CENTER_LEFT',
    CENTER='CENTER_CENTER',
    CENTER_RIGHT='CENTER_RIGHT',
    BOTTOM_LEFT='BOTTOM_LEFT',
    BOTTOM_CENTER='BOTTOM_CENTER',
    BOTTOM_RIGHT='BOTTOM_RIGHT',
   }
   ```

2. RXZ_CONTAINER_SLOT_E
   
   ```ts
   export enum RXZ_CONTAINER_SLOT_E {
    topleft='topleft',
    topcenter='topcenter',
    topright='topright',
    centerleft='centerleft',
    center='center',
    centerright='centerright',
    bottomleft='bottomleft',
    bottomcenter='bottomcenter',
    bottomright='bottomright',
   }
   ```

## Example 案例

### 1. 内容位置

---

<TestRxzContainerExp1></TestRxzContainerExp1>

```vue
<template>
  <rxz-button @click="changePos">切换位置</rxz-button>
  <rxz-container class="container" :position="position">
    test-container
  </rxz-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RXZ_CONTAINER_POSITION_E } from '@/components/layout/RxzContainer';
defineProps<{

}>();
defineEmits<{

}>();
const position = ref(RXZ_CONTAINER_POSITION_E.CENTER);
let index = 0;
const positions = Object.values(RXZ_CONTAINER_POSITION_E);

const changePos = () => {
  position.value = positions[index++];
  if (index >= positions.length) {
    index = 0;
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>

```

### 2. 偏移

---

<TestRxzContainerExp2></TestRxzContainerExp2>

```vue
<template>
  <rxz-container class="container" :offset-x="-100" :offset-y="-100">
    test-container
  </rxz-container>
</template>

<script setup lang="ts">
defineProps<{

}>();
defineEmits<{

}>();

</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>

```

### 3. 插槽

---

<TestRxzContainerExp3></TestRxzContainerExp3>

```vue
<template>
  <rxz-container class="container">
    <template v-for="slotName in slotNames" v-slot:[slotName]>test-container</template>
  </rxz-container>
</template>

<script setup lang="ts">
import { RXZ_CONTAINER_SLOT_E } from '@/components';

defineProps<{

}>();
defineEmits<{

}>();
const slotNames = Object.values(RXZ_CONTAINER_SLOT_E);
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>
```