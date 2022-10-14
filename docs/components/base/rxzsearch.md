# RxzSearch 搜索

<TestRxzSearch></TestRxzSearch>

```vue
<template>
  <rxz-search @search="handleSearch"></rxz-search>
</template>
<script>
export default {
  methods: {
    handleSearch(value) {
      console.log(value);
    }
  }
}
</script>
```

## Attribute 属性

| 参数             | 类型                                | 描述                             | 可选值                             | 默认值         | 必须  |
| -------------- | --------------------------------- | ------------------------------ | ------------------------------- | ----------- | --- |



## Event 事件

| 事件名称             | 描述         | 回调参数列表 |
| -------------------- | ------------ | ------------ |
| search                | 搜索事件 | 搜索值   |


## API

1. search(): void 主动触发搜索事件

## Example 案例

### 1. 主动触发

---

<TestRxzSearchExp1></TestRxzSearchExp1>

```vue
<template>
  <rxz-search @search="handleSearch" ref="search"></rxz-search>
  <rxz-button @click="handleClick">搜索</rxz-button>
</template>
<script>
export default {
  methods: {
    handleSearch(value) {
      console.log(value);
    },
    handleClick() {
      this.$refs.search.search();
    }
  }
}
</script>
```
