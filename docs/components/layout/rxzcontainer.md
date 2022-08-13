# RxzContainer 容器

<TestRxzContainer></TestRxzContainer>

```vue
<template>
  <rxz-container class="container">
    test-container
  </rxz-container>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>
```

## Attribute 属性

| 参数            | 类型                   | 描述                 | 可选值                     | 默认值                         | 必须  |
| ------------- | -------------------- | ------------------ | ----------------------- | --------------------------- | --- |
| position      | RxzContainerPosition | 内容位置               | 见RxzContainerPosition枚举 | RxzContainerPosition.CENTER |     |
| offsetX       | Number               | 内容相对于position的X轴偏移 | -                       | 0                           |     |
| offsetY       | Number               | 内容相对于position的Y轴偏移 | -                       | 0                           |     |
| allowOverflow | Boolean              | 是否允许内容溢出边界         | true/false              | false                       |     |

## Event 事件

| 事件名称   | 描述         | 回调参数列表 |
| ------ | ---------- | ------ |
| resize | 容器或者内容大小变化 | event  |

## Slot 具名插槽

| 插槽名称    | 描述  | 作用域对象 |
| ------- | --- | ----- |
| default | 内容  | -     |

## 内置数据结构

1. RxzContainerPosition 
  ``` ts
  enum RxzContainerPosition = {
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

## Example 案例

### 1. 内容位置

---

<TestRxzContainerExp1></TestRxzContainerExp1>

``` vue
<template>
  <rxz-button @click="changePos">切换位置</rxz-button>
  <rxz-container class="container" :position="position">
    test-container
  </rxz-container>
</template>
<script>
import { RxzContainerPosition } from '@/components';
export default {
  data () {
    return {
      position: RxzContainerPosition.CENTER,
      index: 0,
      positions: Object.values(RxzContainerPosition),
    }
  },
  methods: {
    changePos() {
      this.position = this.positions[this.index++];
      if (this.index >= this.positions.length) {
        this.index = 0;
      }
    }
  },
};
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

``` vue
<template>
  <rxz-container class="container" :offset-x="-100" :offset-y="-100">
    test-container
  </rxz-container>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: grey;
}
</style>
```