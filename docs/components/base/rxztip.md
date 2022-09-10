# RxzTip 提示条

<TestRxzTip></TestRxzTip>

```vue
<template>
  <div>
    <rxz-tip type='information'>information</rxz-tip>
    <rxz-tip type='success'>success</rxz-tip>
    <rxz-tip type='warning'>warning</rxz-tip>
    <rxz-tip type='error'>error</rxz-tip>
  </div>
</template>
<style scoped>
div > * {
  margin-top: 8px;
}
</style>
```

## Attribute 属性

| 参数       | 类型                      | 描述    | 可选值                   | 默认值         | 必须  |
| -------- | ----------------------- | ----- | --------------------- | ----------- | --- |
| type     | String \| TIP_TYPE_ENUM | 提示类型  | 参见内置数据结构TIP_TYPE_ENUM | information |     |
| closable | Boolean                 | 是否可关闭 | true/false            | false       |     |

## 内置数据结构

1. TIP_TYPE_ENUM 

```ts
export enum TIP_TYPE_ENUM {
  success='success',
  information='information',
  warning='warning',
  error='error',
}
```

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
    <rxz-tip type='information' closable>information</rxz-tip>
    <rxz-tip type='success' closable>success</rxz-tip>
    <rxz-tip type='warning' closable>warning</rxz-tip>
    <rxz-tip type='error' closable>error</rxz-tip>
  </div>
</template>
<style scoped>
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
  <rxz-tip ref="tip" type='success'>success</rxz-tip>
  <br />
  <div>
    <rxz-button @click="handleShow">显示</rxz-button>
    <rxz-button @click="handleHidden">隐藏</rxz-button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleShow() {
        this.$refs.tip.show();
      },
      handleHidden() {
        this.$refs.tip.hidden();
      }
    }
  };
</script>
```
