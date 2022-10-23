# RxzLabel 标签

<TestRxzLabel></TestRxzLabel>

```vue
<template>
  <rxz-form>
    <rxz-form-item>
      <rxz-label>Label</rxz-label>
      <span class="rxz-form-text">test</span>
    </rxz-form-item>
    <rxz-form-item>
      <rxz-label required show-colon>Label</rxz-label>
      <span class="rxz-form-text">test</span>
    </rxz-form-item>
  </rxz-form>
</template>
```

## Attribute 属性

| 参数       | 类型      | 描述        | 可选值        | 默认值   | 必须  |
| -------- | ------- | --------- | ---------- | ----- | --- |
| required | Boolean | 是否显示必须的星号 | true/false | false |     |
| showColon | Boolean | 是否显示冒号 | true/false | false |     |
