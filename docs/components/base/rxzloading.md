# RxzLoading 加载

```
<template>
  <div class="container">
    <rxz-loading :loading="loading" text="正在加载">
      <div class="content">
        我是内容
      </div>
    </rxz-loading>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading:true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.loading = false;
    },3000);
  }
};
</script>
<style lang="scss" scoped>
.container{
  width: 200px;
  height: 200px;
  .content{
    background-color: green;
    text-align: center;
    color: #ffffff;
    line-height: 200px;
  }
}
</style>
```

## Attribute 属性

| 参数    | 类型    | 描述           | 可选值     | 默认值     | 必须 |
| ------- | ------- | -------------- | ---------- | ---------- | ---- |
| loading | Boolean | 是否正在加载   | true/false | true       |      |
| text    | String  | 加载文字       | -          | 加载中     |      |
| bgColor | String  | 遮罩颜色       | -          | \#0000002F |      |
| color   | String  | 文字和图标颜色 | -          | \#FFFFFF   |      |

