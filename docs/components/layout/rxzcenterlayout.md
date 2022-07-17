# RxzCenterLayout 居中视图

```
<template>
  <div class="container">
    <rxz-center-layout :showShadow="true">
      <p>我是内容</p>
    </rxz-center-layout>
  </div>
</template>
<style lang="scss" scoped>
.container{
  position: relative;
  width: 400px;
  height: 400px;
  border: solid 1px lightgray;
}
</style>
```

## Attribute 属性

| 参数       | 类型    | 描述                 | 可选值     | 默认值 | 必须 |
| ---------- | ------- | -------------------- | ---------- | ------ | ---- |
| isScroll   | Boolean | 超出最大高度是否滚动 | true/false | true   |      |
| showShadow | Boolean | 是否显示阴影         | true/false | false  |      |
