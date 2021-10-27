# 使用工具集

使用方法如下：

## 在js文件中

test.js (需要引入import {utils} from 'rxz-ui')

```
import {utils} from 'rxz-ui'
utils.date.format("YYYY-MM-dd HH:mm:SS",new Date());
```

## 在Vue实例中

test.vue 

```
<template>
</template>
<script>
export default {
  methods:{
    format(date){
      return this.$rxz.date.format("YYYY-MM-dd HH:mm:SS",date);
    }
  }
}
</script>
<style lang="scss">
</style>
```

