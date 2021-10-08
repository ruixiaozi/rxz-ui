# RxzFlipCard 翻转卡片

```
<template>
  <rxz-flip-card :isFront="isFront" @mouseover="isFront = false" @mouseout="isFront = true">
    <template v-slot:front>
      <p class="front">我是正面</p>
    </template>
    <template v-slot:back>
      <p class="back">我是反面</p>
    </template>
  </rxz-flip-card>
</template>
<script>
export default {
  data () {
    return {
      isFront:true
    }
  }
};
</script>
<style lang="scss" scoped>
.front{
  background-color: green;
}
.back{
  background-color: blue;
}
.front,.back{
  color: #ffffff;
  width: 100%;
  height: 100%;
}
</style>
```

<test-rxz-flip-card/>

## Attribute 属性

| 参数         | 类型    | 描述         | 可选值     | 默认值 | 必须 |
| ------------ | ------- | ------------ | ---------- | ------ | ---- |
| isFront      | Boolean | 是否显示正面 | true/false | true   |      |
| width        | String  | 宽度         | -          | 100px  |      |
| height       | String  | 高度         | -          | 100px  |      |
| borderRadius | String  | 圆角         | -          | none   |      |

## Slot 具名插槽

| 插槽名称 | 描述 |
| -------- | ---- |
| front    | 正面 |
| back     | 反面 |

